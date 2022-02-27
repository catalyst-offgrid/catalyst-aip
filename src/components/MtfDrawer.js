import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { Download } from '../icons'

import MtfHeader from './MtfHeader'
//import Credits from './Credits'

const Container = styled.section`
  height: 100vh;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.24);
  z-index: 1;
  grid-area: sidebar;

  display: flex;
  flex-direction: column;

  width: 350px;
`

const ScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;

  border-top: ${({ theme }) => `1px solid ${theme.colors.accent}`};
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => `${theme.space[2]}px`};
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

  grid-column: 2;
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.offtext : theme.colors.primary};

  grid-column: 1;
`

const IconContainer = styled.span`
  margin-right: ${({ theme }) => `${theme.space[2]}px`};
`
export default function MtfDrawer({
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
      <MtfHeader siteName={siteName} country={country} cc={cc} />

      <ScrollContainer>{children}</ScrollContainer>

      <Actions>
        {/* {hasSelectedLayers && (
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
        )} */}
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
      </Actions>
    </Container>
  )
}

MtfDrawer.propTypes = {
  siteName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  hasSelectedLayers: PropTypes.bool.isRequired,
  clearAll: PropTypes.func.isRequired,
  children: PropTypes.element,
}
