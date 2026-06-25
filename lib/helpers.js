
import fs from 'fs';
import path from 'path';
function loadAppsData() {
  try {
    let filePath = '/root/allyonomax/lib/apps.json';
    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), 'lib/apps.json');
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading apps.json:", error);
    return [];
  }
}
const onlyAppLinkData = () => {
  let arr = loadAppsData();
  arr = arr.map(app => {
    return {
      name: app.name,
      categories: app.categories,
      referLink: app.referLink,
    }
  })
  let createNewJsonFile = fs.writeFile("./onlyAppLinkData.json", JSON.stringify(arr), ()=> {
    console.log("created")
  });
}
// onlyAppLinkData();
export function getAllApps() {
  return loadAppsData();
}

export function getAppBySlug(slug) {
  const apps = loadAppsData();
  return apps.find(app => app.slug === slug) || null;
}

export function getAppsByCategory(category) {
  const apps = loadAppsData();
  return apps.filter(app => app.categories && app.categories.includes(category))
}

export function getRelatedApps(currentSlug) {
  const apps = loadAppsData();
  const currentApp = apps.find(app => app.slug === currentSlug)
  if (!currentApp) return []

  // Prioritize same-category apps (apps that share at least one category), then fill with others
  const sameCategory = apps.filter(
    app => app.slug !== currentSlug && app.categories?.some(cat => currentApp.categories?.includes(cat))
  )
  const otherApps = apps.filter(
    app => app.slug !== currentSlug && !app.categories?.some(cat => currentApp.categories?.includes(cat))
  )

  const sortIsNewFirst = (a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return 0;
  };

  sameCategory.sort(sortIsNewFirst);
  otherApps.sort(sortIsNewFirst);

  return [...sameCategory, ...otherApps];
}

export function getCategories() {
  const apps = loadAppsData();
  return [...new Set(apps.flatMap(app => app.categories || []))]
}

export function searchApps(query) {
  const apps = loadAppsData();
  const q = query.toLowerCase()
  return apps.filter(app =>
    app.name.toLowerCase().includes(q) ||
    app.categories?.some(cat => cat.toLowerCase().includes(q)) ||
    app.keywords.some(k => k.includes(q))
  )
}

export function renderStars(rating) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  const empty = 5 - full - half
  return { full, half, empty }
}

export function getCurrentYear() {
  return new Date().getFullYear()
}