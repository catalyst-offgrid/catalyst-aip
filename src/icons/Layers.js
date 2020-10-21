import React from 'react'
import PropTypes from 'prop-types'

const Layers = ({ color = 'none' }) => (
  <svg width='48' height='48' xmlns='http://www.w3.org/2000/svg'>
    <g fill={color} fillRule='nonzero'>
      <path d='M24 25a.502.502 0 01-.194-.039l-9.5-4a.501.501 0 010-.922l9.5-4a.502.502 0 01.388 0l9.5 4a.501.501 0 010 .922l-9.5 4A.502.502 0 0124 25zm-8.212-4.5L24 23.957l8.212-3.457L24 17.043 15.788 20.5z' />
      <path d='M24 28a.502.502 0 01-.194-.039l-9.5-4a.5.5 0 01.388-.922L24 26.957l9.306-3.918a.5.5 0 11.388.922l-9.5 4A.502.502 0 0124 28z' />
      <path d='M24 31a.502.502 0 01-.194-.039l-9.5-4a.5.5 0 01.388-.922L24 29.957l9.306-3.918a.5.5 0 11.388.922l-9.5 4A.502.502 0 0124 31z' />
    </g>
  </svg>
)

export default Layers

Layers.propTypes = {
  color: PropTypes.string,
}
