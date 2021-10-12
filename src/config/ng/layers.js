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
  {
    id: 'nigeria-comm-risk',
    source: 'nigeria-comm-risk',
    'source-layer': 'Nigeria_CommAccessRisk-05wkv7',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'nigeria-pop-density',
    source: 'nigeria-pop-density',
    'source-layer': 'Nigeria_Pop_Density-3pp5t1',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'nigeria-lgas',
    source: 'nigeria-lgas',
    'source-layer': 'Nigeria_LGAs-3355t4',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  {
    id: 'nigeria-states',
    source: 'nigeria-states',
    'source-layer': 'Nigeria_States-50r7ib',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  {
    id: 'nigeria-wards',
    source: 'nigeria-wards',
    'source-layer': 'Nigeria_Wards-am70it',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
  {
    id: 'nigeria-built-extent',
    source: 'nigeria-built-extent',
    'source-layer': 'Nigeria_BuiltAreaExtent-4m5kp8',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': 0.5,
    },
  },
  {
    id: 'nigeria-preprimary',
    source: 'nigeria-preprimary',
    'source-layer': 'Nigeria_PrePrimary-a1kx4d',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'nigeria-reg-primary',
    source: 'nigeria-reg-primary',
    'source-layer': 'Nigeria_RegularPrimary-1ju8lc',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'nigeria-standard-primary',
    source: 'nigeria-standard-primary',
    'source-layer': 'Nigeria_StandardPrimary-be3q5g',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'nigeria-secondary',
    source: 'nigeria-secondary',
    'source-layer': 'Nigeria_RegularPrimary-1ju8lc',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'nigeria-tertiary',
    source: 'nigeria-tertiary',
    'source-layer': 'Nigeria_TertiarySchools-464ggm',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
    },
  },
  {
    id: 'nigeria-fire-stations',
    source: 'nigeria-fire-stations',
    'source-layer': 'Nigeria_FireStations-bkdw77',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'nigeria-prisons',
    source: 'nigeria-prisons',
    'source-layer': 'Nigeria_Prisons-7iltxg',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'nigeria-police-stations',
    source: 'nigeria-police-stations',
    'source-layer': 'Nigeria_PoliceStations-badl23',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'nigeria-idp-sites',
    source: 'nigeria-idp-sites',
    'source-layer': 'Nigeria_IDPSites-3exis8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'nigeria-farms',
    source: 'nigeria-farms',
    'source-layer': 'Nigeria_Farms-5sf3zn',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'nigeria-water-points',
    source: 'nigeria-water-points',
    'source-layer': 'Nigeria_WaterPoints-8y0kjp',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'nigeria-gov-buildings',
    source: 'nigeria-gov-buildings',
    'source-layer': 'NIgeria_GovBuildings-bd4p7e',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
    },
  },
  {
    id: 'nigeria-post-office',
    source: 'nigeria-post-office',
    'source-layer': 'Nigeria_PostOffice-1o0q9r',
    type: 'circle',
    paint: {
      'circle-color': colors.accent8,
    },
  },
  {
    id: 'nigeria-healthsites',
    source: 'nigeria-healthsites',
    'source-layer': 'Nigeria_HealthSites-bd0fnq',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'nigeria-markets',
    source: 'nigeria-markets',
    'source-layer': 'Nigeria_Markets-88pp5k',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'nigeria-filling-stations',
    source: 'nigeria-filling-stations',
    'source-layer': 'Nigeria_FillingStations-d5e8dt',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'nigeria-industrial-sites',
    source: 'nigeria-industrial-sites',
    'source-layer': 'Nigeria_IndustrialSite-7w4lef',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'nigeria-substations',
    source: 'nigeria-substations',
    'source-layer': 'Nigeria_Substations-4t41q1',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'nigeria-gridfinder',
    source: 'nigeria-gridfinder',
    'source-layer': 'Nigeria_Gridfinder-2t65vi',
    type: 'line',
    paint: {
      'line-color': colors.accent9,
      'line-opacity': 0.5,
      'line-width': 1,
    },
  },
]
