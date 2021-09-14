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
      id: 'sierra-population-density',
      layer: 'Sierra_Leone_Pop_Density-84xcxp',
      tilesetid: 'iandmuir.aqvcxa5d',
    },
  ],
  /**
   * Vector Tilesets
   *
   * Usage example:
   * map.addSource('source-id', {
   *  type: 'vector',
   *  url: 'mapbox://tilesetid'
   * });
   */
  vector: [
    // Administrative Boundaries
    {
      id: 'sierra-leone-provinces',
      layer: 'sierra-leone-admin-provinces-b0v3z3',
      tilesetid: 'iandmuir.84sf2gch',
    },
    {
      id: 'sierra-leone-districts',
      layer: 'Sierra_Leone_Districts-c34k65',
      tilesetid: 'iandmuir.4f3biqz2',
    },
    {
      id: 'counties',
      layer: 'Sierra_Leone_Counties-483pik',
      tilesetid: 'iandmuir.0yw0gux0',
    },
    // Health Facilities
   // {
    //  id: 'sierra-leone-pharmacy',
    // layer: 'Sierra_Leone_Pharmacies-cz5yed',
     // tilesetid: 'iandmuir.5me2tui9',
   // },
    //{
      // id: 'sierra-leone-clinics',
      // layer: 'Sierra_Leone_Clinics-c1m1du',
      // tilesetid: 'iandmuir.3lchkrw3',
   // },
   // {
    //  id: 'sierra-leone-dentists',
    //  layer: 'Sierra_Leone_Dentists-9md7qv',
    //  tilesetid: 'iandmuir.cwa6dkci',
   // },
    // {
    //  id: 'sierra-leone-doctors',
    //  layer: 'Sierra_Leone_Doctors-br6e0v',
    //  tilesetid: 'iandmuir.dcv47eyc',
   // },
    //{
    //  id: 'sierra-leone-hospital',
     // layer: 'Sierra_Leone_Hospitals-193kwh',
    //  tilesetid: 'iandmuir.7pdvami3',
   // },
    {
      id: 'sierra-leone-hospitals',
      layer: 'sierra_leone_hospitals-drxwsx',
      tilesetid: 'iandmuir.9uer4tc4',
    },
    {
      id: 'sierra-leone-health-centers',
      layer: 'sierra_leone_heath_centers-9vjwi1',
      tilesetid: 'iandmuir.57sh96fy',
    },
    {
      id: 'sierra-leone-health-clinics',
      layer: 'sierra_leone_health_clinics-a21n01',
      tilesetid: 'iandmuir.8owvyyjf',
    },
    {
      id: 'sierra-leone-health-posts',
      layer: 'sierra_leone_health_posts-0s3k2i',
      tilesetid: 'iandmuir.91ihgcvj',
    },
    // Financial Facilities
    {
      id: 'sierra-leone-banks',
      layer: 'Sierra_Leone_Banks-0q3a0o',
      tilesetid: 'iandmuir.26ukns6c',
    },
    {
      id: 'sierra-leone-atm',
      layer: 'Sierra_Leone_ATMs-85myoa',
      tilesetid: 'iandmuir.7w9k79gx',
    },
    {
      id: 'sierra-leone-post-office',
      layer: 'Sierra_Leone_Post_Office-5yeos2',
      tilesetid: 'iandmuir.7mr44sx1',
    },
    {
      id: 'sierra-leone-money-exchange',
      layer: 'Sierra_Leone_Money_Exchange-9zobe8',
      tilesetid: 'iandmuir.4c3oa234',
    },

    // Educational Facilities
    {
      id: 'sierra-leone-colleges',
      layer: 'sierra_leone_colleges-5o33n8',
      tilesetid: 'iandmuir.622d11xp',
    },
    {
      id: 'sierra-leone-secondary-schools',
      layer: 'sierra_leone_secondary_school-6kors2',
      tilesetid: 'iandmuir.2m19ncrf',
    },
    {
      id: 'sierra-leone-primary-schools',
      layer: 'sierra_leone_primary_schools-6nczpj',
      tilesetid: 'iandmuir.c8cq3q0t',
    },
    {
      id: 'sierra-leone-schools-other',
      layer: 'sierra_leone_schools_other-adt6yh',
      tilesetid: 'iandmuir.ddtj312x',
    },
    // Mobile Data
    {
      id: 'sierra-leone-orange-2g',
      layer: 'Sierra_Leone_Orange_2G-806a2g',
      tilesetid: 'iandmuir.409leor5',
    },
    {
      id: 'sierra-leone-orange-3g',
      layer: 'Sierra_Leone_Orange_3G-bqzs5y',
      tilesetid: 'iandmuir.durisnjm',
    },

    // Other
    {
      id: 'sierra-leone-roads',
      layer: 'Sierra_Leone_Road_Network-62c45g',
      tilesetid: 'iandmuir.dwpqwh2m',
    },
    {
      id: 'sierra-leone-highways',
      layer: 'sl_highways-69i9zs',
      tilesetid: 'iandmuir.2yp3ywqc',
    },
    {
      id: 'sierra-leone-transmission',
      layer: 'Sierra_Leone_Transmission_Lin-dyrefu',
      tilesetid: 'iandmuir.cv1a7jo6',
    },
    {
      id: 'sierra-leone-gridfinder',
      layer: 'Sierra_Leone_Gridfinder-3iwtif',
      tilesetid: 'iandmuir.a1cudc2c',
    },
    {
      id: 'sierra-built-areas',
      layer: 'Sierra_Leone_BuiltAreaExtent-7yo0na',
      tilesetid: 'iandmuir.accpcnpw',
    },
    {
      id: 'sierra-leone-minigrids',
      layer: 'Sierra_Leone_Minigrid-4mg3od',
      tilesetid: 'iandmuir.db2sk9ub',
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
  geojson: [],
}
