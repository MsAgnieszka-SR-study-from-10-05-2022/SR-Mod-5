import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'
import { Snackbar } from 'pages/PageWithSnackbar'

import 'pages/PageWithSnackbar/styles.scss'

export const PageWithSnackbar = (props) => {
  const {
    children,
    snackbarTimeoutFromProps,
    ...otherProps
  } = props

  const snackbarTimeout = snackbarTimeoutFromProps || 5000

  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false)

  const handleOpenSnackbar = React.useCallback(() => {
    setIsSnackbarOpen(() => true)
  }, [])

  const handleCloseSnackbar = React.useCallback(() => {
    setIsSnackbarOpen(() => false)
  }, [])

  const handleCloseSnackbarAfterTimeout = React.useCallback(() => {
    setTimeout(() => {
      handleCloseSnackbar()
    }, snackbarTimeout)
  }, [handleCloseSnackbar, snackbarTimeout])

  React.useEffect(() => {
    if (isSnackbarOpen) {
      handleCloseSnackbarAfterTimeout()
    }

    return () => clearTimeout(handleCloseSnackbarAfterTimeout)
  }, [handleCloseSnackbarAfterTimeout, isSnackbarOpen])

  return (
    <>
      <h2>Task 2 - Snackbar</h2>
      <div
        className={'task-2'}
        {...otherProps}
      >
        <Button
          onClick={handleOpenSnackbar}
          label={'Otwórz Snackbar'}
        />
        <Snackbar
          handleCloseSnackbar={handleCloseSnackbar}
          snackbarInfo={'To jest szary Snackbar'}
          isSnackbarOpen={isSnackbarOpen}
          // If you want to change Snackbar position pick one of proposal and add it as a className props
          // You can choose: 'top-left' or 'bottom-center' or 'center-of-site'
          className={'bottom-center'}
        >
          {children}
        </Snackbar>
      </div>
    </>
  )
}

PageWithSnackbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  snackbarTimeoutFromProps: PropTypes.number
}

export default PageWithSnackbar
