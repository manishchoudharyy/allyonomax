import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'lib/gemini.json');
    const iconsDir = path.join(process.cwd(), 'public', 'icons');
    
    // Ensure icons directory exists
    if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

    const fileData = fs.readFileSync(filePath, 'utf8');
    let apps = JSON.parse(fileData);
    let updatedCount = 0;

    for (let app of apps) {
      const imageName = `${app.slug}.webp`;
      const imagePath = path.join(iconsDir, imageName);

      // 1. Skip agar image pehle se folder mein hai
      if (fs.existsSync(imagePath)) {
        console.log(`⏩ Skipping ${app.name}, icon already exists.`);
        continue;
      }

      console.log(`🔍 Processing ${app.name}...`);

      // 2. Domain extract karo referLink se
      let domain = '';
      if (app.referLink) {
        try {
          let url = app.referLink.trim();
          if (!url.startsWith('http')) url = 'https://' + url;
          domain = new URL(url).hostname;
        } catch (e) { continue; }
      }

      if (!domain) continue;

      // 3. Logo dhoodhne ki koshish karo
      const logoPaths = ['/logo.png', '/logo.jpg', '/logo.webp', '/favicon.ico', '/apple-touch-icon.png', '/android-chrome-512x512.png'];
      let logoBuffer = null;

      for (const lp of logoPaths) {
        try {
          const res = await fetch(`https://${domain}${lp}`, { 
            headers: { 'User-Agent': 'Mozilla/5.0' },
            next: { revalidate: 0 } 
          });
          if (res.ok) {
            const ct = res.headers.get('content-type');
            if (ct && ct.startsWith('image/')) {
              logoBuffer = await res.arrayBuffer();
              break;
            }
          }
        } catch (err) {}
      }

      // 4. Agar logo mil gaya toh sharp se convert karke save karo
      if (logoBuffer) {
        try {
          const webpBuffer = await sharp(Buffer.from(logoBuffer))
            .resize(200, 200, { fit: 'inside' })
            .webp({ quality: 85 })
            .toBuffer();

          fs.writeFileSync(imagePath, webpBuffer);
          app.icon = `/icons/${imageName}`; // JSON path update
          updatedCount++;
          console.log(`✅ Fixed icon for: ${app.name}`);
        } catch (err) {
          console.error(`❌ Sharp error for ${app.name}:`, err.message);
        }
      }
    }

    // 5. Updated JSON wapis save karo
    fs.writeFileSync(filePath, JSON.stringify(apps, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: `Checked all apps. Fixed ${updatedCount} icons.`,
      totalApps: apps.length 
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}