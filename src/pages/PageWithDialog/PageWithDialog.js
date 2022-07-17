import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'
import { Dialog } from 'pages/PageWithDialog'

import 'pages/PageWithDialog/styles.scss'

export const PageWithDialog = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const openDialogWindow = () => {
    setIsDialogOpen(() => true)
  }

  const handleConfirmDialogWindow = () => {
    setIsDialogOpen(() => false)
    console.log('Kliknięto w przycisk \'OK\'')
  }

  const handleAbortDialogWindow = () => {
    setIsDialogOpen(() => false)
    console.log('Kliknięto w przycisk \'Anuluj\'')
  }

  return (
    <>
      <h2>Task 1 - Okno dialogowe</h2>
      <div
        className={'task-1'}
        {...otherProps}
      >
        <Button
          onClick={openDialogWindow}
          label={'Otwórz okno Dialog'}
        />
        <Dialog
          isDialogOpen={isDialogOpen}
          handleConfirmDialogWindow={handleConfirmDialogWindow}
          handleAbortDialogWindow={handleAbortDialogWindow}
          dialogTitle={'Nazwa okna'}
          dialogInfo={'Informacja: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        >
          {children}
        </Dialog>
      </div>
    </>
  )
}

PageWithDialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default PageWithDialog
