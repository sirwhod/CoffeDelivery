import styled from 'styled-components'

export const CardCoffe = styled.div`
  max-width: 16rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: calc(-1.25rem - 20px);
    width: 7.5rem;
    height: 7.5rem;
  }

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    max-width: 13.5rem;

    color: ${(props) => props.theme['base-label']};
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    p {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      text-align: right;

      color: ${(props) => props.theme['base-text']};

      strong {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
      }
    }

    form {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      button[type='submit'] {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        gap: 0.5rem;

        /* Brand/Purple Dark */

        background: ${(props) => props.theme['purple-dark']};
        border: none;
        border-radius: 6px;

        color: ${(props) => props.theme.white};

        cursor: pointer;

        &:hover {
          background: ${(props) => props.theme.purple};
        }
      }
    }
  }
`

export const TypeCoffe = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
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
