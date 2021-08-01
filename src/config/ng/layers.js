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
]
