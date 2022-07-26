import React from 'react'
import PropTypes from 'prop-types'

import { User } from 'components/UsersContainer'
import 'components/UsersContainer/styles.scss'

export const UsersList = (props) => {
  const {
    data,
    selectedUserOnClick,
    ...otherProps
  } = props

  return (
    <ul
      className={'users-list'}
      {...otherProps}
    >
      {data.map((user) => {
        const { uuid, firstName, lastName, age } = user
        const ageAsNumber = Number(age)

        return (
          <User
            key={uuid}
            uuid={uuid}
            firstName={firstName}
            lastName={lastName}
            age={ageAsNumber}
            user={user}
            selectedUserOnClick={selectedUserOnClick}
            pathTo={'/user-details'}
          />
        )
      })}
    </ul>
  )
}

UsersList.propTypes = {
  data: PropTypes.array.isRequired,
  selectedUserOnClick: PropTypes.func.isRequired
}

export default UsersList
