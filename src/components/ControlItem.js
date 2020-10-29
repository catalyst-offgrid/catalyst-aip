import React from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'
import numeral from 'numeral'

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
  border-top: 1px solid ${colors.background};

  display: grid;
  grid-template-columns: auto 1fr auto 16px;
  align-items: center;
  gap: ${space[3]}px;
  padding: ${space[3]}px;
`

const SliderContainer = styled.div`
  padding: ${space[1] + space[3]}px;
  background-color: ${colors.muted};

  /* The following uses the class names of the react-input-range
   * components to overwrite their styles:
   */
  .input-range__track--background {
    background: ${colors.muted};
  }

  .input-range__slider {
    background: ${colors.primary};
    border: 0;
    border-radius: 0;
    height: 12px;
    margin-left: -4px;
    margin-top: -12px;
    width: 8px;

    &::before {
      border-bottom: 8px solid ${colors.primary};
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: -8px;
    }
  }

  .input-range__label--value {
    top: -40px;
  }

  .input-range__label--min,
  .input-range__label--max {
    bottom: -16px;
  }
`
const Gradient = styled.div`
  height: 18px;
  width: 100%;
  background: ${colors.muted};
  background: ${`linear-gradient(
    90deg,
    ${colors.background} 0%,
    ${colors.primary} 100%
  )`};
  opacity: 0.5;
  margin-bottom: -6px;
`

const NoInputRange = ({ minValue, maxValue }) => (
  <div className='input-range__label' style={{ marginTop: `${space[3]}px` }}>
    <span className='input-range__label--min'>
      {numeral(minValue).format('0a')}
    </span>
    <span className='input-range__label--max'>
      {numeral(maxValue).format('0a')}
    </span>
  </div>
)

NoInputRange.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
}

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

  const hasUnit = uiState[id] && uiState[id].unit
  const hasDomain = uiState[id] && uiState[id].domain
  const hasRange = uiState[id] && uiState[id].range

  return (
    <>
      <ControlItemContainer htmlFor={id}>
        <Checkbox
          id={id}
          onChange={() => toggleLayer(id)}
          checked={isChecked}
        />
        {label}

        <span className='input-range__label'>
          {isChecked && hasUnit && `in ${uiState[id].unit}`}
        </span>

        {info && (
          <InfoButton info={info} aria-label={`info about ${label} layer`} />
        )}
      </ControlItemContainer>
      {isChecked && hasDomain && (
        <SliderContainer>
          <Gradient />
          {hasRange ? (
            <InputRange
              minValue={uiState[id].domain[0]}
              maxValue={uiState[id].domain[1]}
              formatLabel={(number) => numeral(number).format('0a')}
              step={1}
              value={uiState[id].range}
              onChange={(value) =>
                changeSlider({ controlId: id, range: value })
              }
            />
          ) : (
            <NoInputRange
              minValue={uiState[id].domain[0]}
              maxValue={uiState[id].domain[1]}
            />
          )}
        </SliderContainer>
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
