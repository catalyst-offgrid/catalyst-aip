import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Credits from '../components/Credits'

import PageLayout, {
  Introduction,
  Tagline,
  PageTitle,
  Paragraph,
  Logo,
} from '../components/PageLayout'

const Actions = styled.div`
  display: inline-flex;
  margin-top: 10px;
  gap: ${({ theme }) => theme.space[3]}px;
`

const PartnersBlock = styled.div`
  grid-column: 1 / span 4;
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

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`

const Image = styled.figure`
  grid-area: 1 / 6 / 3 / span 7;
  margin: -140px -70px -140px 0;
  height: 115vh;

  background-image: ${({ url }) => `url(${url})`};
  background-size: auto 100%;
  background-position: center;

  clip-path: polygon(35% 0%, 115% 0%, 100% 100%, 35% 100%, 15% 60%);
  z-index: -1;
`

export default function ExploreSelector({
  siteAcronym,
  siteName,
  imageUrl,
  theme,
}) {
  return (
    <PageLayout siteAcronym={siteAcronym} theme={theme}>
      <Image url={imageUrl} />
      <Introduction>
        <PageTitle>Dataset Selection</PageTitle>

        <Tagline>
          <br />
          Select a Country
        </Tagline>
        {/* <Paragraph>
          AIP is an open-source platform for data analysis, visualizations, and
          tools that are directly applicable to last-mile service delivery in
          emerging markets.
        </Paragraph> */}
        <Actions>
          <PrimaryButton
            to='/explore/ke'
            aria-label='Kenya'
            data-cy='explore-button'
          >
            Kenya
          </PrimaryButton>
          <PrimaryButton
            to='/explore/ug'
            aria-label='Uganda'
            data-cy='explore-button'
          >
            Uganda
          </PrimaryButton>
          <SecondaryButton
            to='/explore/sl'
            aria-label='Sierra Leone'
            data-cy='info-button'
          >
            Sierra Leone
          </SecondaryButton>
        </Actions>
      </Introduction>
    </PageLayout>
  )
}

ExploreSelector.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
