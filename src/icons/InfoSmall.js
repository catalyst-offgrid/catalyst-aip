import React from 'react'
import PropTypes from 'prop-types'

const InfoSmall = ({ color = 'none' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
    <path fill='none' d='M0 0h16v16H0z' />
    <path
      fill={color}
      d='M7 12h2V7H7v5zm1-8a1 1 0 100 2 1 1 0 000-2zm0-4a8 8 0 100 16A8 8 0 008 0zm4.243 12.243C11.109 13.376 9.603 14 8 14s-3.109-.624-4.243-1.757C2.624 11.109 2 9.603 2 8s.624-3.109 1.757-4.243C4.891 2.624 6.397 2 8 2s3.109.624 4.243 1.757A5.963 5.963 0 0114 8a5.963 5.963 0 01-1.757 4.243z'
    />
  </svg>
)

export default InfoSmall

InfoSmall.propTypes = {
  color: PropTypes.string,
}
