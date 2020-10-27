import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import InfoButton from './InfoButton'
import theme from '../config/theme'

const { space, colors } = theme

const ControlItemContainer = styled.label`
  color: ${colors.primary};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[2]}pt;
  font-weight: ${theme.fontWeights.body};

  background-color: ${colors.muted};
  border-bottom: 1px solid ${colors.background};

  display: grid;
  grid-template-columns: auto 1fr 16px;
  gap: ${space[3]}px;
  padding: ${space[3]}px;
  align-items: center;
`

export default function ControlItem({
  id,
  label,
  info,
  toggleLayer,
  layerVisibility,
}) {
  return (
    <ControlItemContainer htmlFor={id}>
      <Checkbox
        id={id}
        onChange={() => toggleLayer(id)}
        checked={layerVisibility[id]}
      />
      {label}
      {info && (
        <InfoButton info={info} aria-label={`info about ${label} layer`} />
      )}
    </ControlItemContainer>
  )
}

ControlItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  toggleLayer: PropTypes.func.isRequired,
  layerVisibility: PropTypes.object.isRequired,
}
