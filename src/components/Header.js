import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledHeader = styled.div`
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;
    color: ${props => props.theme.secondaryColor};
    text-shadow: ${props => props.theme.dropShadow};
    padding-top: 1%;

`

export default function Header(){
    return(
        <StyledHeader className='Title'>
            <h1>NASA Pic Of The Day </h1>
        </StyledHeader>
    )
}