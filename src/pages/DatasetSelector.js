import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import SelectionPageLayout, {
  Introduction,
  Hero,
  Tagline,
  PageTitle,
  PrimaryButton,
  SecondaryButton,
} from '../components/SelectionPageLayout'

const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
  max-width: 560px;
`

const CountryCard = styled.section`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii[3]}px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.space[3]}px;

  transition: box-shadow ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`

const CountryName = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0 0 ${({ theme }) => theme.space[3]}px;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
`

const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]}px;

  a {
    min-width: 0;
    flex: 1;
    padding: 10px 16px;
  }
`

function flagFor(cc) {
  const ASCII_OFFSET = 127397
  return String.fromCodePoint(
    ...[...cc.toUpperCase()].map((c) => c.charCodeAt() + ASCII_OFFSET)
  )
}

const COUNTRIES = [
  { name: 'Kenya', cc: 'ke', mtf: true },
  { name: 'Nigeria', cc: 'ng', mtf: true },
  { name: 'Uganda', cc: 'ug', mtf: false },
  { name: 'Sierra Leone', cc: 'sl', mtf: false },
]

export default function DatasetSelector({ siteAcronym, imageUrl, theme }) {
  return (
    <SelectionPageLayout siteAcronym={siteAcronym} theme={theme}>
      <Hero url={imageUrl} />
      <Introduction>
        <div>
          <Tagline>Select a dataset</Tagline>
          <PageTitle>Dataset Selection</PageTitle>
          <CountryGrid>
            {COUNTRIES.map(({ name, cc, mtf }) => (
              <CountryCard key={cc}>
                <CountryName>
                  <span role='img' aria-label={`flag-${cc}`}>
                    {flagFor(cc)}
                  </span>
                  {name}
                </CountryName>
                <CardActions>
                  <PrimaryButton
                    to={`/explore/${cc}`}
                    aria-label={`explore ${name}`}
                    data-cy='explore-button'
                  >
                    Geospatial
                  </PrimaryButton>
                  {mtf && (
                    <SecondaryButton
                      to={`/mtf/${cc}`}
                      aria-label={`${name} MTF`}
                      data-cy={`mtf-${name.toLowerCase()}-button`}
                    >
                      MTF
                    </SecondaryButton>
                  )}
                </CardActions>
              </CountryCard>
            ))}
          </CountryGrid>
        </div>
      </Introduction>
    </SelectionPageLayout>
  )
}

DatasetSelector.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
