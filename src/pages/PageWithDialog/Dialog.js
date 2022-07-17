import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import 'pages/PageWithDialog/styles.scss'

export const Dialog = (props) => {
  const {
    className,
    isDialogOpen,
    handleConfirmDialogWindow,
    handleAbortDialogWindow,
    dialogTitle,
    dialogInfo,
    ...otherProps
  } = props

  return (
    <dialog
      className={'task-1-dialog'}
      open={isDialogOpen}
      {...otherProps}
    >
      <h2 className={'task-1-dialog__title'}>{dialogTitle}</h2>
      <p className={'task-1-dialog__info'}>{dialogInfo}</p>
      <Button
        className={'task-1-dialog__confirm-btn'}
        onClick={handleConfirmDialogWindow}
        label={'OK'}
      />
      <Button
        className={'task-1-dialog__abort-btn'}
        onClick={handleAbortDialogWindow}
        label={'Anuluj'}
      />
    </dialog>
  )
}

Dialog.propTypes = {
  className: PropTypes.string,
  isDialogOpen: PropTypes.bool.isRequired,
  handleConfirmDialogWindow: PropTypes.func.isRequired,
  handleAbortDialogWindow: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogInfo: PropTypes.string.isRequired
}

export default Dialog
