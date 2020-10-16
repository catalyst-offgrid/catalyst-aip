import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3-fetch'
import csv from '../../data/Energy/Census/KenyaLighting_Cooking.csv'

import theme from '../config/theme'

export default function CsvExperiment({ isVisible, map }) {
  const [layer, setLayer] = useState(null)
  const visibility = isVisible ? 'visible' : 'none'

  useEffect(() => {
    d3.csv(csv).then((data) => {
      map.addSource('csv-counties', {
        type: 'vector',
        url: 'mapbox://iandmuir.6e5zcwl0',
      })

      const l = map.addLayer({
        id: 'csv-layer',
        type: 'fill',
        source: 'csv-counties',
        'source-layer': 'Counties_47_-_Coded-1htj4o',
        paint: {
          'fill-color': [
            'case',
            ['!=', ['feature-state', 'Kerosene (Total)'], null],
            [
              'interpolate',
              ['linear'],
              ['to-number', ['feature-state', 'Kerosene (Total)']],
              0,
              theme.colors.white,
              50,
              theme.colors.blue,
            ],
            theme.colors.grey,
          ],
          'fill-opacity': [
            'case',
            ['!=', ['feature-state', 'Kerosene (Total)'], null],
            [
              'interpolate',
              ['linear'],
              ['to-number', ['feature-state', 'Kerosene (Total)']],
              0,
              0.2,
              50,
              1,
            ],
            0.5,
          ],
        },
      })
      setLayer(l)

      data.forEach((row) => {
        map.setFeatureState(
          {
            source: 'csv-counties',
            sourceLayer: 'Counties_47_-_Coded-1htj4o',
            id: row.Id,
          },
          {
            ['Kerosene (Total)']: row['Kerosene (Total)'],
          }
        )
      })
    })

    return () => {
      if (layer) map.removeLayer('csv-layer')
    }
  }, [])

  useEffect(() => {
    if (layer) {
      map.setLayoutProperty('csv-layer', 'visibility', visibility)
    }
  }, [isVisible])

  return null
}

CsvExperiment.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  map: PropTypes.object,
}
