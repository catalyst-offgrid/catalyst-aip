import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'

import groups from '../config/groups'

const AccordionHeader = styled.div`
  align-items: center;
  padding: 10px;
  display: flex;
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
            <AccordionButton
              style={{
                appearance: 'none',
                background: 0,
                border: 0,
                flexGrow: 1,
                flexShrink: 0,
                margin: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2>{group.label}</h2>
              {indices.includes(index) ? (
                <ChevronUp color={'inherit'} />
              ) : (
                <ChevronDown color={'inherit'} />
              )}
            </AccordionButton>
          </AccordionHeader>
          <AccordionPanel style={{ padding: '10px' }}>
            {Object.entries(group.sub).map(([subId, sub]) => (
              <label
                key={subId}
                htmlFor={subId}
                style={{
                  display: `grid`,
                  gridTemplateColumns: `auto 1fr`,
                  gap: `0.75rem`,
                  margin: `0.25rem`,
                }}
              >
                <Checkbox
                  id={subId}
                  onChange={() => toggleLayer(subId)}
                  checked={layerVisibility[subId]}
                />
                {sub.label}
              </label>
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
