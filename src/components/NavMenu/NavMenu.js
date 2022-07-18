import React from 'react'
import PropTypes from 'prop-types'

import 'components/NavMenu/styles.scss'

export const NavMenu = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <nav>
      <ul
        className={`menu-links${className ? ` ${className}` : ''}`}
        {...otherProps}
      >
        {children}
      </ul>
    </nav>
  )
}

NavMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavMenu
