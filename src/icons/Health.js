import React from 'react'
import PropTypes from 'prop-types'

const Health = ({ color = 'none' }) => (
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
      points='1.414,7 7,7 7,1.414 9,1.414 9,7 14.586,7 14.586,9 9,9 9,14.586 7,14.586 7,9 1.414,9'
    />
  </svg>
)

export default Health

Health.propTypes = {
  color: PropTypes.string,
}
