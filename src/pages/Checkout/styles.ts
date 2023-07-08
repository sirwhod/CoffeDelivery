import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px;
    gap: 2px;

    strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      /* or 18px */

      display: flex;
      align-items: center;

      /* Base/Text */

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const CompleteRegistration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 40rem;
  gap: 0.75rem;

  h1 {
    /* Title/Title XS */

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    /* or 23px */

    display: flex;
    align-items: center;

    /* Base/Subtitle */

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 100%;

  /* Base/Card */

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0px;
    gap: 0.75rem;
  }
`

const BaseInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;
  height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &&:focus {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
    outline: none;
    box-shadow: none;
  }
`

const TYPE_INPUT = {
  CEP: '12.5rem',
  RUA: '35rem',
  Numero: '12.5rem',
  Complemento: '21.75rem',
  Bairro: '12.5rem',
  Cidade: '17.25rem',
  UF: '3.75rem',
} as const

interface InputProps {
  inputType: keyof typeof TYPE_INPUT
}

export const FormInput = styled(BaseInput)<InputProps>`
  width: ${(props) => TYPE_INPUT[props.inputType]};
`

export const FormPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 100%;

  /* Base/Card */

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  main {
    button {
      .selected {
        /* Brand/Purple Light */

        background: ${(props) => props.theme['purple-light']};
        /* Brand/Purple */

        border: 1px solid ${(props) => props.theme.purple};
      }
    }
  }
`

export const RadioGroupContainer = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  width: 100%;
`

export const RadioGroupButton = styled(RadioGroup.Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.125rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.purple};
  }

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    width: 11.125rem;
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const ViewOrderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 1.5rem;

    min-width: 28rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;

    > button[type='submit'] {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.75rem 0.5rem;
      gap: 0.25rem;

      width: 100%;

      /* Brand / Yellow */

      background: ${(props) => props.theme.yellow};
      border-radius: 6px;
      border: none;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 160%;
      text-transform: uppercase;

      color: ${(props) => props.theme.white};
      font-stretch: 100;

      cursor: pointer;
      transition: all 0.3s;

      &:not(:disabled):hover {
        background: ${(props) => props.theme['yellow-dark']};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
    }
  }
`

export const CoffesOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`

export const ValueOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 0.75rem;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      display: flex;
      align-items: center;
      text-align: right;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      display: flex;
      align-items: center;
      text-align: right;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
