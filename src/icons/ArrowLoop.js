import React from 'react'
import PropTypes from 'prop-types'

const ArrowLoop = ({ color = 'none' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
    <path fill='none' d='M0 0h16v16H0z' />
    <path
      fill={color}
      d='M6 4H3.528c.075-.081.15-.162.228-.244C4.891 2.625 6.397 2 8 2s3.109.625 4.244 1.756A5.974 5.974 0 0114 8h2a8 8 0 00-8-8 7.975 7.975 0 00-6 2.709V0H0v6h6V4zm4 8h2.472c-.075.081-.15.163-.228.244C11.109 13.375 9.603 14 8 14s-3.109-.625-4.244-1.756A5.974 5.974 0 012 8H0a8 8 0 008 8 7.975 7.975 0 006-2.709V16h2v-6h-6v2z'
    />
  </svg>
)

export default ArrowLoop

ArrowLoop.propTypes = {
  color: PropTypes.string,
}
