import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request) {
  try {
    const newApp = await request.json();
    
    // Apps.json ka path
    const filePath = path.join(process.cwd(), 'lib/apps.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    
    // New ID assign karo
    const newId = data.length > 0 ? Math.max(...data.map(a => a.id)) + 1 : 1;
    newApp.id = newId;
    
    // Slug auto generate
    if (!newApp.slug) {
      newApp.slug = newApp.name.toLowerCase().replace(/ /g, '-');
    }
    
    // ----- DOMAIN EXTRACT FROM REFER LINK -----
    // Refer link se domain extract karo
    let domain = '';
    if (newApp.referLink && newApp.referLink.trim()) {
      try {
        let url = newApp.referLink.trim();
        if (!url.startsWith('http')) {
          url = 'https://' + url;
        }
        const urlObj = new URL(url);
        domain = urlObj.hostname;
        console.log('Extracted domain:', domain);
      } catch (err) {
        console.log('Failed to parse URL:', err.message);
      }
    }
    
    // ----- IMAGE DOWNLOAD CODE -----
    // Agar domain mil gaya to image download karo
    if (domain) {
      try {
        const slug = newApp.slug;
        
        // Try to find logo from different paths
        const logoPaths = [
          '/logo.png',
          '/logo.jpg', 
          '/logo.webp',
          '/favicon.ico',
          '/apple-touch-icon.png',
          '/android-chrome-512x512.png'
        ];
        
        let logoBuffer = null;
        
        for (const logoPath of logoPaths) {
          try {
            const url = `https://${domain}${logoPath}`;
            console.log('Trying:', url);
            
            const response = await fetch(url, {
              method: 'GET',
              headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            
            if (response.ok) {
              const contentType = response.headers.get('content-type');
              if (contentType && contentType.startsWith('image/')) {
                logoBuffer = await response.arrayBuffer();
                console.log('✅ Found logo at:', url);
                break;
              }
            }
          } catch (err) {
            console.log('Failed:', err.message);
          }
        }
        
        if (logoBuffer) {
          // Convert to WebP
          const webpBuffer = await sharp(Buffer.from(logoBuffer))
            .resize(200, 200, { fit: 'inside' })
            .webp({ quality: 85 })
            .toBuffer();
          
          // Create icons folder if not exists
          const iconsDir = path.join(process.cwd(), 'public', 'icons');
          if (!fs.existsSync(iconsDir)) {
            fs.mkdirSync(iconsDir, { recursive: true });
          }
          
          // Save image with slug name
          const imageName = `${slug}.webp`;
          const imagePath = path.join(iconsDir, imageName);
          fs.writeFileSync(imagePath, webpBuffer);
          
          // Update icon path in JSON
          newApp.icon = `/icons/${imageName}`;
          console.log('✅ Image saved:', imageName);
        } else {
          console.log('❌ No logo found for domain:', domain);
          newApp.icon = ''; // Empty if no logo found
        }
        
      } catch (imgError) {
        console.error('Image download error:', imgError);
        newApp.icon = '';
      }
    } else {
      console.log('No valid refer link provided');
      newApp.icon = '';
    }
    
    // Apps array mein push karo
    data.push(newApp);
    
    // File mein save karo
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      id: newId, 
      icon: newApp.icon,
      domain: domain 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}