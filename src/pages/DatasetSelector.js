import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Credits from '../components/Credits'

import SelectionPageLayout, {
  Introduction,
  Tagline,
  PageTitle,
  Paragraph,
  SecondaryTagline,
  Logo,
} from '../components/SelectionPageLayout'

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

export default function DatasetSelector({ siteAcronym, imageUrl, theme }) {
  return (
    <SelectionPageLayout siteAcronym={siteAcronym} theme={theme}>
      <Image url={imageUrl} />
      <Introduction>
        <PageTitle>Dataset Selection</PageTitle>

        <Tagline>
          <br />
          Select a dataset
        </Tagline>
        <SecondaryTagline>
          <br />
          Kenya
        </SecondaryTagline>
        <Actions>
          <PrimaryButton
            to='/explore/ke'
            aria-label='explore kenya'
            data-cy='explore-button'
          >
            Geospatial
          </PrimaryButton>
          <PrimaryButton to='/mtf' aria-label='mtf' data-cy='explore-button'>
            MTF
          </PrimaryButton>
        </Actions>

        <SecondaryTagline>
          <br />
          Uganda (Beta)
        </SecondaryTagline>
        <Actions>
          <PrimaryButton
            to='/explore/ug'
            aria-label='explore kenya'
            data-cy='explore-button'
          >
            Geospatial
          </PrimaryButton>
        </Actions>

        <SecondaryTagline>
          <br />
          Sierra Leone (Beta)
        </SecondaryTagline>
        <Actions>
          <PrimaryButton
            to='/explore/sl'
            aria-label='explore kenya'
            data-cy='explore-button'
          >
            Geospatial
          </PrimaryButton>
        </Actions>
      </Introduction>
    </SelectionPageLayout>
  )
}

DatasetSelector.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
