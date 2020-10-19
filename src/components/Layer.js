import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Layer({ id, isVisible, spec, data, map }) {
  const [layer, setLayer] = useState(null)
  const visibility = isVisible ? 'visible' : 'none'

  useEffect(() => {
    const l = map.addLayer({ ...spec, layout: { ...spec.layout, visibility } })
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
