import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'
import { Dialog } from 'pages/PageWithDialog'

import 'pages/PageWithDialog/styles.scss'
// import colors from 'universal-styles/colors'

export const PageWithDialog = (props) => {
  const {
    children,
    ...otherProps
  } = props

  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const openDialogWindow = () => {
    setIsDialogOpen(() => true)
  }
  const closeDialogWindow = () => {
    setIsDialogOpen(() => false)
  }

  return (
    <div
      className={'root'}
      {...otherProps}
    >
      <Button
        onClick={openDialogWindow}
        label={'Otwórz okno Dialog'}
      />
      <Dialog
        isDialogOpen={isDialogOpen}
        closeDialogWindow={closeDialogWindow}
        dialogTitle={'Nazwa okna'}
        dialogInfo={'Informacja: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
      >
        {children}
      </Dialog>
    </div>
  )
}

PageWithDialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default PageWithDialog
