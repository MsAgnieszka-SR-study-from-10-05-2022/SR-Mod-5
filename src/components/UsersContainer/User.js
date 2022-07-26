import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import colors from 'universal-styles/colors'

export const User = (props) => {
  const {
    firstName,
    lastName,
    age,
    user,
    selectedUserOnClick,
    pathTo,
    ...otherProps
  } = props

  return (
    <li
      className={'user-item'}
      onClick={() => { selectedUserOnClick(user) }}
      {...otherProps}
    >
      <NavLink
        to={pathTo}
        style={{
          textDecoration: 'none',
          color: colors.mainBrightColor
        }}
      >
        Imię i nazwisko: <b>{firstName} {lastName}</b> ___ Wiek: <b>{age}</b>
      </NavLink>
    </li>
  )
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  selectedUserOnClick: PropTypes.func.isRequired,
  pathTo: PropTypes.string.isRequired
}

export default User
