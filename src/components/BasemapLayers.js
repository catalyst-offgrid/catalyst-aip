import { useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Basemap layers come with the selected basemap style.
 * They don't require adding source nor layer styles,
 * but we can access them nevertheless for interaction
 * (here: toggle visibility).
 */
export default function BasemapLayers({ isVisible, layerIds, map }) {
  useEffect(() => {
    const visibility = isVisible ? 'visible' : 'none'

    layerIds.forEach((id) => {
      if (map.getLayer(id)) {
        map.setLayoutProperty(id, 'visibility', visibility)
      }
    })
  }, [isVisible])

  return null
}

BasemapLayers.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  map: PropTypes.object,
}
