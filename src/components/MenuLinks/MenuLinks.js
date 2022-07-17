import React from 'react'
import PropTypes from 'prop-types'

import 'components/MenuLinks/styles.scss'

export const MenuLink = (props) => {
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

MenuLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default MenuLink
