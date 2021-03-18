import React from 'react'
import styled from 'styled-components'
import { GoGraph } from 'react-icons/go'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsTable } from 'react-icons/bs'

const TopNav = styled.section`
  background-color: ${({ theme }) => `${theme.colors.muted}`};
  overflow: hidden;
  grid-column: 4 / span 9;
  height: 130px;
  display: flex;
  flex-direction: column;
`

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`

const VisualizationButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  border: 0;
  box-shadow: none;
  border-radius: 8px;
  border-color: white;
  margin: 5px;
`

const VisualizationButtonText = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => `${theme.colors.background}`};
  font-weight: ${({ theme }) => `${theme.fontWeights.heading}`};
`

const HeadingText = styled.text`
  margin-top: 10px;
  margin-left: 15px;
  font-size: ${({ theme }) => `${theme.fontSizes[2]}`}pt;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-weight: ${({ theme }) => `${theme.fontWeights.bold}`};
`

const VisualizationSelector = () => {
  return (
    <TopNav>
      <HeadingText>Select Visualization Type</HeadingText>
      <ButtonRow>
        <VisualizationButton>
          <AiOutlinePieChart color='white' size='2em' />

          <VisualizationButtonText>Pie</VisualizationButtonText>
        </VisualizationButton>
        <VisualizationButton>
          <GoGraph color='white' size='2em' />

          <VisualizationButtonText>Bar</VisualizationButtonText>
        </VisualizationButton>
        <VisualizationButton>
          <BsTable color='white' size='2em' />
          <VisualizationButtonText>Table</VisualizationButtonText>
        </VisualizationButton>
      </ButtonRow>
    </TopNav>
  )
}

export default VisualizationSelector
