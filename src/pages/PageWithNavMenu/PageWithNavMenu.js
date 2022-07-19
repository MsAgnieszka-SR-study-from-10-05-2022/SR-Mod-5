import React from 'react'
import PropTypes from 'prop-types'

import 'pages/PageWithNavMenu/styles.scss'

export const PageWithNavMenu = () => {
  return (
    <>
      <h2>Task 3 - NavMenu</h2>
      <br />
      <h4>Zadanie wykonane - nawigacja na górze strony</h4>
    </>
  )
}

PageWithNavMenu.propTypes = {
  className: PropTypes.string
}

export default PageWithNavMenu
