import React from 'react'
import PropTypes from 'prop-types'

const Globe = ({ color = 'none', background = 'none' }) => (
  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
    <g fill='none' fillRule='evenodd'>
      <rect fill={background} width='32' height='32' rx='4' />
      <g fill={color} fillRule='nonzero'>
        <path d='M10 0.4c-5.295 0-9.601 4.307-9.601 9.6s4.306 9.6 9.601 9.6c5.293 0 9.6-4.307 9.6-9.6s-4.307-9.6-9.6-9.6zM18.188 10c0 1.873-0.636 3.6-1.696 4.98-0.3-0.234-0.619-0.867-0.319-1.523 0.303-0.66 0.382-2.188 0.312-2.783-0.066-0.594-0.375-2.025-1.214-2.039-0.838-0.012-1.413-0.289-1.911-1.283-1.033-2.068 1.939-2.465 0.906-3.609-0.289-0.322-1.783 1.322-2.002-0.869-0.014-0.157 0.135-0.392 0.336-0.636 3.244 1.090 5.588 4.157 5.588 7.762zM8.875 1.893c-0.196 0.382-0.713 0.537-1.027 0.824-0.684 0.619-0.978 0.533-1.346 1.127-0.371 0.594-1.567 1.449-1.567 1.879s0.604 0.936 0.906 0.838c0.302-0.1 1.099-0.094 1.567 0.070 0.469 0.166 3.914 0.332 2.816 3.244-0.348 0.926-1.873 0.77-2.279 2.303-0.061 0.225-0.272 1.186-0.285 1.5-0.025 0.486 0.344 2.318-0.125 2.318-0.471 0-1.738-1.639-1.738-1.936s-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062 0-1.068 0.823-1.6 0.638-2.113-0.181-0.51-1.627-0.527-2.23-0.59 1.053-2.731 3.53-4.758 6.516-5.172zM7.424 17.77c0.492-0.26 0.542-0.596 0.988-0.613 0.51-0.023 0.925-0.199 1.5-0.326 0.51-0.111 1.423-0.629 2.226-0.695 0.678-0.055 2.015 0.035 2.375 0.689-1.295 0.861-2.848 1.363-4.514 1.363-0.899 0-1.765-0.149-2.575-0.418z' />
      </g>
    </g>
  </svg>
)

export default Globe

Globe.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
}
