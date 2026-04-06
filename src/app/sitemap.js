export default function sitemap() {
  const base = 'https://studiodimartino.eu'
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/implantologia', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/ortodonzia', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/estetica-dentale', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/igiene-prevenzione', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/odontoiatria-generale', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/il-team', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contatti', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/info-pazienti', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/istruzioni-ortodontiche', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-04-06'),
    changeFrequency,
    priority,
  }))
}
