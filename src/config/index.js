if (!process.env.MAPBOX_ACCESS_TOKEN) {
  throw new Error('MAPBOX_ACCESS_TOKEN env var is required')
}

export default {
  mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  siteName: process.env.SITE_NAME,
  siteAcronym: process.env.SITE_ACRONYM,
  country: 'Kenya',
  'country-code': 'ke',
}
