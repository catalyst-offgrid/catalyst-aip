import React from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'
import numeral from 'numeral'

import Checkbox from './Checkbox'
import InfoButton from './InfoButton'

const ControlItemContainer = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[2]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.body};

  background-color: ${({ theme }) => theme.colors.muted};
  border-top: ${({ theme }) => `1px solid ${theme.colors.background}`};

  display: grid;
  grid-template-columns: auto 1fr auto 16px;
  align-items: center;
  gap: ${({ theme }) => `${theme.space[3]}px`};
  padding: ${({ theme }) => `${theme.space[3]}px`};
`

const SliderContainer = styled.div`
  padding: ${({ theme }) => `${theme.space[1] + theme.space[3]}px`};
  background-color: ${({ theme }) => theme.colors.muted};

  /* The following uses the class names of the react-input-range
   * components to overwrite their styles:
   */
  .input-range__track--background {
    background: ${({ theme }) => theme.colors.muted};
  }

  .input-range__slider {
    background: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 0;
    height: 12px;
    margin-left: -4px;
    margin-top: -12px;
    width: 8px;

    &::before {
      border-bottom: ${({ theme }) => `8px solid ${theme.colors.primary}`};
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
  background: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => `linear-gradient(
    90deg,
    ${theme.colors.background} 0%,
    ${theme.colors.primary} 100%
  )`};
  opacity: 0.5;
  margin-bottom: -6px;
`

const Dot = styled.div`
  background: ${({ color }) => color};
  border-radius: 50%;
  height: 15px;
  width: 15px;
`

const NoInputRange = ({ minValue, maxValue }) => (
  <div className='input-range__label' style={{ marginTop: `16px` }}>
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
  legend,
  controlState,
  toggleLayer,
  changeSlider,
}) {
  const isChecked = !!controlState.visibility

  const hasUnit = !!legend.unit
  const canBeFiltered = !!controlState.range

  return (
    <>
      <ControlItemContainer htmlFor={id}>
        <Checkbox
          id={id}
          onChange={() => toggleLayer(id)}
          checked={isChecked}
        />
        {label}

        {isChecked && legend.type === 'dot' && <Dot color={legend.color} />}
        <span className='input-range__label'>
          {isChecked && hasUnit && `in ${legend.unit}`}
        </span>

        {info && (
          <InfoButton info={info} aria-label={`info about ${label} layer`} />
        )}
      </ControlItemContainer>
      {isChecked && legend.type === 'gradient' && (
        <SliderContainer>
          <Gradient />
          {canBeFiltered ? (
            <InputRange
              minValue={legend.domain[0]}
              maxValue={legend.domain[1]}
              formatLabel={(number) => numeral(number).format('0a')}
              step={1}
              value={controlState.range}
              onChange={(value) =>
                changeSlider({ controlId: id, range: value })
              }
            />
          ) : (
            <NoInputRange
              minValue={legend.domain[0]}
              maxValue={legend.domain[1]}
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
  legend: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      color: PropTypes.string,
      unit: PropTypes.string,
      domain: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    PropTypes.oneOf(['none']).isRequired,
  ]).isRequired,
  controlState: PropTypes.object.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  changeSlider: PropTypes.func.isRequired,
}
