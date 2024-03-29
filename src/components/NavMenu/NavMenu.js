import React from 'react'
import PropTypes from 'prop-types'

import NavMenuLink from 'components/NavMenuLink'
import Button from 'components/Button'
import { NavBarIcon, ExitIcon, HomeIcon } from 'components/Icons'

import 'components/NavMenu/styles.scss'

export const NavMenu = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  const navRef = React.useRef()

  const handleToggleNavMenu = () => {
    navRef.current.classList.toggle('show-navbar')
  }

  return (
    <>
      <nav
        ref={navRef}
      >
        <ul
          className={`menu-links${className ? ` ${className}` : ''}`}
          {...otherProps}
        >
          <NavMenuLink
            pathTo={'/'}
            navLinkLabel={<HomeIcon />}
            style={{ fontSize: '18px' }}
          />
          <NavMenuLink
            pathTo={'/task-1'}
            navLinkLabel={'Task 1'}
            className={'menu-link-item'}
          />
          <NavMenuLink
            pathTo={'/task-2'}
            navLinkLabel={'Task 2'}
            className={'menu-link-item'}
          />
          <NavMenuLink
            pathTo={'/task-3'}
            navLinkLabel={'Task 3'}
            className={'menu-link-item'}
          />
          <NavMenuLink
            pathTo={'/users'}
            navLinkLabel={'Task 4 + 5'}
            className={'menu-link-item'}
          />
        </ul>
        <Button
          label={<ExitIcon />}
          onClick={handleToggleNavMenu}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'rgb(19, 21, 26)',
            fontSize: '22px',
            border: 'none',
            backgroundColor: 'transparent'
          }}
        />
      </nav>
      <Button
        label={<NavBarIcon />}
        onClick={handleToggleNavMenu}
        style={{
          display: 'flex',
          marginTop: '20px',
          fontSize: '20px',
          border: 'none',
          boxShadow: '0px 0px 4px rgb(19, 21, 26)'
        }}
      />
    </>
  )
}

NavMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavMenu
