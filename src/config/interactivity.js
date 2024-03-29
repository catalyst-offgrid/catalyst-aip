import mapbox from 'mapbox-gl'

export const interactivityLayers = [
  {
    id: 'nga_synthetic_minigrids_1349-2a9ktv',
    dataFields: [
      {
        displayName: 'Size (kWp)',
        fieldName: 'Size',
      },
      {
        displayName: 'Number of residential connections',
        fieldName: 'Residential Connections',
      },
      {
        displayName: 'Number of commercial connections',
        fieldName: 'Commercial Connections',
      },
      {
        displayName: 'Carbon Averted (kgCO2/yr)',
        fieldName: 'Carbon Averted (kgCO2/yr)',
      },
      {
        displayName: 'Funder',
        fieldName: 'Funder',
      },
      {
        displayName: 'Company',
        fieldName: 'Company',
      },
      {
        displayName: 'Year',
        fieldName: 'Year',
      },
      {
        displayName: 'Latitude',
        fieldName: 'Latitude',
      },
      {
        displayName: 'Longitude',
        fieldName: 'Longitude',
      },
      {
        displayName: 'LGA',
        fieldName: 'ADM2_EN',
      },
      {
        displayName: 'State',
        fieldName: 'ADM1_EN',
      },
    ],
  },
  {
    id: 'nga_mini_grids-7r061j',
    dataFields: [
      {
        displayName: 'Project Name',
        fieldName: 'Name',
      },
      {
        displayName: 'Size (kWp)',
        fieldName: 'Size (kWp)',
      },
      {
        displayName: 'Organization',
        fieldName: 'Organization',
      },
      {
        displayName: 'Year Built',
        fieldName: 'Year Built',
      },
      {
        displayName: 'Status',
        fieldName: 'Status',
      },
      {
        displayName: 'Latitude',
        fieldName: 'Latitude',
      },
      {
        displayName: 'Longitude',
        fieldName: 'Longitude',
      },
      {
        displayName: 'Location Accuracy',
        fieldName: 'Location Accuracy',
      },
      {
        displayName: 'Community',
        fieldName: 'Community',
      },
      {
        displayName: 'LGA',
        fieldName: 'LGA',
      },
      {
        displayName: 'State',
        fieldName: 'State',
      },
      {
        displayName: 'Source',
        fieldName: 'Source',
      },
      {
        displayName: 'Notes',
        fieldName: 'Note',
      },
    ],
  },
  {
    id: 'nigeria-health-centers-data',
    dataFields: [
      {
        displayName: 'Facility Name',
        fieldName: 'Facility Name',
      },
      {
        displayName: 'Phone & Electricity Connection',
        fieldName: 'Phone & Electricity Connection',
      },
      {
        displayName: 'Refridgerated Vaccines',
        fieldName: 'Refridgerated Vaccines',
      },
      {
        displayName: 'Number Fulltime Nurses',
        fieldName: 'Number Fulltime Nurses',
      },
      {
        displayName: 'Survey Date',
        fieldName: 'Survey Date',
      },
      {
        displayName: 'Latitude',
        fieldName: 'Latitude',
      },
      {
        displayName: 'Longitude',
        fieldName: 'Longitude',
      },
    ],
  },
]

export const attachHandlersToMap = (m) => {
  interactivityLayers.forEach((layer) => {
    createHandlersForLayer(m, layer)
  })
}

const createHandlersForLayer = (m, layer) => {
  const layerId = layer.id
  const dataFields = layer.dataFields

  m.on('click', layerId, (e) => {
    // Create HTML mapping for each data field
    const htmlMapping = dataFields.map((field) => {
      return {
        name: field.displayName,
        value: e.features[0].properties[field.fieldName],
      }
    })

    // Create HTML template for popup
    const htmlTemplate = `
      <div class="popup-content">
        <h3>Details</h3>
        <ul>
          ${htmlMapping
            .map(
              (mapping) =>
                `<li><span style="font-weight: bold;">${mapping.name}</span>: ${mapping.value}</li>`
            )
            .join('')}
        </ul>
      </div>
    `

    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice()

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    }

    new mapbox.Popup().setLngLat(coordinates).setHTML(htmlTemplate).addTo(m)
  })

  // Change the cursor to a pointer when the mouse is over the layer.
  m.on('mouseenter', layerId, () => {
    m.getCanvas().style.cursor = 'pointer'
  })

  // Change it back to a pointer when it leaves.
  m.on('mouseleave', layerId, () => {
    m.getCanvas().style.cursor = ''
  })
}
