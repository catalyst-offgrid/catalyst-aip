import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ color = 'none' }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
  >
    <circle width='16' height='16' fill={color} />
  </svg>
)

export default Circle

Circle.propTypes = {
  color: PropTypes.string,
}
