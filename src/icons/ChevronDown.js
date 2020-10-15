import React from 'react'
import PropTypes from 'prop-types'

const ChevronDown = ({ color = 'none' }) => (
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
      points='14.586,3.586 8,10.172 1.414,3.586 0,5 8,13 16,5'
    />
  </svg>
)

export default ChevronDown

ChevronDown.propTypes = {
  color: PropTypes.string,
}
