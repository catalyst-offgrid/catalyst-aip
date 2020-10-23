import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import NavigationBar from './NavigationBar'
import theme from '../config/theme'

const { space } = theme

const PageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`

const MainContent = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  margin: ${({ noMargin }) => (noMargin ? 0 : `${space[5]}px auto`)};
  padding: ${({ noMargin }) => (noMargin ? 0 : `${space[5]}px`)};
`

export default function PageLayout({ siteAcronym, noMargin, children }) {
  return (
    <PageContainer>
      <NavigationBar siteAcronym={siteAcronym} />
      <MainContent noMargin={noMargin}>{children}</MainContent>
    </PageContainer>
  )
}

PageLayout.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  noMargin: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
