import React, { useLayoutEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import mapbox from 'mapbox-gl'
import styled from 'styled-components'

const MapContainer = styled.section`
  /* grid-column: 2 / span 9; */
  grid-area: content;
`

export default function Map({ center, zoom, children }) {
  const ref = useRef()
  const [map, setMap] = useState(null)

  useLayoutEffect(() => {
    const m = new mapbox.Map({
      container: ref.current,
      //style: 'mapbox://styles/iandmuir/ckhom8rti07cy19pclrmewimq', // try to use this map for skinnier roads
      style: 'mapbox://styles/mapbox/light-v10',
      center,
      zoom,
      customAttribution:
        'Mobile Coverage Data © Collins Bartholomew and GSMA 2020',
    })

    m.addControl(new mapbox.NavigationControl({ visualizePitch: true }))

    m.on('load', () => {
      setMap(m)

      if (process.env.NODE_ENV === 'development') {
        // makes map accessible in console for debugging
        window.map = m
      }

      // Handler for Synthetic Minigrid - todo: refactor for multiple layers
      m.on('click', 'nga_synthetic_minigrids_1349-2a9ktv', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice()

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }

        new mapbox.Popup()
          .setLngLat(coordinates)
          .setHTML(JSON.stringify(e.features[0].properties))
          .addTo(m)
      })

      // Change the cursor to a pointer when the mouse is over the places layer.
      m.on('mouseenter', 'nga_synthetic_minigrids_1349-2a9ktv', () => {
        m.getCanvas().style.cursor = 'pointer'
      })

      // Change it back to a pointer when it leaves.
      m.on('mouseleave', 'nga_synthetic_minigrids_1349-2a9ktv', () => {
        m.getCanvas().style.cursor = ''
      })
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
