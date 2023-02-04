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
    }
`

const Button = ({ onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
    />
  )
}

export default Button
