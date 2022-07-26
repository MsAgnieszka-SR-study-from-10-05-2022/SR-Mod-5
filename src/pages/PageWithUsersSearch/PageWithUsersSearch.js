import React from 'react'
import PropTypes from 'prop-types'

import UsersContainer from 'components/UsersContainer'

export const PageWithUsersSearch = ({ selectedUserOnClick }) => {
  return (
    <>
      <h2 style={{ margin: '0 20px' }}>Task 4 + Task 5 - Wyszukiwanie użytkowników i szczegóły wybranej osoby</h2>
      <UsersContainer selectedUserOnClick={selectedUserOnClick} />
    </>
  )
}

PageWithUsersSearch.propTypes = {
  selectedUserOnClick: PropTypes.func.isRequired
}

export default PageWithUsersSearch
