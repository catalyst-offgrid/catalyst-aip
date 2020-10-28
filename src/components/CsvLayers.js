import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3-fetch'
import csv from '../../data/Energy/Census/KenyaLighting_Cooking.csv'

import theme from '../config/theme'
import Source from './Source'
import Layer from './Layer'

export default function CsvLayers({ uiState, map }) {
  const [data, setData] = useState(null)
  const [layers, setLayer] = useState([])

  useEffect(() => {
    d3.csv(csv).then((data) => {
      setData(data)
      const l = []
      data.columns
        .filter((c) => Object.keys(uiState).includes(c))
        .forEach((column) => {
          l.push({
            id: `${column}`,
            source: 'census',
            'source-layer': 'Counties_47_-_Coded-1htj4o',
            type: 'fill',
            paint: {
              'fill-color': [
                'case',
                ['!=', ['feature-state', column], null],
                [
                  'interpolate',
                  ['linear'],
                  ['to-number', ['feature-state', column]],
                  uiState[column].domain ? uiState[column].domain[0] : 0,
                  theme.colors.background,
                  uiState[column].domain ? uiState[column].domain[1] : 50,
                  theme.colors.primary,
                ],
                theme.colors.muted,
              ],
              'fill-opacity': 0.5,
            },
          })
        })

      setLayer(l)
    })
  }, [])

  useEffect(() => {
    layers.forEach((layer) => {
      const range = uiState[layer.id].range
      const domain = uiState[layer.id].domain
      if (range && domain) {
        // Note: we need to use opacity to visually filter, because
        // "feature-state" data expressions are not supported with filters.
        map.setPaintProperty(layer.id, 'fill-opacity', [
          'interpolate',
          ['linear'],
          ['to-number', ['feature-state', layer.id]],
          domain[0] - 2,
          0,
          Math.max(domain[0] - 1, range.min - 1),
          0,
          range.min,
          0.5,
          range.max,
          0.5,
          Math.min(domain[1] + 1, range.max + 1),
          0,
          domain[1] + 2,
          0,
        ])
      }
    })
  }, [uiState])

  return (
    data && (
      <Source id='census' type='vector' tilesetid='iandmuir.6e5zcwl0' map={map}>
        {data &&
          layers &&
          layers.map((layer) => (
            <Layer
              key={layer.id}
              id={layer.id}
              isVisible={uiState[layer.id].visibility}
              spec={layer}
              data={data}
              before='land-structure-line' // This is a layer id from the basemap. It might not exist in other basemaps styles!
            />
          ))}
      </Source>
    )
  )
}

CsvLayers.propTypes = {
  uiState: PropTypes.object.isRequired,
  map: PropTypes.object,
}
