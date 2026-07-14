import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SelectionPageLayout, {
  Introduction,
  Hero,
  Tagline,
  PageTitle,
  Paragraph,
  PrimaryButton,
} from '../components/SelectionPageLayout'

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
`

export default function MtfSelector({ siteAcronym, imageUrl, theme }) {
  return (
    <SelectionPageLayout siteAcronym={siteAcronym} theme={theme}>
      <Hero url={imageUrl} />
      <Introduction>
        <div>
          <Tagline>Select a country</Tagline>
          <PageTitle>Multi-Tier Framework</PageTitle>
          <Paragraph>
            The Multi-Tier Framework (MTF) survey datasets cover household
            access to electricity and clean cooking, treating access as a
            spectrum of service levels rather than a simple yes/no. MTF data is
            currently available for Kenya and Nigeria.
          </Paragraph>
          <Actions>
            <PrimaryButton
              to='/mtf/ke'
              aria-label='Kenya MTF'
              data-cy='mtf-kenya-button'
            >
              Kenya
            </PrimaryButton>
            <PrimaryButton
              to='/mtf/ng'
              aria-label='Nigeria MTF'
              data-cy='mtf-nigeria-button'
            >
              Nigeria
            </PrimaryButton>
          </Actions>
        </div>
      </Introduction>
    </SelectionPageLayout>
  )
}

MtfSelector.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
