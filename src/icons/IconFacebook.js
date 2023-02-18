import React from 'react'
import PropTypes from 'prop-types'

export default function Icon(props) {
  const { className, fill, height, width } = props

  return (
    <svg
      className={className}
      fill={fill}
      height={height}
      viewBox='0 0 320 512'
      width={width}
    >
      <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'/>
    </svg>
  )
}

Icon.defaultProps = {
  className: '',
  fill: '',
  height: '16px',
  width: '16px'
}

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
