import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { ArrowLoop, Download } from '../icons'

import Header from './Header'
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

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.offtext : theme.colors.primary};

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const IconContainer = styled.span`
  margin-right: ${({ theme }) => `${theme.space[2]}px`};
  display: inline-flex;
`

export default function Drawer({
  siteName,
  country,
  cc,
  clearAll,
  hasSelectedLayers,
  children,
  getDataHref,
}) {
  const theme = useContext(ThemeContext)

  return (
    <DrawerShell
      label='layers panel'
      header={<Header siteName={siteName} country={country} cc={cc} />}
      actions={
        <>
          {hasSelectedLayers && (
            <SecondaryButton
              onClick={clearAll}
              disabled={!hasSelectedLayers}
              data-cy='clear-button'
            >
              <IconContainer aria-hidden='true'>
                <ArrowLoop
                  color={
                    hasSelectedLayers
                      ? theme.colors.primary
                      : theme.colors.offtext
                  }
                />
              </IconContainer>
              Clear map
            </SecondaryButton>
          )}
          <PrimaryButton as='a' href={getDataHref} data-cy='download-button'>
            <IconContainer aria-hidden='true'>
              <Download color={theme.colors.background} />
            </IconContainer>
            Get data
          </PrimaryButton>
        </>
      }
    >
      {children}
    </DrawerShell>
  )
}

Drawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  hasSelectedLayers: PropTypes.bool.isRequired,
  clearAll: PropTypes.func.isRequired,
  children: PropTypes.element,
  getDataHref: PropTypes.string.isRequired,
}
