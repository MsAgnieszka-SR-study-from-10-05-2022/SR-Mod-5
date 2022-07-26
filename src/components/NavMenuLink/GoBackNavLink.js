import React from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import 'components/NavMenuLink/styles.scss'

export const GoBackNavLink = (props) => {
  const {
    className,
    pathTo,
    navLinkLabel,
    ...otherProps
  } = props

  return (
    <NavLink
      className={className}
      to={pathTo}

      style={{ textDecoration: 'none' }}
      {...otherProps}
    >
      {navLinkLabel}
    </NavLink>
  )
}

GoBackNavLink.propTypes = {
  className: PropTypes.string,
  pathTo: PropTypes.string.isRequired,
  navLinkLabel: PropTypes.string.isRequired
}

export default GoBackNavLink
