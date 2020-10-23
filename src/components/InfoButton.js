import React from 'react'
import PropTypes from 'prop-types'
import ReachTooltip from '@reach/tooltip'
import styled from 'styled-components'

import { InfoSmall } from '../icons'
import theme from '../config/theme'

const { space, colors } = theme

const Tooltip = styled(ReachTooltip)`
  max-width: 200px;
  white-space: unset;
  background: hsla(0, 0%, 0%, 0.75);
  color: ${colors.background};
  border: none;
  border-radius: 4px;
  padding: ${space[2]}px ${space[3]}px;
  justify-self: center;
`

const IconButton = styled.button`
  appearance: none;
  background: 0;
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
`

export default function InfoButton({ info, as }) {
  return (
    <Tooltip label={info}>
      <IconButton as={as}>
        {/* as div: <button> cannot appear as a descendant of <button> */}
        <InfoSmall color={colors.accent} />
      </IconButton>
    </Tooltip>
  )
}

InfoButton.propTypes = {
  info: PropTypes.string.isRequired,
  as: PropTypes.string,
}
