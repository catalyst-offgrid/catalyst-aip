import React from 'react'
import PropTypes from 'prop-types'

const Health = ({ color = 'none', background = 'none' }) => (
  <svg
    width='32'
    height='32'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
  >
    <g fill='none' fillRule='evenodd'>
      <rect fill={background} width='32' height='32' rx='4' />
      <g fill={color} fillRule='nonzero'>
        <path d='M27 28.031h-2v1.938h-4v-1.938h-11v1.938h-4v-1.938h-2c-1.105 0-2-0.896-2-2v-17c0-1.105 0.895-2 2-2h23c1.104 0 2 0.896 2 2v17c0 1.105-0.896 2-2 2zM20.999 16.031h-3.999v-4h-3v4h-4v3h4v4h3v-4h3.999v-3zM19 4.010h-6v2.021h-2v-0.979h1v-3.021h7.958v3h1.042v1h-2v-2.021z' />
      </g>
    </g>
  </svg>
)

export default Health

Health.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
}
