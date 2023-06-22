import { styled } from 'styled-components'

import backgroundImage from '../../assets/background.svg'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6.25rem 10rem;
  gap: 3.5rem;

  background-image: url(${backgroundImage});

  img {
    width: 20rem;
    height: 16rem;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    /* or 62px */

    /* Base/Title */

    color: ${(props) => props.theme['base-title']};
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    /* or 26px */

    /* Base/Subtitle */

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const ItemsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
  gap: 1.25rem;

  width: 36rem;
`

const STATUS_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Item = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 2rem;
    height: 2rem;

    /* Brand / Yellow Dark */

    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
    border-radius: 1000px;
    color: ${(props) => props.theme.white};
  }
`

export const CoffesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3.375rem;
  padding: 2rem 0;
`

export const CoffesContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`
