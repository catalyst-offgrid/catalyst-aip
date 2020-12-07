import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import '@reach/tooltip/styles.css'
import styled, { ThemeContext } from 'styled-components'

import ControlItem from './ControlItem'
import InfoButton from './InfoButton'
import { ChevronDown, ChevronUp, Plus, Minus } from '../icons'

export default function LayerControl({
  uiState,
  uicontrols,
  toggleLayer,
  changeSlider,
}) {
  const [indices, setIndices] = useState([])
  function toggleAccordionItem(toggledIndex) {
    if (indices.includes(toggledIndex)) {
      setIndices(
        indices.filter((currentIndex) => currentIndex !== toggledIndex)
      )
    } else {
      setIndices([...indices, toggledIndex].sort())
    }
  }

  return (
    <Accordion index={indices} onChange={toggleAccordionItem}>
      {uicontrols.map((group, index) => (
        <FirstLevelPanel
          key={index}
          label={group.label}
          icon={group.icon}
          description={group.description}
          controls={group.controls}
          indices={indices}
          index={index}
          uiState={uiState}
          toggleLayer={toggleLayer}
          changeSlider={changeSlider}
        />
      ))}
    </Accordion>
  )
}

LayerControl.propTypes = {
  uiState: PropTypes.object.isRequired,
  uicontrols: PropTypes.array.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  changeSlider: PropTypes.func.isRequired,
}

const ToggleButton = styled.button`
  appearance: none;
  background: 0;
  border: 0;
  padding: ${({ theme }) => `0 ${theme.space[2]}px`};
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => `${theme.space[3]}px`};
  width: fit-content;

  > div {
    display: inline-flex;
    gap: ${({ theme }) => `${theme.space[3]}px`};
    align-items: center;
  }
`

const FirstLevelHeader = styled.div`
  align-items: center;
  padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[1]}px`};
  display: flex;
  border-left: ${({ hasSelectedLayers, theme }) =>
    hasSelectedLayers
      ? `5px solid ${theme.colors.highlight}`
      : `5px solid ${theme.colors.background}`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.accent}`};
  border-bottom: ${({ isOpen, theme }) =>
    isOpen ? 0 : `1px solid ${theme.colors.accent}`};
  margin: -1px 0 0 -1px; // to collapse neighboring borders
`

const FirstLevelHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes[2]}pt;
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    text-align: start;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes[0]}pt;
    font-weight: ${({ theme }) => theme.fontWeights.body};
    text-align: start;
  }
`

const Panel = styled.div`
  &:focus {
    outline: none;
  }
`

const IconContainer = styled.div`
  background-color: ${({ hasSelectedLayers, theme }) =>
    hasSelectedLayers ? `${theme.colors.offlight}` : `${theme.colors.muted}`};
  border-radius: 4px;
  width: 32px;
  height: 32px;
`

const getHasSelectedLayers = (controls, uiState) => {
  const selectedLayerIds = Object.keys(uiState).filter(
    (key) => uiState[key].visibility
  )

  const hasFirstLevelSelection = (group) =>
    group.some((control) => selectedLayerIds.includes(control.id))

  const hasSecondLevelSelection = (group) =>
    group
      .filter((control) => !!control.subcontrols)
      .some((control) => hasFirstLevelSelection(control.subcontrols))

  return hasFirstLevelSelection(controls) || hasSecondLevelSelection(controls)
}

function FirstLevelPanel({
  label,
  icon: Icon,
  description,
  controls,
  indices,
  index,
  uiState,
  toggleLayer,
  changeSlider,
}) {
  const theme = useContext(ThemeContext)
  const hasSelectedLayers = getHasSelectedLayers(controls, uiState)

  return (
    <AccordionItem>
      <FirstLevelHeader
        isOpen={indices.includes(index)}
        hasSelectedLayers={hasSelectedLayers}
      >
        <ToggleButton as={AccordionButton}>
          <div>
            <IconContainer hasSelectedLayers={hasSelectedLayers}>
              <Icon
                color={
                  hasSelectedLayers
                    ? theme.colors.highlight
                    : theme.colors.primary
                }
              />
            </IconContainer>
            <FirstLevelHeading>
              <h2>{label}</h2>
              <p>{description}</p>
            </FirstLevelHeading>
          </div>
          {indices.includes(index) ? (
            <span role='img' aria-label='chevron up'>
              <ChevronUp color={theme.colors.primary} />
            </span>
          ) : (
            <span role='img' aria-label='chevron down'>
              <ChevronDown color={theme.colors.primary} />
            </span>
          )}
        </ToggleButton>
      </FirstLevelHeader>
      <Panel as={AccordionPanel}>
        {controls.map((control) => {
          if (control.subcontrols) {
            return (
              <SecondLevelPanel
                key={control.id}
                label={control.label}
                info={control.info}
                controls={control.subcontrols}
                uiState={uiState}
                toggleLayer={toggleLayer}
                changeSlider={changeSlider}
              />
            )
          }

          return (
            <ControlItem
              key={control.id}
              id={control.id}
              label={control.label}
              info={control.info}
              legend={control.legend}
              controlState={uiState[control.id]}
              toggleLayer={toggleLayer}
              changeSlider={changeSlider}
            />
          )
        })}
      </Panel>
    </AccordionItem>
  )
}

FirstLevelPanel.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired, // actually, this is a react component
  description: PropTypes.string.isRequired,
  controls: PropTypes.array.isRequired,
  indices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  uiState: PropTypes.object.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  changeSlider: PropTypes.func.isRequired,
}

const SecondLevelHeader = styled(FirstLevelHeader)`
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  border-bottom: ${(props) =>
    props.isOpen ? `1px solid ${({ theme }) => theme.colors.background}` : 0};
  background-color: ${({ theme }) => theme.colors.muted};
`

const SecondLevelHeading = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[0]}pt;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  #text-transform: uppercase;
  margin: 0;
`

function SecondLevelPanel({
  label,
  info,
  controls,
  uiState,
  toggleLayer,
  changeSlider,
}) {
  const theme = useContext(ThemeContext)
  const [isOpen, setOpen] = useState(false)

  return (
    <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
      <SecondLevelHeader isOpen={isOpen}>
        <ToggleButton as={DisclosureButton}>
          <SecondLevelHeading>{label}</SecondLevelHeading>
          <div>
            {info && (
              <InfoButton
                as='div' // as div: <button> cannot appear as a descendant of <button>
                info={info}
                aria-label={`info about ${label} layers`}
              />
            )}

            {isOpen ? (
              <span role='img' aria-label='minus'>
                <Minus color={theme.colors.primary} />
              </span>
            ) : (
              <span role='img' aria-label='plus'>
                <Plus color={theme.colors.primary} />
              </span>
            )}
          </div>
        </ToggleButton>
      </SecondLevelHeader>
      <Panel as={DisclosurePanel}>
        {controls.map((control) => (
          <ControlItem
            key={control.id}
            id={control.id}
            label={control.label}
            info={control.info}
            legend={control.legend}
            controlState={uiState[control.id]}
            toggleLayer={toggleLayer}
            changeSlider={changeSlider}
          />
        ))}
      </Panel>
    </Disclosure>
  )
}

SecondLevelPanel.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  controls: PropTypes.array.isRequired,
  uiState: PropTypes.object.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  changeSlider: PropTypes.func.isRequired,
}
