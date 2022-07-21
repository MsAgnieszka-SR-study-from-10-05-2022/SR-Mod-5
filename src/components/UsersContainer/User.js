import React from 'react'
import PropTypes from 'prop-types'

export const User = (props) => {
  const {
    firstName,
    lastName,
    age,
    ...otherProps
  } = props

  return (
    <li
      className={'user-item'}
      {...otherProps}
    >
      Imię i nazwisko: <b>{firstName} {lastName}</b> ___ Wiek: <b>{age}</b>
    </li>
  )
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default User
