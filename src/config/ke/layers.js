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
    id: 'arc-population-density',
    source: 'population',
    'source-layer': 'Kenya_Population_Density_ARC_-90y1wi',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },
  {
    id: 'fb-population-density',
    source: 'fb-population',
    'source-layer': 'tif6-1z4g21',
    type: 'raster',
    paint: {
      'raster-opacity': 0.5,
    },
  },

  // {
  // id: 'compress',
  // source: 'compress',
  // 'source-layer': 'compress-7pv3v4',
  // type: 'raster',
  // paint: {
  // 'raster-opacity': 0.5,
  // },
  // },
  {
    id: 'all_education',
    source: 'all_education',
    'source-layer': 'Education_Facilities-6v7pmw',
    type: 'circle',
    paint: {
      'circle-color': colors.charmpink,
    },
  },
  {
    id: 'ke_kindergarten',
    source: 'ke_kindergarten',
    'source-layer': 'Kenya_Education_Kindergarten-5ky2rp',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'ke_schools',
    source: 'ke_schools',
    'source-layer': 'Kenya_Education_School-8odt1x',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'ke_colleges',
    source: 'ke_colleges',
    'source-layer': 'Kenya_Education_College-34ukfd',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'ke_universities',
    source: 'ke_universities',
    'source-layer': 'Kenya_Education_University-79bh8a',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'health_type4',
    source: 'health_type4',
    'source-layer': 'Kenya_Health_Type4-3fxfr8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'health_type3',
    source: 'health_type3',
    'source-layer': 'Kenya_Health_Type3-0api8i',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'health_type2',
    source: 'health_type2',
    'source-layer': 'Kenya_Health_Type2-2bis9f',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
    },
  },
  {
    id: 'health_type1',
    source: 'health_type1',
    'source-layer': 'Kenya_Health_Type1-81jhng',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'sacco',
    source: 'sacco',
    'source-layer': 'SACCOs-btv3i8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'mfi',
    source: 'mfi',
    'source-layer': 'MFIs-00ivvm',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
    },
  },
  {
    id: 'banks',
    source: 'banks',
    'source-layer': 'Banks_OSM-dn9mc8',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
    },
  },
  {
    id: 'sub-counties',
    source: 'sub-counties',
    'source-layer': 'Sub-Counties_290-0f84my',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-dasharray': [5, 3],
      'line-width': 1,
    },
  },
  {
    id: 'wards',
    source: 'wards',
    'source-layer': 'Wards_1450-60annj',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-dasharray': [5, 3],
      'line-width': 1,
    },
  },
  {
    id: 'gridfinder',
    source: 'gridfinder',
    'source-layer': 'gridfinder_kenya_sample-avd4fk',
    type: 'line',
    paint: {
      'line-color': colors.highlight,
    },
  },
  {
    id: 'ke_all_transmission',
    source: 'ke_all_transmission',
    'source-layer': 'Kenya_Final_Transmission-451cm2',
    type: 'line',
    paint: {
      'line-color': colors.accent3,
    },
  },
  {
    id: 'transmission_lines_11kv',
    source: 'transmission_lines_11kv',
    'source-layer': 'Transmission_Lines_11KV_RePro-br4ylm',
    type: 'line',
    paint: {
      'line-color': colors.accent9,
    },
  },
  {
    id: 'transmission_lines_33kv',
    source: 'transmission_lines_33kv',
    'source-layer': 'Transmission_Lines_33KV_Repro-3bqaf1',
    type: 'line',
    paint: {
      'line-color': colors.accent8,
    },
  },
  {
    id: 'transmission_lines_66kv',
    source: 'transmission_lines_66kv',
    'source-layer': 'Transmission_Lines_66KV_Repro-6e0r2m',
    type: 'line',
    paint: {
      'line-color': colors.accent10,
    },
  },
  {
    id: 'transmission_lines_132kv',
    source: 'transmission_lines_132kv',
    'source-layer': 'Transmission_Lines_132KV_Repr-cw6ysy',
    type: 'line',
    paint: {
      'line-color': colors.accent7,
    },
  },
  {
    id: 'transmission_lines_220kv',
    source: 'transmission_lines_220kv',
    'source-layer': 'Transmission_Lines_220KV_Repr-4sai37',
    type: 'line',
    paint: {
      'line-color': colors.accent11,
    },
  },
  {
    id: 'unidentified_grid',
    source: 'unidentified_grid',
    'source-layer': 'Unidentified_Grid_Network_Rep-cr21jl',
    type: 'line',
    paint: {
      'line-color': colors.accent1,
    },
  },
  {
    id: 'mini-grids_under_development',
    source: 'mini-grids_under_development',
    'source-layer': 'Mini-Grids_Under_Development_-7tdfio',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
    },
  },
  {
    id: 'existing_mini-grids',
    source: 'existing_mini-grids',
    'source-layer': 'Existing_Mini-Grids_Reproject-7inrxo',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'proposed_kosap_mini-grids',
    source: 'proposed_kosap_mini-grids',
    'source-layer': 'Proposed_KOSAP_Mini-Grids_Rep-74ct1d',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'counties',
    source: 'counties',
    'source-layer': 'Counties_47_-_Coded-1htj4o',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-width': 2,
    },
  },
  {
    id: 'mobile_data_airtel_2g',
    source: 'mobile_data_airtel_2g',
    'source-layer': 'Kenya_AirTel_2G-5cn53k',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_airtel_3g',
    source: 'mobile_data_airtel_3g',
    'source-layer': 'Kenya_AirTel_3G-2rbgg2',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_airtel_4g',
    source: 'mobile_data_airtel_4g',
    'source-layer': 'Kenya_AirTel_4G-0djjn4',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_orange_2g',
    source: 'mobile_data_orange_2g',
    'source-layer': 'Kenya_Orange_Telkom_Kenya_2G-d9i7a5',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_orange_3g',
    source: 'mobile_data_orange_3g',
    'source-layer': 'Kenya_Orange_Telkom_Kenya_3G-5jhw51',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_orange_4g',
    source: 'mobile_data_orange_4g',
    'source-layer': 'Kenya_Orange_Telkom_Kenya_4G-agrv99',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_safaricom_2g',
    source: 'mobile_data_safaricom_2g',
    'source-layer': 'Kenya_Safaricom_2G-65qxmz',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_safaricom_3g',
    source: 'mobile_data_safaricom_3g',
    'source-layer': 'Kenya_Safaricom_3G-cncrjf',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_safaricom_4g',
    source: 'mobile_data_safaricom_4g',
    'source-layer': 'Kenya_Safaricom_4G-3cmbys',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_yu_2g',
    source: 'mobile_data_yu_2g',
    'source-layer': 'Kenya_yuMobile_2G-414jt7',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'mobile_data_yu_3g',
    source: 'mobile_data_yu_3g',
    'source-layer': 'Kenya_yuMobile_3G-346xcb',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'ke_mobile_2g',
    source: 'ke_mobile_2g',
    'source-layer': 'MCE_KE2G_2020-2bfoj1',
    type: 'raster',
    paint: {
      'raster-opacity': mobileOpacity,
    },
  },
  {
    id: 'ke_mobile_3g',
    source: 'ke_mobile_3g',
    'source-layer': 'MCE_KE3G_2020-4yzo7v',
    type: 'raster',
    paint: {
      'raster-opacity': mobileOpacity,
    },
  },
  {
    id: 'ke_roads',
    source: 'ke_roads',
    'source-layer': 'Kenya_Roads-4sztzy',
    type: 'line',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-width': 1,
    },
  },
]
