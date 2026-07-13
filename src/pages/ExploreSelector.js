import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SelectionPageLayout, {
  Introduction,
  Hero,
  Tagline,
  PageTitle,
  PrimaryButton,
} from '../components/SelectionPageLayout'

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
`

export default function ExploreSelector({ siteAcronym, imageUrl, theme }) {
  return (
    <SelectionPageLayout siteAcronym={siteAcronym} theme={theme}>
      <Hero url={imageUrl} />
      <Introduction>
        <div>
          <Tagline>Select a country</Tagline>
          <PageTitle>Dataset Selection</PageTitle>
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
            <PrimaryButton
              to='/explore/sl'
              aria-label='Sierra Leone'
              data-cy='info-button'
            >
              Sierra Leone
            </PrimaryButton>
          </Actions>
        </div>
      </Introduction>
    </SelectionPageLayout>
  )
}

ExploreSelector.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
