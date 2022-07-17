import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import 'pages/PageWithDialog/styles.scss'

export const Dialog = (props) => {
  const {
    className,
    isDialogOpen,
    closeDialogWindow,
    dialogTitle,
    dialogInfo,
    ...otherProps
  } = props

  return (
    <dialog
      className={'root-dialog'}
      open={isDialogOpen}
      {...otherProps}
    >
      <h2 className={'root-dialog__title'}>{dialogTitle}</h2>
      <p className={'root-dialog__info'}>{dialogInfo}</p>
      <Button
        className={'root-dialog__close-btn'}
        onClick={closeDialogWindow}
        label={'Zamknij okno'}
      />
    </dialog>
  )
}

Dialog.propTypes = {
  className: PropTypes.string,
  isDialogOpen: PropTypes.bool.isRequired,
  closeDialogWindow: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogInfo: PropTypes.string.isRequired
}

export default Dialog
