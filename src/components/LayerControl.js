import React, { useState } from 'react'
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
import styled from 'styled-components'

import Checkbox from './Checkbox'
import { ChevronDown, ChevronUp, Plus, Minus } from '../icons'
import theme from '../config/theme'
import uicontrols from '../config/uicontrols'

const { space } = theme

export default function LayerControl({ toggleLayer, layerVisibility }) {
  const [indices, setIndices] = useState([0, 1])
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
          key={group.id}
          label={group.label}
          sub={group.sub}
          indices={indices}
          index={index}
          toggleLayer={toggleLayer}
          layerVisibility={layerVisibility}
        />
      ))}
    </Accordion>
  )
}

LayerControl.propTypes = {
  toggleLayer: PropTypes.func.isRequired,
  layerVisibility: PropTypes.object.isRequired,
}

const ControlItemContainer = styled.label`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes[2]}pt;
  font-weight: ${theme.fontWeights.body};

  background-color: ${theme.colors.lightGrey};
  border-bottom: 1px solid ${theme.colors.white};

  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${space[3]}px;
  padding: ${space[3]}px;
`

function ControlItem({ id, label, toggleLayer, layerVisibility }) {
  return (
    <ControlItemContainer htmlFor={id}>
      <Checkbox
        id={id}
        onChange={() => toggleLayer(id)}
        checked={layerVisibility[id]}
      />
      {label}
    </ControlItemContainer>
  )
}

ControlItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  layerVisibility: PropTypes.object.isRequired,
}

const ToggleButton = styled.button`
  appearance: none;
  background: 0;
  border: 0;
  padding: 0 ${space[2]}px;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FirstLevelHeader = styled.div`
  align-items: center;
  padding: ${space[3]}px ${space[2]}px;
  display: flex;
  border-top: 1px solid ${theme.colors.mediumGrey};
  border-bottom: ${(props) =>
    props.isOpen ? `1px solid ${theme.colors.mediumGrey}` : 0};
`

const FirstLevelHeading = styled.h2`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.heading};
  margin: 0;
`

function FirstLevelPanel({
  label,
  sub,
  indices,
  index,
  toggleLayer,
  layerVisibility,
}) {
  return (
    <AccordionItem>
      <FirstLevelHeader isOpen={indices.includes(index)}>
        <ToggleButton as={AccordionButton}>
          <FirstLevelHeading>{label}</FirstLevelHeading>
          {indices.includes(index) ? (
            <span
              style={{ marginLeft: theme.space[3] }}
              role='img'
              aria-label='chevron down'
            >
              <ChevronDown color={theme.colors.blue} />
            </span>
          ) : (
            <span
              style={{ marginLeft: theme.space[3] }}
              role='img'
              aria-label='chevron up'
            >
              <ChevronUp color={theme.colors.blue} />
            </span>
          )}
        </ToggleButton>
      </FirstLevelHeader>
      <AccordionPanel>
        {Object.entries(sub).map(([subId, sub]) => {
          if (sub.sub) {
            return (
              <SecondLevelPanel
                key={subId}
                label={sub.label}
                sub={sub.sub}
                toggleLayer={toggleLayer}
                layerVisibility={layerVisibility}
              />
            )
          }

          return (
            <ControlItem
              key={subId}
              id={subId}
              label={sub.label}
              toggleLayer={toggleLayer}
              layerVisibility={layerVisibility}
            />
          )
        })}
      </AccordionPanel>
    </AccordionItem>
  )
}

FirstLevelPanel.propTypes = {
  label: PropTypes.string.isRequired,
  sub: PropTypes.object.isRequired,
  indices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  layerVisibility: PropTypes.object.isRequired,
}

const SecondLevelHeader = styled(FirstLevelHeader)`
  border-top: 1px solid ${theme.colors.white};
  border-bottom: ${(props) =>
    props.isOpen ? `1px solid ${theme.colors.white}` : 0};
  background-color: ${theme.colors.lightGrey};
`

const SecondLevelHeading = styled.h3`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[1]}pt;
  font-weight: ${theme.fontWeights.heading};
  text-transform: uppercase;
  margin: 0;
`

function SecondLevelPanel({ label, sub, toggleLayer, layerVisibility }) {
  const [isOpen, setOpen] = useState(true)

  return (
    <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
      <SecondLevelHeader isOpen={isOpen}>
        <ToggleButton as={DisclosureButton}>
          <SecondLevelHeading>{label}</SecondLevelHeading>
          {isOpen ? (
            <span
              style={{ marginLeft: theme.space[3] }}
              role='img'
              aria-label='minus'
            >
              <Minus color={theme.colors.blue} />
            </span>
          ) : (
            <span
              style={{ marginLeft: theme.space[3] }}
              role='img'
              aria-label='plus'
            >
              <Plus color={theme.colors.blue} />
            </span>
          )}
        </ToggleButton>
      </SecondLevelHeader>
      <DisclosurePanel>
        {Object.entries(sub).map(([subId, sub]) => (
          <ControlItem
            key={subId}
            id={subId}
            label={sub.label}
            toggleLayer={toggleLayer}
            layerVisibility={layerVisibility}
          />
        ))}
      </DisclosurePanel>
    </Disclosure>
  )
}

SecondLevelPanel.propTypes = {
  label: PropTypes.string.isRequired,
  sub: PropTypes.object.isRequired,
  toggleLayer: PropTypes.func.isRequired,
  layerVisibility: PropTypes.object.isRequired,
}
