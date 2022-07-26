import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'
import { UsersList } from 'components/UsersContainer'
import Input from 'components/Input'

import colors from 'universal-styles/colors'
import styled from 'styled-components'

const UsersContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const SearchingArea = styled.div`
  display: flex;
  align-items: center;
`
const InfoMessage = styled.p`
  margin-top: 25px;
  color: ${colors.mainDarkColor};
  font-weight: bold;
`

export const UsersContainer = ({ selectedUserOnClick }) => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)
  const [valueFromInput, setValueFromInput] = React.useState('')

  const inputRef = React.useRef()

  const handleFetchDataFunction = async () => {
    setIsLoading(() => true)
    await fetch('users.json')
      .then((r) => r.json())
      .then((responseData) => setData(responseData.users))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(() => false))
  }

  const handleInputFocus = () => {
    setTimeout(() => {
      inputRef.current.focus()
    }, 1000)
  }

  React.useEffect(() => {
    handleFetchDataFunction()
    handleInputFocus()
  }, [])

  const handleKeyDown = (e) => {
    if (data !== [] && e.key === 'Enter') {
      setValueFromInput(e.target.value)
    }
  }

  const filteredUsers = data.filter((user) => {
    if (valueFromInput) {
      return user.firstName.toUpperCase().includes(valueFromInput.toUpperCase()) || user.lastName.toUpperCase().includes(valueFromInput.toUpperCase())
    }
    return user
  })

  const handleReset = () => {
    setValueFromInput(() => '')
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <UsersContainerWrapper>
      {
        hasError ?
          <InfoMessage>Powstał błąd podczas pobierania danych</InfoMessage>
          :
          isLoading ?
            <InfoMessage>Ładowanie danych...</InfoMessage>
            :
            <>
              <SearchingArea >
                <Input
                  label={'Wyszukaj użytkownika:'}
                  inputRef={inputRef}
                  handleKeyDown={handleKeyDown}
                  placeholder={'Po wpisaniu naciśnij \'Enter\''}
                />
                <Button
                  onClick={handleReset}
                  label={'Reset'}
                />
              </SearchingArea>
              {
                filteredUsers.length === 0 ?
                  <InfoMessage>
                    Nie znaleziono szukanego użytkownika
                  </InfoMessage>
                  :
                  <UsersList
                    data={filteredUsers}
                    selectedUserOnClick={selectedUserOnClick}
                  />
              }
            </>
      }
    </UsersContainerWrapper>
  )
}

UsersContainer.propTypes = {
  selectedUserOnClick: PropTypes.func.isRequired
}

export default UsersContainer
