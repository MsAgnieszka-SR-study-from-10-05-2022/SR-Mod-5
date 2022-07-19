import React from 'react'
import PropTypes from 'prop-types'

import 'components/Button/styles.scss'

export const Button = (props) => {
  const {
    className,
    label,
    ...otherProps
  } = props

  return (
    <button
      type={'button'}
      className={`basic-button${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node
}

export default Button
