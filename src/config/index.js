if (!process.env.MAPBOX_ACCESS_TOKEN) {
  throw new Error('MAPBOX_ACCESS_TOKEN env var is required')
}

export default {
  mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  siteName: 'Access Insights Platform',
  siteAcronym: 'AIP',
  country: 'Kenya',
  countryCode: 'ke',
  imageUrl:
    'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3043&q=80',
}
