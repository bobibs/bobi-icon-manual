import React from 'react'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'

export default function Icon(props) {
  const { className, fill, height, name, width } = props

  const Component = loadable(() => import(`./${name}`))

  return (
    <Component
      className={className} 
      fill={fill}
      height={height}
      width={width}
      />
    )
}

Icon.defaultProps = {
  className: '',
  fill: '',
  height: '16px',
  name: 'IconEmail',
  width: '16px'
}

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string
}
