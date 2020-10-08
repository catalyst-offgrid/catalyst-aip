import { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Layer({ id, spec, map }) {
  useEffect(() => {
    const layer = map.addLayer(spec)

    return () => {
      if (layer) map.removeLayer(id)
    }
  }, [])

  return null
}

Layer.propTypes = {
  id: PropTypes.string.isRequired,
  map: PropTypes.object,
}
