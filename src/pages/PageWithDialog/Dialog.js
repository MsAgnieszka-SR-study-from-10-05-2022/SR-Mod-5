import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import 'pages/PageWithDialog/styles.scss'

export const Dialog = (props) => {
  const {
    className,
    isDialogOpen,
    confirmDialogWindow,
    abortDialogWindow,
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
        className={'root-dialog__confirm-btn'}
        onClick={confirmDialogWindow}
        label={'OK'}
      />
      <Button
        className={'root-dialog__abort-btn'}
        onClick={abortDialogWindow}
        label={'Anuluj'}
      />
    </dialog>
  )
}

Dialog.propTypes = {
  className: PropTypes.string,
  isDialogOpen: PropTypes.bool.isRequired,
  confirmDialogWindow: PropTypes.func.isRequired,
  abortDialogWindow: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogInfo: PropTypes.string.isRequired
}

export default Dialog
