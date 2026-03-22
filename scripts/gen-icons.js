const fs = require('fs');
const path = require('path');

const apps = [
  { slug: "ok-rummy", name: "OK", color: "#D4AF37" },
  { slug: "yono-rummy", name: "YR", color: "#E8C547" },
  { slug: "yono-777", name: "777", color: "#FF6B35" },
  { slug: "jaiho-rummy", name: "JH", color: "#4ECDC4" },
  { slug: "ind-rummy", name: "IR", color: "#FF6B6B" },
  { slug: "rummy-77", name: "R77", color: "#C44569" },
  { slug: "joy-rummy", name: "JR", color: "#F8B500" },
  { slug: "spin-777", name: "S7", color: "#6C5CE7" },
  { slug: "bingo-101", name: "B1", color: "#00B894" },
  { slug: "rummy-888", name: "888", color: "#E17055" },
  { slug: "jaiho-slots", name: "JS", color: "#0984E3" },
  { slug: "hindi-777", name: "H7", color: "#FD79A8" },
  { slug: "yn-777", name: "YN", color: "#A29BFE" },
  { slug: "ind-club", name: "IC", color: "#55EFC4" },
  { slug: "rummy-ludo", name: "RL", color: "#FDCB6E" },
];

const iconsDir = path.join(__dirname, '..', 'public', 'icons');

apps.forEach(app => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#0a0a15"/>
    </linearGradient>
  </defs>
  <rect width="160" height="160" rx="32" fill="url(#bg)"/>
  <rect x="4" y="4" width="152" height="152" rx="28" fill="none" stroke="${app.color}" stroke-width="2" opacity="0.3"/>
  <text x="80" y="88" font-family="Arial,sans-serif" font-size="${app.name.length > 2 ? '36' : '44'}" font-weight="bold" fill="${app.color}" text-anchor="middle" dominant-baseline="central">${app.name}</text>
  <circle cx="80" cy="130" r="4" fill="${app.color}" opacity="0.5"/>
</svg>`;
  
  fs.writeFileSync(path.join(iconsDir, `${app.slug}.svg`), svg);
});

console.log('Generated ' + apps.length + ' placeholder SVG icons in public/icons/');

// Now update apps.json to use .svg instead of .webp
const appsJsonPath = path.join(__dirname, '..', 'lib', 'apps.json');
let appsJson = fs.readFileSync(appsJsonPath, 'utf-8');
appsJson = appsJson.replace(/\.webp"/g, '.svg"');
fs.writeFileSync(appsJsonPath, appsJson);
console.log('Updated apps.json icon references to .svg');
