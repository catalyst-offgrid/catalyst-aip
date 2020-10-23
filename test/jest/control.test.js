import React from 'react'
import renderer from 'react-test-renderer'

import { AccordionItem, AccordionButton } from '@reach/accordion'
import { DisclosureButton } from '@reach/disclosure'
import LayerControl from '../../src/components/LayerControl'
import Checkbox from '../../src/components/Checkbox'

const toggleLayer = jest.fn()
const layerVisibility = {
  counties: false,
  'sub-counties': false,
  wards: false,
  gridfinder: true,
  'Conventional Households': false,
  'Main Electricity': false,
  'Low-Quality Stopgap Total': false,
  'Kerosene (Total)': false,
  'Paraffin Pressure Lamp': false,
  'Paraffin Lantern': false,
  'Paraffin Tin Lamp': false,
  'Gas Lamp': false,
  Wood: false,
  'Solar (Total)': false,
  Solar: false,
  'Torch / Spotlight (Solar-Charged)': false,
  'Torch / Spotlight (Dry Cells))': false,
  Candle: false,
  'Battery (Car-Charged)': false,
  'Generator (Diesel / Petrol)': false,
  Biogas: false,
  'Not Stated': false,
  'Cooking - Electricity': false,
  'Cooking - Paraffin': false,
  'Cooking - Gas (LPG)': false,
  'Cooking - Biogas': false,
  'Cooking - Firewood': false,
  'Cooking - Charcoal': false,
  'Cooking - Solar': false,
  'Cooking - Not Stated': false,
  banks: false,
  mfi: false,
  sacco: false,
  arc: false,
  health: false,
  education: true,
  road: false,
}

let testRenderer
let testInstance

describe('LayerControl', () => {
  beforeEach(() => {
    renderer.act(() => {
      testRenderer = renderer.create(
        <LayerControl
          toggleLayer={toggleLayer}
          layerVisibility={layerVisibility}
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

  it('creates a checkbox per layer control item in layerVisibility', () => {
    expect(testInstance.findAllByType(Checkbox).length).toEqual(
      Object.keys(layerVisibility).length
    )
  })

  it('sets the checkbox state based on default layer visibility', () => {
    const totalCount = Object.keys(layerVisibility).length
    const checkedCount = Object.keys(layerVisibility).filter(
      (key) => layerVisibility[key]
    ).length

    expect(testInstance.findAllByProps({ checked: true }).length).toEqual(
      checkedCount * 5 // TODO: why is there 5 times as much as checked items expected?
    )

    expect(testInstance.findAllByProps({ checked: false }).length).toEqual(
      (totalCount - checkedCount) * 5 // TODO: why is there 5 times as much as checked items expected?
    )
  })
})
