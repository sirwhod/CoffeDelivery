import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;

    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      width: 2.375rem;
      height: 2.375rem;

      background: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;
      color: ${(props) => props.theme['yellow-dark']};

      span {
        position: absolute;
        margin-bottom: 2rem;
        margin-left: 1.5rem;

        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 0.75rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;

        padding: 0.3rem;
        border-radius: 1000px;

        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme['yellow-dark']};
      }

      &:hover {
        background: ${(props) => props.theme.purple};
        color: ${(props) => props.theme.white};
        transition: all 0.3s;
        span {
          background-color: ${(props) => props.theme['purple-dark']};
          transition: all 0.3s;
        }
      }
    }
  }
`

export const HeaderContent = styled.div`
  max-width: 69.875rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    width: 80px;

    img {
      width: 100%;
    }
  }
`

export const LocaleContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  height: 2.375rem;

  /* Brand/Purple Light */

  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  color: ${(props) => props.theme.purple};

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    /* or 18px */

    /* Brand/Purple Dark */

    color: ${(props) => props.theme['purple-dark']};
  }
`
