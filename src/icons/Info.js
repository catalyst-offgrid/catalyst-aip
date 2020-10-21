import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ color = 'none' }) => (
  <svg width='48' height='48' xmlns='http://www.w3.org/2000/svg'>
    <g fill={color} fillRule='nonzero'>
      <path d='M31.2 17.8C29.4 16 27 15 24.5 15s-4.9 1-6.7 2.8C16 19.6 15 22 15 24.5s1 4.9 2.8 6.7C19.6 33 22 34 24.5 34s4.9-1 6.7-2.8C33 29.4 34 27 34 24.5s-1-4.9-2.8-6.7zM24.5 33c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z' />
      <path d='M24.5 19c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5zM24.5 23c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5z' />
    </g>
  </svg>
)

export default Info

Info.propTypes = {
  color: PropTypes.string,
}
