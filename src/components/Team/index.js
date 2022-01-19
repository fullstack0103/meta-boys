import React from 'react'
import { GradientCard } from '../Shared/GradientCard'

import {
  TeamContainer,
  InnerContainer,
  TitleWrapper,
  Title,
  TeamSloganWrapper,
  TeamMemberContainer,
  TeamMemersList,
  Ellipse
} from './styles'

export const Team = () => {
  const teamUsers = [
    { id: 1, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 2, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 3, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 4, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 5, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 6, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 7, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' },
    { id: 8, name: 'John Doe', position: 'Founder', photo: '/images/team-user-1.png' }
  ]
  return (
    <TeamContainer id='team'>
      <InnerContainer>
        <TitleWrapper>
          <Title>
            <GradientCard />
            <h1>TEAM</h1>
          </Title>
        </TitleWrapper>
        <TeamSloganWrapper>
          <p>
            We have a background in new technologies for over 20 years with several works to its credit on blockchain in 2015, 2016, 2019 and 2021. We generated a total of more than 9 figures in different fields.
          </p>
          <p>
            We are experts in network and digital marketing for more than 10 years.
          </p>
        </TeamSloganWrapper>

        <TeamMemersList>
          {teamUsers.map((user, index) => (
            <TeamMemberContainer key={user.id}>
              <Ellipse
                index={(index + 1) % 8}
              />
              <img src={user.photo} alt='' />
              <div className='info-container'>
                <span className='name'>{user.name}</span>
                <span>{user.position}</span>
              </div>
            </TeamMemberContainer>
          ))}
        </TeamMemersList>
      </InnerContainer>
    </TeamContainer>
  )
}
