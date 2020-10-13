import { useEffect } from 'react'
import PropTypes from 'prop-types'

import transportBasemapLayers from '../config/transport-basemap-layers'

export default function Basemap({ isVisible, map }) {
  useEffect(() => {
    const visibility = isVisible ? 'visible' : 'none'

    transportBasemapLayers.forEach((id) =>
      map.setLayoutProperty(id, 'visibility', visibility)
    )
  }, [isVisible])

  return null
}

Basemap.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  map: PropTypes.object,
}
