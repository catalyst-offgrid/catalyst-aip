import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageLayout, {
  InfoBlock,
  Introduction,
  Tagline,
  PageTitle,
  Paragraph,
  Logo,
} from '../components/PageLayout'

const Actions = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.space[3]}px;
`

const PrimaryButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  min-width: 200px;
  padding: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};
  border: ${({ theme }) => `4px solid ${theme.colors.primary}`};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[1]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export default function Info({ siteAcronym, theme }) {
  return (
    <PageLayout siteAcronym={siteAcronym} theme={theme}>
      <InfoBlock>
        <Tagline>Explore</Tagline>
        <PageTitle>Choose a country</PageTitle>
        <Paragraph>Text here...</Paragraph>
      </InfoBlock>

      <Introduction>
        <Actions>
          <PrimaryButton to='/explore/ke' aria-label='Kenya'>
            Kenya
          </PrimaryButton>
          <PrimaryButton to='/explore/ug' aria-label='Uganda'>
            Uganda
          </PrimaryButton>
        </Actions>
      </Introduction>
      <Logo withTagline />
    </PageLayout>
  )
}

Info.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
