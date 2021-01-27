import React from 'react'
import PropTypes from 'prop-types'

const Mobile = ({ color = 'none', background = 'none' }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
  >
    <g fill='none' fillRule='evenodd'>
      <rect fill={background} width='32' height='32' rx='4' />
      <g fill={color} fillRule='nonzero'>
        <path d='M21.999 4h-12c-1.104 0-1.999 0.896-1.999 2v20c0 1.104 0.895 2 1.999 2h12c1.105 0 2.001-0.896 2.001-2v-20c0-1.104-0.896-2-2.001-2zM13 5h5l0.062 1h-5.062v-1zM15.979 26.5c-0.552 0-1-0.447-1-1s0.448-1 1-1c0.553 0 1 0.447 1 1s-0.448 1-1 1zM21.999 23h-12l0.021-16h11.979v16z' />
      </g>
    </g>
  </svg>
)

export default Mobile

Mobile.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
}
