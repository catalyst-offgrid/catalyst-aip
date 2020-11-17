import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { ArrowLoop, Download } from '../icons'

import Header from './Header'
import Credits from './Credits'

const Container = styled.section`
  grid-column: 1 / span 3;

  height: 100vh;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;

  display: flex;
  flex-direction: column;
`

const ScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;

  border-top: ${({ theme }) => `1px solid ${theme.colors.accent}`};
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => `${theme.space[3]}px`};
  gap: ${({ theme }) => `${theme.space[3]}px`};
`

const PrimaryButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  border-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.offtext : theme.colors.primary};
  border-style: solid;
  border-width: 2px;
  border-radius: 4px;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.muted : theme.colors.primary};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.offtext : theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[2]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.offtext : theme.colors.primary};
`

const IconContainer = styled.span`
  margin-right: ${({ theme }) => `${theme.space[2]}px`};
`
export default function Drawer({
  siteName,
  country,
  cc,
  clearAll,
  hasSelectedLayers,
  children,
}) {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Header siteName={siteName} country={country} cc={cc} />

      <ScrollContainer>{children}</ScrollContainer>

      <Credits />

      {hasSelectedLayers && (
        <Actions>
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
          <PrimaryButton
            onClick={() => console.log('not implemented')}
            data-cy='download-button'
            disabled={true}
          >
            <IconContainer aria-hidden='true'>
              <Download
                color={/*theme.colors.background*/ theme.colors.offtext}
              />
            </IconContainer>
            Get data
          </PrimaryButton>
        </Actions>
      )}
    </Container>
  )
}

Drawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  hasSelectedLayers: PropTypes.bool.isRequired,
  clearAll: PropTypes.func.isRequired,
  children: PropTypes.element,
}
