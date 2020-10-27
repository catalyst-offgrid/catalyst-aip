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
      id: 'population',
      layer: 'Kenya_Population_Density_ARC_-90y1wi',
      tilesetid: 'iandmuir.5j2qnfbz',
    },
    {
      id: 'nightlights',
      layer: 'tif6-1z4g21',
      tilesetid: 'iandmuir.5p43u8tc',
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
    {
      id: 'education',
      layer: 'Education_Facilities-6v7pmw',
      tilesetid: 'iandmuir.922ukwf8',
    },
    {
      id: 'health',
      layer: 'Health_Facilities-2yj576',
      tilesetid: 'iandmuir.d2qqlxhc',
    },
    {
      id: 'sacco',
      layer: 'SACCOs-btv3i8',
      tilesetid: 'iandmuir.6lsmr0eg',
    },
    {
      id: 'mfi',
      layer: 'MFIs-00ivvm',
      tilesetid: 'iandmuir.9b21txff',
    },
    {
      id: 'banks',
      layer: 'Banks_OSM-dn9mc8',
      tilesetid: 'iandmuir.9d154qzm',
    },
    {
      id: 'sub-counties',
      layer: 'Sub-Counties_290-0f84my',
      tilesetid: 'iandmuir.00ymxzq4',
    },
    {
      id: 'wards',
      layer: 'Wards_1450-60annj',
      tilesetid: 'iandmuir.4n7gjv1t',
    },
    {
      id: 'gridfinder',
      layer: 'gridfinder_kenya_sample-avd4fk',
      tilesetid: 'iandmuir.900iiva8',
    },
    {
      id: 'counties',
      layer: 'Counties_47_-_Coded-1htj4o',
      tilesetid: 'iandmuir.6e5zcwl0',
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
