import React from 'react'
import PropTypes from 'prop-types'

const Placeholder = ({ color = 'none' }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
  >
    <rect width='16' height='16' fill='none' />
    <polygon
      fill={color}
      points='1.414,15.586 14.586,15.586 14.586,16.414 1.414,16.414'
    />
  </svg>
)

export default Placeholder

Placeholder.propTypes = {
  color: PropTypes.string,
}
