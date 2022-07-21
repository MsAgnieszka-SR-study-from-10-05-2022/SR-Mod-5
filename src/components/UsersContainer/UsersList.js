import React from 'react'
import PropTypes from 'prop-types'

import { User } from 'components/UsersContainer'
import 'components/UsersContainer/styles.scss'

export const UsersList = (props) => {
  const {
    data,
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
          />
        )
      })}
    </ul>
  )
}

UsersList.propTypes = {
  data: PropTypes.array.isRequired
}

export default UsersList
