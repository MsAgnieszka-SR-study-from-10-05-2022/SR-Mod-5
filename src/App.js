import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MenuLinks from 'components/MenuLinks'
import MenuLinkItem from 'components/MenuLinkItem'
import PageWithDialog from 'pages/PageWithDialog'

import './App.scss'

const App = () => {
  return (
    <>
      <div className={'App'}>
        <h1>Zadania - moduł 5</h1>
        <MenuLinks>
          <MenuLinkItem
            pathTo={'/task-1'}
            navLinkLabel={'Task 1'}
          />
          <MenuLinkItem
            pathTo={'/task-2'}
            navLinkLabel={'Task 2'}
          />
          <MenuLinkItem
            pathTo={'/task-3'}
            navLinkLabel={'Task 3'}
          />
          <MenuLinkItem
            pathTo={'/task-4'}
            navLinkLabel={'Task 4'}
          />
          <MenuLinkItem
            pathTo={'/task-5'}
            navLinkLabel={'Task 5'}
          />
        </MenuLinks>
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
        {/* <Route
            path={'/task-2'}
            element={
              <... />
          }
          /> */}
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
