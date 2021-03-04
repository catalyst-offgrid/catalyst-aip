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
     id: 'sierra-leone-borders',
     source: 'sierra-leone-borders',
     'source-layer': 'Sierra_Leone_Country_Border-cch16f',
     type: 'vector',
     paint: {
       'line-color': colors.text,
       'line-opacity': 0.3,
       'line-dasharray': [5, 3],
       'line-width': 1,
     },
   },
   {
     id: 'sierra-leone-districts',
     source: 'sierra-leone-districts',
     'source-layer': 'Sierra_Leone_Districts-c34k65',
     type: 'vector',
     paint: {
       'line-color': colors.text,
       'line-opacity': 0.3,
       'line-dasharray': [5, 3],
       'line-width': 1,
     },
   },
   {
     id: 'sierra-leone-transmission',
     source: 'sierra-leone-transmission',
     'source-layer': 'Sierra_Leone_Transmission_Lin-dyrefu',
     type: 'vector',
     paint: {
       'line-color': colors.text,
       'line-opacity': 0.3,
       'line-dasharray': [5, 3],
       'line-width': 1,
     },
   },
   {
     id: 'sierra-leone-pharmacy',
     source: 'sierra-leone-pharmacy',
     'source-layer': 'Sierra_Leone_Pharmacies-cz5yed',
     type: 'circle',
     paint: {
       'circle-color': colors.accent1,
     },
   },
   {
     id: 'sierra-leone-schools',
     source: 'sierra-leone-schools',
     'source-layer': 'Sierra_Leone_Schools-0nmwd3',
     type: 'circle',
     paint: {
       'circle-color': colors.accent1,
     },
   },
   {
     id: 'sierra-leone-banks',
     source: 'sierra-leone-banks',
     'source-layer': 'Sierra_Leone_Banks-0q3a0o',
     type: 'circle',
     paint: {
       'circle-color': colors.accent1,
     },
   },
]
