import React from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
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
  uiState,
  toggleLayer,
  changeSlider,
}) {
  const isChecked = uiState[id]
    ? uiState[id].visibility
    : new Error(`can not find ui state for id ${id}`)

  const hasRangeAndDomain =
    uiState[id] && uiState[id].range && uiState[id].domain

  return (
    <>
      <ControlItemContainer htmlFor={id}>
        <Checkbox
          id={id}
          onChange={() => toggleLayer(id)}
          checked={isChecked}
        />
        {label}
        {info && (
          <InfoButton info={info} aria-label={`info about ${label} layer`} />
        )}
      </ControlItemContainer>
      {isChecked && hasRangeAndDomain && (
        <div style={{ padding: 32, backgroundColor: colors.muted }}>
          <InputRange
            minValue={uiState[id].domain[0]}
            maxValue={uiState[id].domain[1]}
            step={10}
            value={uiState[id].range}
            onChange={(value) => changeSlider({ controlId: id, range: value })}
          />
        </div>
      )}
    </>
  )
}

ControlItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  uiState: PropTypes.object.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  changeSlider: PropTypes.func.isRequired,
}
