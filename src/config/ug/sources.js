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
      //id: 'population',
      //layer: 'Kenya_Population_Density_ARC_-90y1wi',
      //tilesetid: 'iandmuir.5j2qnfbz',
    },
    {
      //id: 'fb-population',
      //layer: 'tif6-1z4g21',
      //tilesetid: 'iandmuir.5p43u8tc',
    },
  ],
  vector: [
    {
      id: 'uganda-borders',
      layer: 'Uganda_Borders-bcqe2h',
      tilesetid: 'iandmuir.72xmwm7z',
    },
    {
      id: 'uganda-sub-regions',
      layer: 'Uganda_Sub_Regions-9l2yfr',
      tilesetid: 'iandmuir.7r3eldtl',
    },
    {
      id: 'uganda-hospital',
      layer: 'Uganda_Hospital-0bztlx',
      tilesetid: 'iandmuir.apv3495r',
    },
    {
      id: 'uganda-mobile-money',
      layer: 'Uganda_Mobile_Money_Agent-578x2y',
      tilesetid: 'iandmuir.4dpl2mdy',
    },
    {
      id: 'uganda-schools',
      layer: 'Uganda_Schools-6ge035',
      tilesetid: 'iandmuir.5b4ns1de',
    },
    {
      id: 'uganda-roads',
      layer: 'Uganda_Road_Network-782lk2',
      tilesetid: 'iandmuir.d6ngd8fj',
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
