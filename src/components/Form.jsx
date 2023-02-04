import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useTelegram } from '../hooks/useTelegram';

export const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить'
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  const StyledFormContainer = styled('div')`
    & {
      margin: auto;
      width: 30%;
    }
  `

  const StyledForm = styled('form')`
    & {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
    }
  `

  const StyledTitle = styled('h3')`
    & {
        text-align: center;
    }
  `

  const StyledInput = styled('input')`
    & {
        border-radius: 7px;
        padding: 10px;
        outline: none;
        border: 1px solid var(--tg-theme-text-color);
    }
  `

  const StyledSelect = styled('select')`
    & {
        border-radius: 7px;
        padding: 10px;
        outline: none;
        border: 1px solid var(--tg-theme-text-color);
    }
  `

  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledTitle>Введите данные</StyledTitle>
        <StyledInput
          type="text"
          placeholder={'Страна'}
          value={country}
          onChange={onChangeCountry}
        />
        <StyledInput
          type="text"
          placeholder={'Улица'}
          value={street}
          onChange={onChangeStreet}
        />
        <StyledSelect value={subject} onChange={onChangeSubject}>
          <option value={'legal'}>Физ. лицо</option>
          <option value={'legal'}>Юр. лицо</option>
        </StyledSelect>
      </StyledForm>
    </StyledFormContainer>
  )
}