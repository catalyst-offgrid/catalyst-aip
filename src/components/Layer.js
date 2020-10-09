import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Layer({ id, isVisible, spec, map }) {
  const [layer, setLayer] = useState(null)

  useEffect(() => {
    const l = map.addLayer(spec)
    setLayer(l)

    return () => {
      if (layer) map.removeLayer(id)
    }
  }, [])

  useEffect(() => {
    if (layer) {
      const visibility = isVisible ? 'visible' : 'none'
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
