
import fs from 'fs';
import path from 'path';
function loadAppsData() {
  try {
    const filePath = '/root/allyonomax/lib/apps.json'; 
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading apps.json:", error);
    return [];
  }
}

export function getAllApps() {
  return loadAppsData();
}

export function getAppBySlug(slug) {
  const apps = loadAppsData();
  return apps.find(app => app.slug === slug) || null;
}

export function getAppsByCategory(category) {
  const apps = loadAppsData();
  return apps.filter(app => app.category === category)
}

export function getRelatedApps(currentSlug) {
  const apps = loadAppsData();
  const currentApp = apps.find(app => app.slug === currentSlug)
  if (!currentApp) return []

  // Prioritize same-category apps, then fill with others
  const sameCategory = apps.filter(
    app => app.slug !== currentSlug && app.category === currentApp.category
  )
  const otherApps = apps.filter(
    app => app.slug !== currentSlug && app.category !== currentApp.category
  )

  return [...sameCategory, ...otherApps]
}

export function getCategories() {
  const apps = loadAppsData();
  return [...new Set(apps.map(app => app.category))]
}

export function searchApps(query) {
  const apps = loadAppsData();
  const q = query.toLowerCase()
  return apps.filter(app =>
    app.name.toLowerCase().includes(q) ||
    app.category.toLowerCase().includes(q) ||
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