import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionItem,
  AccordionButton as ReachAccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import theme from '../config/theme'
import groups from '../config/groups'

const { space } = theme
const AccordionHeader = styled.div`
  align-items: center;
  padding: ${space[3]}px ${space[2]}px;
  display: flex;
  border-top: 1px solid ${theme.colors.mediumGrey};
  border-bottom: ${(props) =>
    props.isOpen ? `1px solid ${theme.colors.mediumGrey}` : 0};
`

const AccordionHeading = styled.h2`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[3]}pt;
  font-weight: ${theme.fontWeights.heading};
  margin: 0;
`

const AccordionSubHeading = styled.h3`
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[2]}pt;
  font-weight: ${theme.fontWeights.heading};
  margin: 0;
`

const AccordionButton = styled(ReachAccordionButton)`
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

const ControlItem = styled.label`
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

export default function LayerControl({ toggleLayer, layerVisibility }) {
  const [indices, setIndices] = useState([0, 1])
  function toggleItem(toggledIndex) {
    if (indices.includes(toggledIndex)) {
      setIndices(
        indices.filter((currentIndex) => currentIndex !== toggledIndex)
      )
    } else {
      setIndices([...indices, toggledIndex].sort())
    }
  }

  return (
    <Accordion index={indices} onChange={toggleItem}>
      {groups.map((group, index) => (
        <AccordionItem key={group.id}>
          <AccordionHeader isOpen={indices.includes(index)}>
            <AccordionButton>
              <AccordionHeading>{group.label}</AccordionHeading>
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
            </AccordionButton>
          </AccordionHeader>
          <AccordionPanel>
            {Object.entries(group.sub).map(([subId, sub]) => {
              if (sub.sub) {
                return (
                  <React.Fragment key={subId}>
                    <AccordionSubHeading>{sub.label}</AccordionSubHeading>
                    {Object.entries(sub.sub).map(([subsubId, subsub]) => (
                      <ControlItem key={subsubId} htmlFor={subsubId}>
                        <Checkbox
                          id={subsubId}
                          onChange={() => toggleLayer(subsubId)}
                          checked={layerVisibility[subsubId]}
                        />
                        {subsub.label}
                      </ControlItem>
                    ))}
                  </React.Fragment>
                )
              }

              return (
                <ControlItem key={subId} htmlFor={subId}>
                  <Checkbox
                    id={subId}
                    onChange={() => toggleLayer(subId)}
                    checked={layerVisibility[subId]}
                  />
                  {sub.label}
                </ControlItem>
              )
            })}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

LayerControl.propTypes = {
  toggleLayer: PropTypes.func.isRequired,
  layerVisibility: PropTypes.object.isRequired,
}
