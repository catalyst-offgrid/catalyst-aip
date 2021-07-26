import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3-fetch'

import Source from './Source'
import Layer from './Layer'

export default function CsvLayers({ csv, uiState, theme, map, country }) {
  const [data, setData] = useState(null)
  const [layers, setLayer] = useState([])
  // Matt's attempted fix begins here:
  var country_base = ''
  var base_id = ''
  if (country == 'Kenya') {
    country_base = 'Counties_47_-_Coded-1htj4o'
    base_id = 'iandmuir.6e5zcwl0'
  }
  if (country == 'Uganda') {
    country_base = 'Uganda_Subregions_-_Custom_Cr-5iebq5'
    base_id = 'iandmuir.dryt4o5i'
  }
  if (country == 'Sierra Leone') {
    country_base = 'Sierra_Leone_Districts-c34k65'
    base_id = 'iandmuir.4f3biqz2'
  }

  useEffect(() => {
    d3.csv(csv).then((data) => {
      setData(data)
      console.log('CSV Data:', data)
      const l = []
      data.columns
        .filter((c) => Object.keys(uiState).includes(c))
        .forEach((column) => {
          l.push({
            id: `${column}`,
            source: 'census',
            'source-layer': country_base, //'Counties_47_-_Coded-1htj4o',
            type: 'fill',
            paint: {
              'fill-color': [
                'case',
                ['!=', ['feature-state', column], null],
                [
                  'interpolate',
                  ['linear'],
                  ['to-number', ['feature-state', column]],
                  uiState[column].domain[0],
                  theme.colors.background,
                  uiState[column].domain[1],
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
      console.log(layer)
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
      <Source id='census' type='vector' tilesetid={base_id} map={map}>
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
  //csv: PropTypes.string.isRequired,
  uiState: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  map: PropTypes.object,
  country: PropTypes.string.isRequired,
}
