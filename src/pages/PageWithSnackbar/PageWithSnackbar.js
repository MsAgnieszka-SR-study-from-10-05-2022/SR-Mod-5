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

  const handleCloseSnackbarAfterTimeout = React.useCallback(() => {
    setTimeout(() => {
      setIsSnackbarOpen(() => false)
    }, snackbarTimeout)
  }, [snackbarTimeout])

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(() => false)
    console.log('Zamknięto snackbar przyciskiem')
  }

  const handleOpenSnackbarWindow = React.useCallback(() => {
    setIsSnackbarOpen(() => true)
  }, [])

  React.useEffect(() => {
    if (isSnackbarOpen === true) {
      handleCloseSnackbarAfterTimeout()
    }
  }, [handleCloseSnackbarAfterTimeout, isSnackbarOpen])

  return (
    <>
      <h2>Task 2 - Snackbar</h2>
      <div
        className={'task-2'}
        {...otherProps}
      >
        <Button
          onClick={handleOpenSnackbarWindow}
          label={'Otwórz Snackbar'}
        />
        <Snackbar
          handleCloseSnackbar={handleCloseSnackbar}
          snackbarInfo={'To jest szary Snackbar'}
          isSnackbarOpen={isSnackbarOpen}
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
