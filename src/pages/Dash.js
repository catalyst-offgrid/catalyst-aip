import PropTypes from 'prop-types'
import React, { Component } from 'react'
// eslint-disable-next-line
import tableau from 'tableau-api'

import PageLayout from '../components/PageLayout'

class Tableau extends Component {
  componentDidMount() {
    this.initViz()
  }
  initViz() {
    const vizUrl =
      'https://public.tableau.com/views/Module1Dashboard/Storyboard'
    const vizContainer = this.vizContainer
    var options = {
      width: '100%',
      height: '5000px',
      hideTabs: true,
      hideToolbar: true,
    }
    // eslint-disable-next-line
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }
  render() {
    return (
      <div
        ref={(div) => {
          this.vizContainer = div
        }}
        style={{ width: '90vw' }}
      ></div>
    )
  }
}

export default function Info({ siteAcronym, theme }) {
  return (
    <PageLayout siteAcronym={siteAcronym} theme={theme}>
      <Tableau />
    </PageLayout>
  )
}

Info.propTypes = {
  siteAcronym: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
