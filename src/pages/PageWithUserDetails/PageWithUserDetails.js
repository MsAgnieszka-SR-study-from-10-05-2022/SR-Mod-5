import React from 'react'
import PropTypes from 'prop-types'

import GoBackNavLink from 'components/NavMenuLink'

import styled from 'styled-components'
import colors from 'universal-styles/colors'

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`
const ImageWrapper = styled.div`
  margin: 0 15px
`
const DetailsWrapper = styled.div`
  padding: 0 15px;
  border-left: 2px solid ${colors.mainBrightColor};
  text-align: left
`
const Detail = styled.span`
  font-size: 17px;
  font-weight: bold
`

export const PageWithUserDetails = ({ user }) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    picture,
    username,
    email
  } = user

  return (
    <div style={{ listStyle: 'none' }}>
      <h2>Szczegóły wybranej osoby</h2>
      <UserWrapper>
        <ImageWrapper>
          <img
            src={picture}
            alt={'user-icon'}
            style={{ borderRadius: '50%', boxShadow: `0 0 5px ${colors.mainBrightColor}` }}
          />
        </ImageWrapper>
        <DetailsWrapper>
          <p>Imię: <Detail>{firstName}</Detail></p>
          <p>Nazwisko: <Detail>{lastName}</Detail></p>
          <p>Wiek: <Detail>{age}</Detail></p>
          <p>Płeć: <Detail>{gender === 'female' ? 'kobieta' : 'mężczyzna'}</Detail></p>
          <p>Nazwa użytkownika: <Detail>{username}</Detail></p>
          <p>E-mail: <Detail>{email}</Detail></p>
        </DetailsWrapper>
      </UserWrapper>
      <GoBackNavLink
        style={{ listStyle: 'none' }}
        className={'go-back-link'}
        pathTo={'/users'}
        navLinkLabel={'🔙 Wróć do wyszukiwania'}
      >
      </GoBackNavLink>
    </div>
  )
}

PageWithUserDetails.propTypes = {
  user: PropTypes.object.isRequired
}

export default PageWithUserDetails
