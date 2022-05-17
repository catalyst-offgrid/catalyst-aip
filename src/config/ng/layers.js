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
  {
    id: 'nigeria-health-centers',
    source: 'nigeria-health-centers',
    'source-layer': 'nga_health_centers-8st5dw',
    type: 'circle',
    paint: {
      'circle-color': colors.accent1,
      'circle-radius': 2,
    },
  },
  {
    id: 'nigeria-compHC-cottage-hospitals',
    source: 'nigeria-compHC-cottage-hospitals',
    'source-layer': 'nga_comprehensiveHC_cottage_h-d0in6b',
    type: 'circle',
    paint: {
      'circle-color': colors.accent2,
    },
  },
  {
    id: 'nigeria-hospitals',
    source: 'nigeria-hospitals',
    'source-layer': 'nga_hospitals-749xam',
    type: 'circle',
    paint: {
      'circle-color': colors.accent3,
    },
  },
  {
    id: 'nigeria-dispensaries',
    source: 'nigeria-dispensaries',
    'source-layer': 'nga_dispensaries-6xknxo',
    type: 'circle',
    paint: {
      'circle-color': colors.accent4,
      'circle-radius': 2,
    },
  },
  {
    id: 'nigeria-fed-health-facilities',
    source: 'nigeria-fed-health-facilities',
    'source-layer': 'nga_federal_health_facilities-c93y4s',
    type: 'circle',
    paint: {
      'circle-color': colors.accent5,
    },
  },
  {
    id: 'nigeria-maternity-homes',
    source: 'nigeria-maternity-homes',
    'source-layer': 'nga_maternity_homes-cdte3r',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
      'circle-radius': 3,
    },
  },
  {
    id: 'nigeria-natural-gas-power-plants',
    source: 'nigeria-natural-gas-power-plants',
    'source-layer': 'nga_operating_gas_power_plant-9nr02j',
    type: 'circle',
    paint: {
      'circle-color': colors.accent6,
      'circle-radius': 5,
    },
  },
  {
    id: 'nga-proposed-natural-gas-power-plants',
    source: 'nga-proposed-natural-gas-power-plants',
    'source-layer': 'nga_proposed_gas_power_plants-a1tcep',
    type: 'circle',
    paint: {
      'circle-color': colors.accent7,
      'circle-radius': 5,
    },
  },

  {
    id: 'nga-coal-plants',
    source: 'nga-coal-plants',
    'source-layer': 'nga_coal_plants-78k8u5',
    type: 'circle',
    paint: {
      'circle-color': colors.accent9,
      'circle-radius': 5,
    },
  },
  {
    id: 'NG-Glo-Mobile-Globacom-2G',
    source: 'NG-Glo-Mobile-Globacom-2G',
    'source-layer': 'NG_Glo_Mobile_Globacom_2G-1z7jdb',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-Glo-Mobile-Globacom-3G',
    source: 'NG-Glo-Mobile-Globacom-3G',
    'source-layer': 'NG_Glo_Mobile_Globacom_3G-admtdj',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-Glo-Mobile-Globacom-4G',
    source: 'NG-Glo-Mobile-Globacom-4G',
    'source-layer': 'NG_Glo_Mobile_Globacom_4G-9wniv5',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-MTN-2G',
    source: 'NG-MTN-2G',
    'source-layer': 'NG_MTN_2G-1274x4',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-MTN-3G',
    source: 'NG-MTN-3G',
    'source-layer': 'NG_MTN_3G-6c1jpv',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-MTN-4G',
    source: 'NG-MTN-4G',
    'source-layer': 'NG_MTN_4G-4s32sy',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-Airtel-2G',
    source: 'NG-Airtel-2G',
    'source-layer': 'NG_Airtel_2G-0w43e4',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-Airtel-3G',
    source: 'NG-Airtel-3G',
    'source-layer': 'NG_Airtel_3G-a7i6in',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-Airtel-4G',
    source: 'NG-Airtel-4G',
    'source-layer': 'NG_Airtel_4G-4mydmd',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-9mobile-2G',
    source: 'NG-9mobile-2G',
    'source-layer': 'NG_9mobile_2G-bqg9yy',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-9mobile-3G',
    source: 'NG-9mobile-3G',
    'source-layer': 'NG_9mobile_3G-dtnaz9',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-9mobile-4G',
    source: 'NG-9mobile-4G',
    'source-layer': 'NG_9mobile_4G-4hlzpq',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-ntel-2G',
    source: 'NG-ntel-2G',
    'source-layer': 'NG_ntel_NatCom_2G-df7fdt',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-ntel-3G',
    source: 'NG-ntel-3G',
    'source-layer': 'NG_ntel_NatCom_3G-3hzxfi',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-ntel-4G',
    source: 'NG-ntel-4G',
    'source-layer': 'NG_ntel_NatCom_4G-12eb3o',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-all-2G',
    source: 'NG-all-2G',
    'source-layer': 'NG_All_Networks_2G-06tx02',
    type: 'fill',
    paint: {
      'fill-color': colors.accent1,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-all-3G',
    source: 'NG-all-3G',
    'source-layer': 'NG_All_Networks_3G-9pvmdn',
    type: 'fill',
    paint: {
      'fill-color': colors.accent4,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'NG-all-4G',
    source: 'NG-all-4G',
    'source-layer': 'NG_All_Networks_4G-af2tt4',
    type: 'fill',
    paint: {
      'fill-color': colors.accent3,
      'fill-opacity': mobileOpacity,
    },
  },
  {
    id: 'nga_rwi_-2_to_-1pt5',
    source: 'nga_rwi_-2_to_-1pt5',
    'source-layer': 'nga_rwi_-2_to_-1pt5-7e76sy',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent1,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_-1pt5_to_-1',
    source: 'nga_rwi_-1pt5_to_-1',
    'source-layer': 'nga_rwi_-1pt5_to_-1-71xfrr',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent2,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_-1_to_-0pt5',
    source: 'nga_rwi_-1_to_-0pt5',
    'source-layer': 'nga_rwi_-1_to_-0pt5-8ptq7j',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent3,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_-0pt5_to_0',
    source: 'nga_rwi_-0pt5_to_0',
    'source-layer': 'nga_rwi_-0pt5_to_0-74af6z',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent4,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_0_to_0pt5',
    source: 'nga_rwi_0_to_0pt5',
    'source-layer': 'nga_rwi_0_to_0pt5-6qcjzt',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent5,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_0pt5_to_1',
    source: 'nga_rwi_0pt5_to_1',
    'source-layer': 'nga_rwi_0pt5_to_1-8sq6hd',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent6,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_1_to_1pt5',
    source: 'nga_rwi_1_to_1pt5',
    'source-layer': 'nga_rwi_1_to_1pt5-6a37mg',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent7,
      'circle-radius': 2,
    },
  },
  {
    id: 'nga_rwi_1pt5_to_2',
    source: 'nga_rwi_1pt5_to_2',
    'source-layer': 'nga_rwi_1pt5_to_2-53re3l',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent8,
      'circle-radius': 2,
    },
  },

  // Nigeria Popup Fields
  {
    id: 'nga_synthetic_minigrids_1349-2a9ktv',
    source: 'nga_synthetic_minigrids_1349-2a9ktv',
    'source-layer': 'nga_synthetic_minigrids_1349-2a9ktv',
    type: 'circle',
    paint: {
      'circle-color': colors.rwi_accent8,
      'circle-radius': 5,
    },
  },
  {
    id: 'nga_mini_grids-7r061j',
    source: 'nga_mini_grids-7r061j',
    'source-layer': 'nga_mini_grids-7r061j',
    type: 'circle',
    paint: {
      'circle-color': colors.accent10,
      'circle-radius': 5,
    },
  },
]
