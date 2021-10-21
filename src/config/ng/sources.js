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
      id: 'nigeria-comm-risk',
      layer: 'Nigeria_CommAccessRisk-05wkv7',
      tilesetid: 'iandmuir.7pk1xkh1',
    },
    {
      id: 'nigeria-pop-density',
      layer: 'Nigeria_Pop_Density-3pp5t1',
      tilesetid: 'iandmuir.bje8z43d',
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
    // boundaries
    {
      id: 'nigeria-lgas',
      layer: 'Nigeria_LGAs-3355t4',
      tilesetid: 'iandmuir.a9mpcwwe',
    },
    {
      id: 'nigeria-states',
      layer: 'Nigeria_States-50r7ib',
      tilesetid: 'iandmuir.3et11jhs',
    },
    {
      id: 'nigeria-wards',
      layer: 'Nigeria_Wards-am70it',
      tilesetid: 'iandmuir.cworqo3p',
    },
    {
      id: 'nigeria-built-extent',
      layer: 'Nigeria_BuiltAreaExtent-4m5kp8',
      tilesetid: 'iandmuir.4t5013mn',
    },
    // School Layers
    {
      id: 'nigeria-preprimary',
      layer: 'Nigeria_PrePrimary-a1kx4d',
      tilesetid: 'iandmuir.0m0y0gtk',
    },
    {
      id: 'nigeria-reg-primary',
      layer: 'Nigeria_RegularPrimary-1ju8lc',
      tilesetid: 'iandmuir.0anocm20',
    },
    {
      id: 'nigeria-standard-primary',
      layer: 'Nigeria_StandardPrimary-be3q5g',
      tilesetid: 'iandmuir.0dp8zg3h',
    },
    {
      id: 'nigeria-secondary',
      layer: 'Nigeria_RegularPrimary-1ju8lc',
      tilesetid: 'iandmuir.0anocm20',
    },
    {
      id: 'nigeria-tertiary',
      layer: 'Nigeria_TertiarySchools-464ggm',
      tilesetid: 'iandmuir.bh48osbo',
    },
    // Emergency services
    {
      id: 'nigeria-fire-stations',
      layer: 'Nigeria_FireStations-bkdw77',
      tilesetid: 'iandmuir.0jhk1qhn',
    },
    {
      id: 'nigeria-prisons',
      layer: 'Nigeria_Prisons-7iltxg',
      tilesetid: 'iandmuir.53vycy7t',
    },
    {
      id: 'nigeria-police-stations',
      layer: 'Nigeria_PoliceStations-badl23',
      tilesetid: 'iandmuir.ckfze7fz',
    },
    {
      id: 'nigeria-idp-sites',
      layer: 'Nigeria_IDPSites-3exis8',
      tilesetid: 'iandmuir.blffn6kr',
    },
    // Infrastructure layers
    {
      id: 'nigeria-farms',
      layer: 'Nigeria_Farms-5sf3zn',
      tilesetid: 'iandmuir.2eccbtem',
    },
    {
      id: 'nigeria-water-points',
      layer: 'Nigeria_WaterPoints-8y0kjp',
      tilesetid: 'iandmuir.0ov865xq',
    },
    {
      id: 'nigeria-gov-buildings',
      layer: 'NIgeria_GovBuildings-bd4p7e',
      tilesetid: 'iandmuir.6u5065ew',
    },
    {
      id: 'nigeria-post-office',
      layer: 'Nigeria_PostOffice-1o0q9r',
      tilesetid: 'iandmuir.2somn0i6',
    },
    {
      id: 'nigeria-markets',
      layer: 'Nigeria_Markets-88pp5k',
      tilesetid: 'iandmuir.4v42ad7d',
    },
    {
      id: 'nigeria-filling-stations',
      layer: 'Nigeria_FillingStations-d5e8dt',
      tilesetid: 'iandmuir.bo8mlgnd',
    },
    {
      id: 'nigeria-industrial-sites',
      layer: 'Nigeria_IndustrialSite-7w4lef',
      tilesetid: 'iandmuir.4vg0egnx',
    },
    // Power and Electricity
    {
      id: 'nigeria-substations',
      layer: 'Nigeria_Substations-4t41q1',
      tilesetid: 'iandmuir.9w22z0c4',
    },
    {
      id: 'nigeria-gridfinder',
      layer: 'Nigeria_Gridfinder-2t65vi',
      tilesetid: 'iandmuir.1rps7048',
    },
    // Institutions and Services
    {
      id: 'nigeria-health-centers',
      layer: 'nga_health_centers-8st5dw',
      tilesetid: 'iandmuir.d9bheraa',
    },
    {
      id: 'nigeria-compHC-cottage-hospitals',
      layer: 'nga_comprehensiveHC_cottage_h-d0in6b',
      tilesetid: 'iandmuir.abny0w7d',
    },
    {
      id: 'nigeria-hospitals',
      layer: 'nga_hospitals-749xam',
      tilesetid: 'iandmuir.024vc7rm',
    },
    {
      id: 'nigeria-dispensaries',
      layer: 'nga_dispensaries-6xknxo',
      tilesetid: 'iandmuir.3d6ubxnh',
    },
    {
      id: 'nigeria-fed-health-facilities',
      layer: 'nga_federal_health_facilities-c93y4s',
      tilesetid: 'iandmuir.6mtvdtpb',
    },
    {
      id: 'nigeria-maternity-homes',
      layer: 'nga_maternity_homes-cdte3r',
      tilesetid: 'iandmuir.brkd6bud',
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
