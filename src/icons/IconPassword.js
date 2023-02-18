import React from 'react'
import PropTypes from 'prop-types'

export default function Icon(props) {
  const { className, fill, height, width } = props

  return (
    <svg
      className={className}
      fill={fill}
      height={height}
      viewBox='0 0 448 512'
      width={width}
    >
      <path d='M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z'/>
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
