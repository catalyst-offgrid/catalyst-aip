import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionItem,
  AccordionButton as ReachAccordionButton,
  AccordionPanel as ReachAccordionPanel,
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
  padding: ${space[2]}px;
  display: flex;
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

const AccordionPanel = styled(ReachAccordionPanel)`
  padding: 0 ${space[3]}px;
`

const ControlItem = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${space[3]}px;
  padding: ${space[3]}px 0;
`

export default function LayerControl({ toggleLayer, layerVisibility }) {
  const [indices, setIndices] = useState([0, 2])
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
          <AccordionHeader>
            <AccordionButton>
              <h2>{group.label}</h2>
              {indices.includes(index) ? (
                <ChevronUp color={'inherit'} />
              ) : (
                <ChevronDown color={'inherit'} />
              )}
            </AccordionButton>
          </AccordionHeader>
          <AccordionPanel>
            {Object.entries(group.sub).map(([subId, sub]) => (
              <ControlItem key={subId} htmlFor={subId} style={{}}>
                <Checkbox
                  id={subId}
                  onChange={() => toggleLayer(subId)}
                  checked={layerVisibility[subId]}
                />
                {sub.label}
              </ControlItem>
            ))}
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
