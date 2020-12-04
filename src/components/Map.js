import React, { useLayoutEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import mapbox from 'mapbox-gl'
import styled from 'styled-components'

const MapContainer = styled.section`
  grid-column: 4 / span 9;
`

export default function Map({ center, zoom, children }) {
  const ref = useRef()
  const [map, setMap] = useState(null)

  useLayoutEffect(() => {
    const m = new mapbox.Map({
      container: ref.current,
      //style: 'mapbox://styles/iandmuir/ckhom8rti07cy19pclrmewimq', // use this for high contrast roads
      style: 'mapbox://styles/mapbox/light-v10',
      center,
      zoom,
    })

    m.addControl(new mapbox.NavigationControl({ visualizePitch: true }))

    m.on('load', () => {
      setMap(m)

      if (process.env.NODE_ENV === 'development') {
        // makes map accessible in console for debugging
        window.map = m
      }
    })

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  return (
    <MapContainer id='map' ref={ref}>
      {map &&
        children &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, {
            map,
          })
        )}
    </MapContainer>
  )
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  zoom: PropTypes.number.isRequired,
  children: PropTypes.node,
}
