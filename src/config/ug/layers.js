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
    id: 'uganda-borders',
    source: 'uganda-borders',
    'source-layer': 'Uganda_Borders-bcqe2h',
    type: 'vector',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-dasharray': [5, 3],
      'line-width': 1,
    },
  },
  {
    id: 'uganda-sub-regions',
    source: 'uganda-sub-regions',
    'source-layer': 'Uganda_Sub_Regions-9l2yfr',
    type: 'vector',
    paint: {
      'line-color': colors.text,
      'line-opacity': 0.3,
      'line-dasharray': [5, 3],
      'line-width': 1,
    },
  },
]
