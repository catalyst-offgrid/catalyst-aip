import React from 'react'
import PropTypes from 'prop-types'

const Minus = ({ color = 'none' }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
  >
    <rect width='16' height='16' fill='none' />
    <polygon fill={color} points='14,7 2,7 2,9 14,9' />
  </svg>
)

export default Minus

Minus.propTypes = {
  color: PropTypes.string,
}
