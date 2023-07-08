import styled from 'styled-components'

export const CoffeOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 0.5rem;

      > span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        display: flex;
        align-items: center;

        color: ${(props) => props.theme['base-subtitle']};
      }

      > footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 8px;
      }
    }
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: none;

  height: 2rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  transition: all 0.3s;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const InputCoffe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  max-width: 4.5rem;

  /* Base/Button */

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.purple};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input[type='number'] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: none;
    max-width: 1.25rem;

    &&::-webkit-inner-spin-button,
    &&::-webkit-outer-spin-button {
      -moz-appearance: textfield; /* Firefox */
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
