import apps from './apps.json'

export function getAllApps() {
  return apps
}

export function getAppBySlug(slug) {
  return apps.find(app => app.slug === slug) || null
}

export function getAppsByCategory(category) {
  return apps.filter(app => app.category === category)
}

export function getRelatedApps(currentSlug, category, limit = 4) {
  return apps
    .filter(app => app.slug !== currentSlug && app.category === category)
    .slice(0, limit)
}

export function getCategories() {
  return [...new Set(apps.map(app => app.category))]
}

export function searchApps(query) {
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
