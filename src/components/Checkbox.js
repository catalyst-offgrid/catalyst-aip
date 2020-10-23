import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../config/theme'
import Tick from '../icons/Tick'

const { colors } = theme

const IconContainer = styled.div`
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  clip-path: inset(50%);
`

const StyledCheckbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${colors.background};
  border: 1px solid
    ${(props) => (props.checked ? colors.highlight : colors.accent)};
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${colors.highlight};
  }

  ${IconContainer} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export default function Checkbox({ className, checked, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <IconContainer>
          <Tick color={colors.highlight} />
        </IconContainer>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
}
