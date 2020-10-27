import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Layer({
  id,
  isVisible,
  spec,
  data,
  before,
  sliderValue,
  map,
}) {
  const [layer, setLayer] = useState(null)
  const visibility = isVisible ? 'visible' : 'none'

  useEffect(() => {
    const l = map.addLayer(
      { ...spec, layout: { ...spec.layout, visibility } },
      before
    )
    setLayer(l)

    if (data) {
      data.forEach((row) => {
        map.setFeatureState(
          {
            source: spec['source'],
            sourceLayer: spec['source-layer'],
            id: row['Id'],
          },
          {
            ...row,
          }
        )
      })
    }

    return () => {
      if (layer) map.removeLayer(id)
    }
  }, [])

  useEffect(() => {
    if (layer) {
      map.setLayoutProperty(id, 'visibility', visibility)
    }
  }, [isVisible])

  useEffect(() => {
    if (layer && id === 'population-mask') {
      map.setPaintProperty(id, 'fill-opacity', [
        'interpolate',
        ['linear'],
        ['get', 'pop'],
        -2,
        1,
        Math.max(-1, sliderValue.min - 1),
        1,
        sliderValue.min,
        0,
        sliderValue.max,
        0,
        Math.min(301, sliderValue.max + 1),
        1,
        302,
        1,
      ])
    }
    if (layer && id === 'Kerosene (Total)') {
      map.setPaintProperty(id, 'fill-opacity', [
        'interpolate',
        ['linear'],
        ['to-number', ['feature-state', 'Kerosene (Total)']],
        -2,
        0,
        Math.max(-1, sliderValue.min - 1),
        0,
        sliderValue.min,
        1,
        sliderValue.max,
        1,
        Math.min(51, sliderValue.max + 1),
        0,
        52,
        0,
      ])
    }
  }, [sliderValue])

  return null
}

Layer.propTypes = {
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  spec: PropTypes.shape({
    id: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    'source-layer': PropTypes.string,
    type: PropTypes.string.isRequired,
  }),
  map: PropTypes.object,
}
