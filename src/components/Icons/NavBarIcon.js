import React from 'react'

import 'components/Icons/styles.scss'

export const NavBarIcon = (props) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    viewBox={'0 0 448 512'}
    width={'1em'}
    height={'1em'}
    className={'navbar-icon'}
    {...props}
  >
    <path d={'M0 96c0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm0 160c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm416 192H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32z'} />
  </svg>
)

export default NavBarIcon
