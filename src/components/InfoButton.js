import React from 'react'
import PropTypes from 'prop-types'
import { useTooltip, TooltipPopup as ReachTooltipPopup } from '@reach/tooltip'
import Portal from '@reach/portal'
import styled from 'styled-components'

import { InfoSmall } from '../icons'
import theme from '../config/theme'

const { space, colors } = theme

const TooltipPopup = styled(ReachTooltipPopup)`
  max-width: 200px;
  white-space: unset;
  background: ${colors.text};
  color: ${colors.background};
  border: none;
  border-radius: 4px;
  padding: ${space[2]}px ${space[3]}px;
  justify-self: center;

  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[0]}pt;
  font-weight: ${theme.fontWeights.body};
`

// Place the tooltip on the right, but collisions will win
const right = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.top + triggerRect.height / 2
  const tooltipCenter = tooltipRect.height / 2

  return {
    left: triggerRect.right + space[2],
    top: triggerCenter - tooltipCenter + window.scrollY,
  }
}

function Tooltip({ children, label, 'aria-label': ariaLabel }) {
  // get the props from useTooltip
  const [trigger, tooltip] = useTooltip()
  // destructure off what we need to position the triangle
  const { isVisible, triggerRect } = tooltip
  return (
    <React.Fragment>
      {React.cloneElement(children, trigger)}
      {isVisible && (
        // The Triangle. We position it relative to the trigger, not the popup
        // so that collisions don't have a triangle pointing off to nowhere.
        <Portal>
          <div
            style={{
              position: 'absolute',
              left: triggerRect && triggerRect.right + 6 / 2,
              top: triggerRect && triggerRect.top + window.scrollY,
              width: 0,
              height: 0,
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderRight: `6px solid ${colors.text}`,
              zIndex: 10,
            }}
          />
        </Portal>
      )}
      <TooltipPopup
        {...tooltip}
        label={label}
        aria-label={ariaLabel}
        position={right}
      />
    </React.Fragment>
  )
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  label: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
}

const IconButton = styled.button`
  cursor: help;
  appearance: none;
  background: 0;
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
`

export default function InfoButton({ info, as, 'aria-label': ariaLabel }) {
  return (
    <Tooltip label={info} aria-label={ariaLabel}>
      <IconButton as={as} aria-label={ariaLabel}>
        {/* as div: <button> cannot appear as a descendant of <button> */}
        <InfoSmall color={colors.accent} />
      </IconButton>
    </Tooltip>
  )
}

InfoButton.propTypes = {
  info: PropTypes.string.isRequired,
  as: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
}
