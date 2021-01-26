import React from 'react'
import PropTypes from 'prop-types'

const EconHealth = ({ color = 'none', background = 'none' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width="32" height="32" viewBox="0 0 32 32">
    <g fill='none' fillRule='evenodd'>
      <rect fill={background} width='32' height='32' rx='4' />
      <g fill={color} fillRule='nonzero'>
        <path d='M5.998 5h-0.987v23h20v-0.963l-18.996-0.049-0.017-21.988zM8.011 25h5v-10.875l-5 5v5.875zM14.011 25h5v-9.875l-2 2-3-3v10.875zM20.011 25h5v-15.187l-5 5v10.187zM13.387 11.067l3.62 3.6 7.148-7.112 1.834 1.844-0.044-4.399-4.415 0.023 1.717 1.722-6.242 6.26-3.689-3.703-5.623 5.604 0.939 0.912 4.755-4.751z' />
      </g>
    </g>
  </svg>
)

export default EconHealth

EconHealth.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
}
