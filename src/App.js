import React from 'react'

import { Routes, Route } from 'react-router-dom'

import NavMenu from 'components/NavMenu'
import NavMenuLink from 'components/NavMenuLink'
import PageWithDialog from 'pages/PageWithDialog'
import PageWithSnackbar from 'pages/PageWithSnackbar'

import './App.scss'

const App = () => {
  return (
    <>
      <div className={'App'}>
        <h1>Zadania - moduł 5</h1>
        <NavMenu>
          <NavMenuLink
            pathTo={'/task-1'}
            navLinkLabel={'Task 1'}
          />
          <NavMenuLink
            pathTo={'/task-2'}
            navLinkLabel={'Task 2'}
          />
          <NavMenuLink
            pathTo={'/task-3'}
            navLinkLabel={'Task 3'}
          />
          <NavMenuLink
            pathTo={'/task-4'}
            navLinkLabel={'Task 4'}
          />
          <NavMenuLink
            pathTo={'/task-5'}
            navLinkLabel={'Task 5'}
          />
        </NavMenu>
      </div>
      <Routes>
        <Route
          path={'/'}
          element={
            <h3>
              ⬆️ Wybierz zadanie ⬆️
            </h3>
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
        {/* <Route
            path={'/task-3'}
            element={
              <... />
          }
          /> */}
        {/* <Route
            path={'/task-4'}
            element={
              <... />
          }
          /> */}
        {/* <Route
            path={'/task-5'}
            element={
              <... />
          }
          /> */}
      </Routes>

    </>
  )
}

export default App
