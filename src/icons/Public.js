import React from 'react'
import PropTypes from 'prop-types'

const Public = ({ color = 'none', background = 'none' }) => (
  <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
    <g fill='none' fillRule='evenodd'>
      <rect fill={background} width='32' height='32' rx='4' />
      <g fill={color} fillRule='nonzero'>
        <path d='M16 14.281a1.76 1.76 0 00-1.758 1.758c0 .97.789 1.758 1.758 1.758a1.76 1.76 0 001.758-1.758A1.76 1.76 0 0016 14.281zm0 2.344a.587.587 0 11.001-1.173.587.587 0 01-.001 1.173z' />
        <path d='M23.313 14.281H20.93l-4.344-4.344v-.421h4.687V6h-5.859v3.937l-4.344 4.344H8.687L6 16.968V26h20v-9.032l-2.687-2.687zm-6.727-7.11h3.516v1.173h-3.516V7.172zm-5.86 17.657H7.173v-7.031h3.555v7.031zm0-8.203H8.002l1.171-1.172h1.555v1.172zm4.688 8.203h-1.172v-2.344h1.172v2.344zm-1.071-3.515A1.76 1.76 0 0116 20.14c.764 0 1.415.49 1.657 1.172h-3.314zm3.415 3.515h-1.172v-2.344h1.172v2.344zm2.344 0H18.93v-2.93a2.933 2.933 0 00-2.93-2.93 2.933 2.933 0 00-2.93 2.93v2.93h-1.172V15.11L16 11.008l4.102 4.102v9.718zm1.171-9.375h1.555l1.171 1.172h-2.726v-1.172zm3.555 9.375h-3.555v-7.031h3.555v7.031z' />
        <path d='M22.484 18.969h1.172v1.172h-1.172zM8.344 18.969h1.172v1.172H8.344zM22.484 21.313h1.172v1.172h-1.172zM8.344 21.313h1.172v1.172H8.344z' />
      </g>
    </g>
  </svg>
)

export default Public

Public.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
}
