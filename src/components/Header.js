import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import 'wired-elements'

import groups from '../config/groups'

const HeaderContainer = styled.header`
  max-width: 20rem;
  height: 100%;

  wired-card {
    height: -webkit-fill-available;
  }
`

const LayerContainer = styled.div`
  padding: 1rem;
`

export default function Header({
  siteName,
  layerVisibility,
  setLayerVisibility,
}) {
  const toggleLayer = (subId) => {
    setLayerVisibility((layerVisibility) => {
      return { ...layerVisibility, [subId]: !layerVisibility[subId] }
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
          {groups.map((group) => (
            <div key={group.id}>
              <label>
                <b>{group.label}</b>
              </label>
              {Object.entries(group.sub).map(([subId, sub]) => (
                <label
                  key={subId}
                  htmlFor={subId}
                  style={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                  }}
                >
                  {sub.label}
                  <wired-toggle
                    id={subId}
                    onClick={() => toggleLayer(subId)}
                    {...(layerVisibility[subId] ? { checked: true } : null)}
                  ></wired-toggle>
                </label>
              ))}
            </div>
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
