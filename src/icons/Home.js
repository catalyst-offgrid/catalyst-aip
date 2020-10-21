import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ color = 'none' }) => (
  <svg width='48' height='48' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M33.871 26.165l-8.829-9.758a1.392 1.392 0 00-1.042-.47c-.397 0-.767.167-1.042.47l-8.829 9.758a.5.5 0 00.741.67l2.129-2.353V32.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-8.018l2.129 2.353a.499.499 0 10.741-.671l.002.001zM26 33h-4v-4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V33zm4-.5a.5.5 0 01-.5.5H27v-4.5c0-.827-.673-1.5-1.5-1.5h-3c-.827 0-1.5.673-1.5 1.5V33h-2.5a.5.5 0 01-.5-.5v-9.123l5.7-6.3a.404.404 0 01.3-.141c.111 0 .218.05.3.141l5.7 6.3V32.5z'
      fill={color}
      fillRule='nonzero'
    />
  </svg>
)

export default Home

Home.propTypes = {
  color: PropTypes.string,
}
