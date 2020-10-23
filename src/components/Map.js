import React, { useLayoutEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import mapbox from 'mapbox-gl'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100%;
  flex-grow: 1;
`

export default function Map({ children }) {
  const ref = useRef()
  const [map, setMap] = useState(null)

  useLayoutEffect(() => {
    const m = new mapbox.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 7,
      center: [37.85335, 0.44014],
    })

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
  children: PropTypes.node,
}
