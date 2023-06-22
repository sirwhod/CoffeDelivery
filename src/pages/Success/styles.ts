import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 30.75rem;
    height: 18rem;
  }
`

export const SuccessContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1.375rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    max-width: 32.875rem;

    border: 2px solid ${(props) => props.theme['purple-dark']};
    /* border-image: linear-gradient(
      to top left,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme['purple-dark']}
    ); */
    border-radius: 6px 36px;
    /* border-image-slice: 1; */
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

const STATUS_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Item = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  border-radius: 1000px;
  color: ${(props) => props.theme.white};
`
