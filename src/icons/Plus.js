import React from 'react'
import PropTypes from 'prop-types'

const Plus = ({ color = 'none' }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
  >
    <rect width='16' height='16' id='icon-bound' fill='none' />
    <polygon
      fill={color}
      points='14,7 9,7 9,2 7,2 7,7 2,7 2,9 7,9 7,14 9,14 9,9 14,9'
    />
  </svg>
)

export default Plus

Plus.propTypes = {
  color: PropTypes.string,
}
