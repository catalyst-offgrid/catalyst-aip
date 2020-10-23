import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3-fetch'
import csv from '../../data/Energy/Census/KenyaLighting_Cooking.csv'

import theme from '../config/theme'
import Source from './Source'
import Layer from './Layer'

export default function CsvLayers({ layerVisibility, map }) {
  const [data, setData] = useState(null)
  const [layers, setLayer] = useState([])

  useEffect(() => {
    d3.csv(csv).then((data) => {
      setData(data)
      const l = []
      data.columns
        .filter((c) => Object.keys(layerVisibility).includes(c))
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
                  0,
                  theme.colors.background,
                  50,
                  theme.colors.primary,
                ],
                theme.colors.muted,
              ],
              'fill-opacity': [
                'case',
                ['!=', ['feature-state', column], null],
                [
                  'interpolate',
                  ['linear'],
                  ['to-number', ['feature-state', column]],
                  0,
                  0.2,
                  50,
                  1,
                ],
                0.5,
              ],
            },
          })
        })

      setLayer(l)
    })
  }, [])

  return (
    data && (
      <Source id='census' type='vector' tilesetid='iandmuir.6e5zcwl0' map={map}>
        {data &&
          layers &&
          layers.map((layer) => (
            <Layer
              key={layer.id}
              id={layer.id}
              isVisible={layerVisibility[layer.id]}
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
  layerVisibility: PropTypes.object.isRequired,
  map: PropTypes.object,
}
