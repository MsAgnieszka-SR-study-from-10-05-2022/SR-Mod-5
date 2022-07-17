import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import 'pages/PageWithDialog/styles.scss'

export const Snackbar = (props) => {
  const {
    className,
    snackbarInfo,
    handleCloseSnackbar,
    isSnackbarOpen,
    ...otherProps
  } = props

  return (
    <dialog
      className={'task-2-snackbar'}
      open={isSnackbarOpen}
      {...otherProps}
    >
      <div
        className={'task-2-snackbar__content'}
      >
        <p className={'task-2-snackbar__info'}>{snackbarInfo}</p>
        <Button
          className={'task-2-snackbar__close-btn'}
          onClick={handleCloseSnackbar}
          label={'OK'}
        />
      </div>
    </dialog>
  )
}

Snackbar.propTypes = {
  className: PropTypes.string,
  snackbarInfo: PropTypes.string,
  handleCloseSnackbar: PropTypes.func.isRequired,
  isSnackbarOpen: PropTypes.bool.isRequired
}

export default Snackbar
