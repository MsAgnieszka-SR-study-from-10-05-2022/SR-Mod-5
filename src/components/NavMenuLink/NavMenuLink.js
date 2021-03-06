import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import 'components/NavMenuLink/styles.scss'

export const NavMenuLink = (props) => {
  const {
    className,
    pathTo,
    navLinkLabel,
    ...otherProps
  } = props

  return (
    <li >
      <NavLink
        to={pathTo}
        className={'menu-link-item'}
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        {...otherProps}
      >{navLinkLabel}
      </NavLink>
    </li>
  )
}

NavMenuLink.propTypes = {
  className: PropTypes.string,
  pathTo: PropTypes.string.isRequired,
  navLinkLabel: PropTypes.string.isRequired
}

export default NavMenuLink
