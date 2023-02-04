import React from 'react'
import styled from 'styled-components'
import { useTelegram } from '../hooks/useTelegram'
import Button from './Button'

const StyledHeader = styled('header')`
    & {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 20px;
    }
`

const StyledUserName = styled('span')`
    & {
        margin-left: auto;
    }
`

export const Header = () => {
    const { user, onClose } = useTelegram()

    return (
        <StyledHeader>
            <Button onClick={onClose}>Закрыть</Button>
            <StyledUserName>
                {user?.usename}
            </StyledUserName>
        </StyledHeader>
    )
}

