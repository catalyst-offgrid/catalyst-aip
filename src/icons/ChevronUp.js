import React from 'react'
import PropTypes from 'prop-types'

const ChevronUp = ({ color = 'none' }) => (
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
      points='1.414,12.414 8,5.828 14.586,12.414 16,11 8,3 0,11'
    />
  </svg>
)

export default ChevronUp

ChevronUp.propTypes = {
  color: PropTypes.string,
}
