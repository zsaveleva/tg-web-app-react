import React from 'react'
import styled from 'styled-components'

const StyledButton = styled('button')`
    & {
        padding: 10px 15px;
        background: var(--tg-theme-button-color);
        color: var(--tg-theme-text-color);
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 7px;
    }
`

const Button = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
