import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import 'wired-elements'

const HeaderContainer = styled.header`
  max-width: 20rem;
  height: 100%;

  wired-card {
    height: -webkit-fill-available;
  }
`

const LayerContainer = styled.ul`
  list-style: none;
  padding: 1rem;
`

export default function Header({
  siteName,
  layerVisibility,
  setLayerVisibility,
}) {
  const toggleLayer = (event) => {
    setLayerVisibility({
      ...layerVisibility,
      [event.currentTarget.id]: !layerVisibility[event.currentTarget.id],
    })
  }

  return (
    <HeaderContainer>
      <wired-card>
        <h1>🌱 {siteName}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <LayerContainer>
          {Object.keys(layerVisibility).map((layer) => (
            <li
              key={layer}
              value={layer}
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
              }}
            >
              {`${layer}`}
              <wired-toggle
                id={layer}
                onClick={toggleLayer}
                {...(layerVisibility[layer] ? { checked: true } : null)}
              ></wired-toggle>
            </li>
          ))}
        </LayerContainer>
      </wired-card>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
  layerVisibility: PropTypes.object,
  setLayerVisibility: PropTypes.func.isRequired,
}
