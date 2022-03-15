/**
 * Sources state which data the map should display. Specify the type of source
 * with the "type" property, which must be one of vector, raster, raster-dem,
 * geojson, image, video. Adding a source isn't enough to make data appear on
 * the map because sources don't contain styling details like color or width.
 * Layers refer to a source and give it a visual representation. This makes it
 * possible to style the same source in different ways, like differentiating
 * between types of roads in a highways layer.
 *
 * Tiled sources (vector and raster) must specify their details according to
 * the TileJSON specification. There are several ways to do so:
 *
 * - By supplying TileJSON properties such as "tiles", "minzoom", and "maxzoom"
 *   directly in the source
 * - By providing a "url" to a TileJSON resource
 * - By providing a URL to a WMS server that supports EPSG:3857 (or
 *   EPSG:900913) as a source of tiled data. The server URL should contain a
 *   "{bbox-epsg-3857}" replacement token to supply the bbox parameter.
 *
 * See: https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
 */

export default {
  /**
   * Raster Tilesets
   *
   * Usage example:
   * map.addSource('source-id', {
   *   type: 'raster',
   *   url: 'mapbox://tilesetid',
   *   tileSize: 256,
   * })
   */
  raster: [
    {
      id: 'uganda-density',
      layer: 'Uganda_Population_Density-7ec47s',
      tilesetid: 'iandmuir.8xf9gnn2',
    },
  ],
  vector: [
    // Administrative Boundaries
    //{
      //id: 'uganda-borders',
      //layer: 'Uganda_Borders-bcqe2h',
      //tilesetid: 'iandmuir.72xmwm7z',
    //},
    {
      id: 'uganda-regions',
      layer: 'Uganda_Regions-91rxit',
      tilesetid: 'iandmuir.3ps72e0a',
    },
    {
      id: 'counties',
      layer: 'Uganda_Subregions_-_Custom_Cr-5iebq5',
      tilesetid: 'iandmuir.dryt4o5i',
    },
    {
      id: 'uganda-districts',
      layer: 'Uganda_Districts-8v64lf',
      tilesetid: 'iandmuir.bczdp5q2',
    },
    {
      id: 'uganda-towns',
      layer: 'Uganda_Towns-d10dpi',
      tilesetid: 'iandmuir.3iq0au53',
    },
    // Educational Faciltiies
    {
      id: 'uganda-colleges',
      layer: 'Uganda_Colleges-599tfi',
      tilesetid: 'iandmuir.ay43oo8s',
    },
    {
      id: 'uganda-kindergarten',
      layer: 'Uganda_Kindergartens-bkmnyx',
      tilesetid: 'iandmuir.3plijllp',
    },
    {
      id: 'uganda-university',
      layer: 'Uganda_University-8g01jc',
      tilesetid: 'iandmuir.aj1h97wo',
    },
    {
      id: 'uganda-schools',
      layer: 'Uganda_Schools-6ge035',
      tilesetid: 'iandmuir.5b4ns1de',
    },
    // Mobile Layers
    {
      id: 'uganda-africell-2g',
      layer: 'Uganda_Africell_2G-dt96o0',
      tilesetid: 'iandmuir.67he4vz2',
    },
    {
      id: 'uganda-africell-3g',
      layer: 'Uganda_Africell_3G-d5wnvw',
      tilesetid: 'iandmuir.8pl0hn1m',
    },
    {
      id: 'uganda-africell-4g',
      layer: 'Uganda_Africell_4G-c6kffc',
      tilesetid: 'iandmuir.5k6ocgnv',
    },
    {
      id: 'uganda-airtel-2g',
      layer: 'Uganda_Airtel_2G-c4jpps',
      tilesetid: 'iandmuir.15oayqk5',
    },
    {
      id: 'uganda-airtel-3g',
      layer: 'Uganda_Airtel_3G-d516xf',
      tilesetid: 'iandmuir.65rnir4t',
    },
    {
      id: 'uganda-airtel-4g',
      layer: 'Uganda_AIrtel_4G-bm8p4w',
      tilesetid: 'iandmuir.73krfrsj',
    },
    {
      id: 'uganda-mtn-2g',
      layer: 'Uganda_MTN_2G-72jl5d',
      tilesetid: 'iandmuir.69bc12c7',
    },
    {
      id: 'uganda-mtn-3g',
      layer: 'Uganda_MTN_3G-4d9p6l',
      tilesetid: 'iandmuir.abnqrlli',
    },
    {
      id: 'uganda-mtn-4g',
      layer: 'Uganda_MTN_4G-dfc43v',
      tilesetid: 'iandmuir.0p4a6h10',
    },
    {
      id: 'uganda-ut-mobile-2g',
      layer: 'Uganda_UT_Mobile_2G-9g5t9y',
      tilesetid: 'iandmuir.ak7kephz',
    },
    {
      id: 'uganda-ut-mobile-3g',
      layer: 'Uganda_UT_Mobile_3G-bykqj2',
      tilesetid: 'iandmuir.7rk0564x',
    },
    // Health Facilities
    // {
    //   id: 'uganda-hospital',
    //   layer: 'Uganda_Hospital-0bztlx',
    //   tilesetid: 'iandmuir.apv3495r',
    // },
    // {
    //   id: 'uganda-clinics',
    //   layer: 'Uganda_Clinics-7mi6w3',
    //   tilesetid: 'iandmuir.0ggfqd0s',
    // },
    // {
    //   id: 'uganda-health-post',
    //   layer: 'Uganda_Health_Post-7eftiz',
    //   tilesetid: 'iandmuir.8txb5wyk',
    // },
    // {
    //   id: 'uganda-pharmacy',
    //   layer: 'Uganda_Pharmacy-0c23jm',
    //   tilesetid: 'iandmuir.810ntp00',
    // },
    {
      id: 'uganda-healthsites',
      layer: 'Uganda_Healthsites-54ktyh',
      tilesetid: 'iandmuir.ccgwvn9i'
    },
    // Financial Facilities
    {
      id: 'uganda-banks',
      layer: 'Uganda_Bank-co2cp0',
      tilesetid: 'iandmuir.ac3g8e59',
    },
    {
      id: 'uganda-mobile-money',
      layer: 'Uganda_Mobile_Money_Agent-578x2y',
      tilesetid: 'iandmuir.4dpl2mdy',
    },
    {
      id: 'uganda-sacco',
      layer: 'Uganda_SACCO-5blhk6',
      tilesetid: 'iandmuir.byypady5',
    },
    {
      id: 'uganda-bureau-de-change',
      layer: 'Uganda_Bureau_de_Change-3hqomh',
      tilesetid: 'iandmuir.276d9uuo',
    },
    {
      id: 'uganda-microfinance',
      layer: 'Uganda_Microfinance-1fdcvh',
      tilesetid: 'iandmuir.2t8jfesu',
    },
    {
      id: 'uganda-post-office',
      layer: 'Uganda_Post_Office-64dicr',
      tilesetid: 'iandmuir.02zk7mqu',
    },
    // Electricity
    {
      id: 'uganda-substations',
      layer: 'Uganda_Substations-bf4bp6',
      tilesetid: 'iandmuir.cl879q0g',
    },
    {
      id: 'uganda-data-for-good',
      layer: 'Uganda_Data_for_Good_Transmis-0cbk8p',
      tilesetid: 'iandmuir.6oyn35yp',
    },
    {
      id: 'uganda-electrical',
      layer: 'Uganda_Electrical_Network-bjpgmv',
      tilesetid: 'iandmuir.7km81bbp',
    },
    {
      id: 'uganda-planned-transmission',
      layer: 'Uganda_Planned_Transmission-5gqds1',
      tilesetid: 'iandmuir.7ho8emtu',
    },
    {
      id: 'uganda-construct-transmission',
      layer: 'Uganda_Transmission_Construct-6skv0n',
      tilesetid: 'iandmuir.7xu57wv4',
    },
    {
      id: 'uganda-minigrids',
      layer: 'Uganda_MiniGrids_Final-1me9bl',
      tilesetid: 'iandmuir.dvrbbsqj',
    },
    // Other
    {
      id: 'uganda-roads',
      layer: 'Uganda_Road_Network-782lk2',
      tilesetid: 'iandmuir.d6ngd8fj',
    },
    {
      id: 'uganda-grid',
      layer: 'Uganda_Grid_Final-1jbbnz',
      tilesetid: 'iandmuir.90wqwo6o',
    },
    {
      id: 'uganda-built-areas',
      layer: 'Uganda_BuiltAreaExtent-bqh9nl',
      tilesetid: 'iandmuir.ateg8f5q',
    },
    {
      id: 'uga_rwi_-1pt5_to_-1',
      layer: 'uga_rwi_-1pt5_to_-1-7g5wnt',
      tilesetid: 'iandmuir.3iojnqvj',
    },
    {
      id: 'uga_rwi_-1_to_-0pt5',
      layer: 'uga_rwi_-1_to_-0pt5-dimaog',
      tilesetid: 'iandmuir.1qr3w6cv',
    },
    {
      id: 'uga_rwi_-0pt5_to_0',
      layer: 'uga_rwi_-0pt5_to_0-du16a3',
      tilesetid: 'iandmuir.bokwy91b',
    },
    {
      id: 'uga_rwi_0_to_0pt5',
      layer: 'uga_rwi_0_to_0pt5-ccxfh2',
      tilesetid: 'iandmuir.4o4psheq',
    },
    {
      id: 'uga_rwi_0pt5_to_1',
      layer: 'uga_rwi_0pt5_to_1-4pfpaa',
      tilesetid: 'iandmuir.6z12s2ax',
    },
    {
      id: 'uga_rwi_1_to_1pt5',
      layer: 'uga_rwi_1_to_1pt5-8cvfb6',
      tilesetid: 'iandmuir.bijaidtx',
    },
    {
      id: 'uga_rwi_1pt_to_2',
      layer: 'uga_rwi_1pt5_to_2-29robb',
      tilesetid: 'iandmuir.71i6ehgs',
    },
  ],
  /**
   * GeoJSON Datasets
   *
   * Usage example:
   * map.addSource('source-id', {
   *  type: 'geojson',
   *  data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
   * });
   */
  geojson: [
  ],
}
