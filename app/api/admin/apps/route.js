import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import sharp from 'sharp';
import { revalidatePath } from 'next/cache'; // 👈 Ye add kiya cache clear karne ke liye

// Absolute paths for VPS
const APPS_FILE = '/root/allyonomax/lib/apps.json';
const PUBLIC_ROOT = '/root/allyonomax/public';

function readApps() {
  const data = fs.readFileSync(APPS_FILE, 'utf8');
  return JSON.parse(data);
}

function writeApps(apps) {
  fs.writeFileSync(APPS_FILE, JSON.stringify(apps, null, 2));
}

function checkAuth(request) {
  const token = request.cookies.get('admin_token')?.value;
  return verifyToken(token);
}

// ─── GET: List all apps ───
export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const apps = readApps();
    return NextResponse.json({ success: true, apps });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ─── POST: Add new app ───
export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const newApp = await request.json();
    const apps = readApps();

    const newId = apps.length > 0 ? Math.max(...apps.map(a => a.id || 0)) + 1 : 1;
    newApp.id = newId;

    if (!newApp.slug) {
      newApp.slug = newApp.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    }

    let domain = '';
    if (newApp.referLink && newApp.referLink.trim()) {
      try {
        let url = newApp.referLink.trim();
        if (!url.startsWith('http')) url = 'https://' + url;
        domain = new URL(url).hostname;
      } catch {}
    }

    if (domain) {
      const logoPaths = ['/logo.png', '/logo.jpg', '/logo.webp', '/favicon.ico', '/apple-touch-icon.png', '/android-chrome-512x512.png'];
      let logoBuffer = null;

      for (const lp of logoPaths) {
        try {
          const res = await fetch(`https://${domain}${lp}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
          if (res.ok) {
            const ct = res.headers.get('content-type');
            if (ct && ct.startsWith('image/')) {
              logoBuffer = await res.arrayBuffer();
              break;
            }
          }
        } catch {}
      }

      if (logoBuffer) {
        const webp = await sharp(Buffer.from(logoBuffer)).resize(200, 200, { fit: 'inside' }).webp({ quality: 85 }).toBuffer();
        const iconsDir = path.join(PUBLIC_ROOT, 'icons');
        if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });
        const imgName = `${newApp.slug}.webp`;
        fs.writeFileSync(path.join(iconsDir, imgName), webp);
        newApp.icon = `/icons/${imgName}`;
      } else {
        newApp.icon = '';
      }
    } else {
      newApp.icon = '';
    }

    apps.push(newApp);
    writeApps(apps);

    // 🔥 Force refresh both pages
    revalidatePath('/'); 
    revalidatePath('/[slug]');

    return NextResponse.json({ success: true, id: newId, icon: newApp.icon });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ─── PUT: Update an app ───
export async function PUT(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const updatedApp = await request.json();
    const apps = readApps();
    const index = apps.findIndex(a => a.id === updatedApp.id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'App not found' }, { status: 404 });
    }

    if (!updatedApp.icon) {
      updatedApp.icon = apps[index].icon || '';
    }

    apps[index] = { ...apps[index], ...updatedApp };
    writeApps(apps);

    // 🔥 Force refresh both pages after update
    revalidatePath('/'); 
    revalidatePath('/[slug]');

    return NextResponse.json({ success: true, app: apps[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// ─── DELETE: Delete an app ───
export async function DELETE(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await request.json();
    const apps = readApps();
    const index = apps.findIndex(a => a.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'App not found' }, { status: 404 });
    }

    // const app = apps[index];
    // if (app.icon) {
    //   const iconPath = path.join(PUBLIC_ROOT, app.icon);
    //   if (fs.existsSync(iconPath)) {
    //     fs.unlinkSync(iconPath);
    //   }
    // }

    apps.splice(index, 1);
    writeApps(apps);

    // 🔥 Force refresh after deletion
    revalidatePath('/'); 
    revalidatePath('/[slug]');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}