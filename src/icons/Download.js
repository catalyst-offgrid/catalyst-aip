import React from 'react'
import PropTypes from 'prop-types'

const Download = ({ color = 'none' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
    <path fill='none' d='M0 0h16v16H0z' />
    <path
      fill={color}
      d='M12.706 8.294L11.29 6.878 9 9.172V0H7v9.172L4.706 6.878 3.291 8.294 8 13l4.706-4.706zM16 14H0v2h16v-2z'
    />
  </svg>
)

export default Download

Download.propTypes = {
  color: PropTypes.string,
}
