import React from 'react'
import PropTypes from 'prop-types'

import 'components/Input/styles.scss'

export const Input = (props) => {
  const {
    label,
    inputRef,
    handleKeyDown,
    placeholder,
    ...otherProps
  } = props

  return (
    <label>
      {label}
      <input
        className={'default-input-styles'}
        type={'text'}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        {...otherProps}
      />
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  inputRef: PropTypes.node.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Input
