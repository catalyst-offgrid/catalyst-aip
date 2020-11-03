import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import Tick from '../icons/Tick'

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
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid
    ${({ checked, theme }) =>
      checked ? theme.colors.highlight : theme.colors.accent};
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.highlight}`};
  }

  ${IconContainer} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`

function Checkbox({ className, checked, theme, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <IconContainer>
          <Tick color={theme.colors.highlight} />
        </IconContainer>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default withTheme(Checkbox)

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
}
