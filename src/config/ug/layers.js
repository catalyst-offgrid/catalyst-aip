import theme from '../theme'
const { colors } = theme
/**
 * A style's layers property lists all the layers available in that style.
 * The type of layer is specified by the "type" property, and must be one
 * of background, fill, line, symbol, raster, circle, fill-extrusion,
 * heatmap, hillshade.
 *
 * Except for layers of the background type, each layer needs to refer to
 * a source. Layers take the data that they get from a source, optionally
 * filter features, and then define how those features are styled.
 *
 * See: https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/
 */
var mobileOpacity = 0.35

export default [
  // Administrative Boundaries
   //{
    //id: 'uganda-borders',
    //source: 'uganda-borders',
    //'source-layer': 'Uganda_Borders-bcqe2h',
    //type: 'line',
    //paint: {
      //'line-color': colors.text,
      //'line-opacity': 0,
      //'line-width': 1,
    //},
  //},
  {
    id: 'counties',
    source: 'counties',
    'source-layer': 'Uganda_Sub_Regions-9l2yfr',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  {
    id: 'uganda-regions',
    source: 'uganda-regions',
    'source-layer': 'Uganda_Regions-91rxit',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  {
    id: 'uganda-districts',
    source: 'uganda-districts',
    'source-layer': 'Uganda_Districts-8v64lf',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  // Health Facilities
  {
    id: 'uganda-hospital',
    source: 'uganda-hospital',
    'source-layer': 'Uganda_Hospital-0bztlx',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'uganda-clinics',
    source: 'uganda-clinics',
    'source-layer': 'Uganda_Clinics-7mi6w3',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'uganda-dentist',
    source: 'uganda-dentist',
    'source-layer': 'Uganda_Dentist-349iyr',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'uganda-health-post',
    source: 'uganda-health-post',
    'source-layer': 'Uganda_Health_Post-7eftiz',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'uganda-pharmacy',
    source: 'uganda-pharmacy',
    'source-layer': 'Uganda_Pharmacy-0c23jm',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'uganda-doctors',
    source: 'uganda-doctors',
    'source-layer': 'Uganda_Doctors-87ldy5',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  // Education Facilities
  {
    id: 'uganda-schools',
    source: 'uganda-schools',
    'source-layer': 'Uganda_Schools-6ge035',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'uganda-colleges',
    source: 'uganda-colleges',
    'source-layer': 'Uganda_Colleges-599tfi',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'uganda-kindergarten',
    source: 'uganda-kindergarten',
    'source-layer': 'Uganda_Kindergartens-bkmnyx',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'uganda-university',
    source: 'uganda-university',
    'source-layer': 'Uganda_University-8g01jc',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  // Mobile Data
  {
    id: 'uganda-africell-2g',
    source: 'uganda-africell-2g',
    'source-layer': 'Uganda_Africell_2G-dt96o0',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-africell-3g',
    source: 'uganda-africell-3g',
    'source-layer': 'Uganda_Africell_3G-d5wnvw',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-africell-4g',
    source: 'uganda-africell-4g',
    'source-layer': 'Uganda_Africell_4G-c6kffc',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-airtel-2g',
    source: 'uganda-airtel-2g',
    'source-layer': 'Uganda_Airtel_2G-c4jpps',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-airtel-3g',
    source: 'uganda-airtel-3g',
    'source-layer': 'Uganda_Airtel_3G-d516xf',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-airtel-4g',
    source: 'uganda-airtel-4g',
    'source-layer': 'Uganda_AIrtel_4G-bm8p4w',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-mtn-2g',
    source: 'uganda-mtn-2g',
    'source-layer': 'Uganda_MTN_2G-72jl5d',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-mtn-3g',
    source: 'uganda-mtn-3g',
    'source-layer': 'Uganda_MTN_3G-4d9p6l',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-mtn-4g',
    source: 'uganda-mtn-4g',
    'source-layer': 'Uganda_MTN_4G-dfc43v',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-ut-mobile-2g',
    source: 'uganda-ut-mobile-2g',
    'source-layer': 'Uganda_UT_Mobile_2G-9g5t9y',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'uganda-ut-mobile-3g',
    source: 'uganda-ut-mobile-3g',
    'source-layer': 'Uganda_UT_Mobile_3G-bykqj2',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  // Financial Facilities
  {
    id: 'uganda-mobile-money',
    source: 'uganda-mobile-money',
    'source-layer': 'Uganda_Mobile_Money_Agent-578x2y',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'uganda-banks',
    source: 'uganda-banks',
    'source-layer': 'Uganda_Bank-co2cp0',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'uganda-sacco',
    source: 'uganda-sacco',
    'source-layer': 'Uganda_SACCO-5blhk6',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'uganda-atm',
    source: 'uganda-atm',
    'source-layer': 'Uganda_ATM-ahz99o',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'uganda-bureau-de-change',
    source: 'uganda-bureau-de-change',
    'source-layer': 'Uganda_Bureau_de_Change-3hqomh',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'uganda-microfinance',
    source: 'uganda-microfinance',
    'source-layer': 'Uganda_Microfinance-1fdcvh',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'uganda-money-transfer',
    source: 'uganda-money-transfer',
    'source-layer': 'Uganda_Money_Transfer-a598y9',
    type: 'circle',
    paint: {
      'circle-color': colors.accent8,
    },
  },
  {
    id: 'uganda-post-office',
    source: 'uganda-post-office',
    'source-layer': 'Uganda_Post_Office-64dicr',
    type: 'circle',
    paint: {
      'circle-color': colors.accent9,
    },
  },
  // Other
  {
    id: 'uganda-roads',
    source: 'uganda-roads',
    'source-layer': 'Uganda_Road_Network-782lk2',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-width': 1,
    },
  },
  {
    id: 'uganda-substations',
    source: 'uganda-substations',
    'source-layer': 'Uganda_Substations-bf4bp6',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'uganda-transmission',
    source: 'uganda-transmission',
    'source-layer': 'Uganda_Transmission_Lines-0qt0n8',
    type: 'line',
    paint: {
      'line-color': colors.accent9,
      'line-opacity': 0.3,
    },
  },
]
