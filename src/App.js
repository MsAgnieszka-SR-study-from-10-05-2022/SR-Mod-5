import React from 'react'

import { Routes, Route } from 'react-router-dom'

import NavMenu from 'components/NavMenu'
import PageWithDialog from 'pages/PageWithDialog'
import PageWithSnackbar from 'pages/PageWithSnackbar'
import PageWithNavMenu from 'pages/PageWithNavMenu'
import PageWithUsersSearch from 'pages/PageWithUsersSearch'
import PageWithUserDetails from 'pages/PageWithUserDetails'

import './App.scss'
import styled from 'styled-components'

const NavBarContainer = styled.div``

const App = () => {
  const [chosenUser, setChosenUser] = React.useState({})

  const selectedUserOnClick = (user) => setChosenUser(user)
  // console.log(chosenUser)

  return (
    <>
      <NavBarContainer>
        <NavMenu />
      </NavBarContainer>
      <h1
        style={{ marginTop: '10px' }}
      >
        Zadania - moduł 5
      </h1>
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <h3>
                Wybierz zadanie korzystając z paska nawigacji
              </h3>
            </>
          }
        />
        <Route
          path={'/task-1'}
          element={
            <PageWithDialog />
          }
        />
        <Route
          path={'/task-2'}
          element={
            <PageWithSnackbar
              snackbarTimeoutFromProps={2000}
            />
          }
        />
        <Route
          path={'/task-3'}
          element={
            <PageWithNavMenu />
          }
        />
        <Route
          path={'/users'}
          element={
            <PageWithUsersSearch
              selectedUserOnClick={selectedUserOnClick}
            />
          }
        />
        <Route
          path={'/user-details'}
          element={
            <PageWithUserDetails
              user={chosenUser}
              // handleBackToSearch={handleBackToSearch}
            />
          }
        />
      </Routes>

    </>
  )
}

export default App
