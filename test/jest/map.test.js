import React from 'react'
import renderer from 'react-test-renderer'
import mapbox from 'mapbox-gl'

import Map from '../../src/components/Map'
import Source from '../../src/components/Source'
import Layer from '../../src/components/Layer'

let container
let mapWrapper, sourceWrapper, layerWrapper

const source = {
  id: 'test-source',
  layer: 'test-source',
  tilesetid: 'test.12345',
}

const layer = {
  id: 'test-layer',
  source: 'test-source',
  'source-layer': 'test-source',
  type: 'vector',
  layout: {
    visibility: 'visible',
  },
}

describe('Map', () => {
  beforeEach(() => {
    renderer.act(() => {
      mapWrapper = renderer.create(<Map style={{ height: 200 }} />, {
        createNodeMock: (element) => {
          container = element
          return element
        },
      })
    })
  })

  it('renders a styled container', () => {
    expect(mapWrapper.toJSON()).toMatchSnapshot()
  })

  it('adds a map', () => {
    expect(mapbox.Map).toHaveBeenCalledWith({
      container,
      style: `mapbox://styles/mapbox/streets-v11`,
      zoom: 7,
      center: [37.85335, 0.44014],
    })
  })
})

describe('Source', () => {
  it('adds a map source', () => {
    renderer.act(() => {
      sourceWrapper = renderer.create(
        <Source
          id={source.id}
          type='raster'
          tilesetid={source.tilesetid}
          map={mapbox.Map()}
        />
      )
    })

    expect(sourceWrapper.toTree().props.map.addSource).toHaveBeenCalledWith(
      source.id,
      {
        type: 'raster',
        url: 'mapbox://test.12345',
        tileSize: 256,
      }
    )
  })
})

describe('Layer', () => {
  beforeEach(() => {
    renderer.act(() => {
      layerWrapper = renderer.create(
        <Layer
          id={layer.id}
          isVisible={'why?'} // TODO: why does this test pass, when this is _not_ a bool?
          spec={layer}
          sourceId={source.id}
          map={mapbox.Map()}
        />
      )
    })
  })

  it('adds a map layer', () => {
    expect(layerWrapper.toTree().props.map.addLayer).toHaveBeenCalledWith({
      id: layer.id,
      source: source.id,
      'source-layer': source.layer,
      type: 'vector',
      layout: {
        visibility: 'visible',
      },
    })
  })

  it('sets the visible map layer to be visible', () => {
    renderer.act(() => {
      layerWrapper.update(
        <Layer
          id={layer.id}
          isVisible={true}
          spec={layer}
          sourceId={source.id}
          map={mapbox.Map()}
        />
      )
    })
    expect(
      layerWrapper.toTree().props.map.setLayoutProperty
    ).toHaveBeenCalledWith(layer.id, 'visibility', 'visible')
  })

  it('sets the hidden map layer to not be visible', () => {
    renderer.act(() => {
      layerWrapper.update(
        <Layer
          id={layer.id}
          isVisible={false}
          spec={layer}
          sourceId={source.id}
          map={mapbox.Map()}
        />
      )
    })
    expect(
      layerWrapper.toTree().props.map.setLayoutProperty
    ).toHaveBeenCalledWith(layer.id, 'visibility', 'none')
  })
})
