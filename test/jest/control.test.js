import React from 'react'
import renderer from 'react-test-renderer'

import { AccordionItem, AccordionButton } from '@reach/accordion'
import { DisclosureButton } from '@reach/disclosure'
import LayerControl from '../../src/components/LayerControl'
import Checkbox from '../../src/components/Checkbox'

import uiState from '../__fixtures__/uiState'

const toggleLayer = jest.fn()
const changeSlider = jest.fn()

let testRenderer
let testInstance

describe('LayerControl', () => {
  beforeEach(() => {
    renderer.act(() => {
      testRenderer = renderer.create(
        <LayerControl
          uiState={uiState}
          toggleLayer={toggleLayer}
          changeSlider={changeSlider}
        />
      )
    })
    testInstance = testRenderer.root
  })

  it('matches the snapshot', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  it('creates a first level accordion item with button per ui control group', () => {
    expect(testInstance.findAllByType(AccordionItem).length).toEqual(6)
    expect(testInstance.findAllByType(AccordionButton).length).toEqual(6)
  })

  it('creates a second level header per ui control sub group', () => {
    expect(testInstance.findAllByType(DisclosureButton).length).toEqual(1)
  })

  it('creates a checkbox per layer control item in uiState', () => {
    expect(testInstance.findAllByType(Checkbox).length).toEqual(
      Object.keys(uiState).length
    )
  })

  it('sets the checkbox state based on default layer visibility', () => {
    const totalCount = Object.keys(uiState).length
    const checkedCount = Object.keys(uiState).filter(
      (key) => uiState[key].visibility
    ).length

    expect(testInstance.findAllByProps({ checked: true }).length).toEqual(
      checkedCount * 5 // TODO: why is there 5 times as much as checked items expected?
    )

    expect(testInstance.findAllByProps({ checked: false }).length).toEqual(
      (totalCount - checkedCount) * 5 // TODO: why is there 5 times as much as checked items expected?
    )
  })
})
