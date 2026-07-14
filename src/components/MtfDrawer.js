import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { Download } from '../icons'

import MtfHeader from './MtfHeader'
import DrawerShell from './DrawerShell'

const PrimaryButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  border: 2px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.offtext : theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii[2]}px;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.muted : theme.colors.primary};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.offtext : theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const IconContainer = styled.span`
  margin-right: ${({ theme }) => `${theme.space[2]}px`};
  display: inline-flex;
`

export default function MtfDrawer({ siteName, country, cc, children }) {
  const theme = useContext(ThemeContext)

  return (
    <DrawerShell
      label='graphs panel'
      header={<MtfHeader siteName={siteName} country={country} cc={cc} />}
      actions={
        <PrimaryButton
          as='a'
          href='https://drive.google.com/drive/u/2/folders/17h8YhIGyNWBRk_HwyTOXZPbhrFyttGRW'
          data-cy='download-button'
        >
          <IconContainer aria-hidden='true'>
            <Download color={theme.colors.background} />
          </IconContainer>
          Get data
        </PrimaryButton>
      }
    >
      {children}
    </DrawerShell>
  )
}

MtfDrawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  children: PropTypes.element,
}
