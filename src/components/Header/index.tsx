import { MapPin, ShoppingCart } from 'phosphor-react'
import logoTipoCoffeDelivery from '../../assets/logotipo-coffe-delivery.svg'

import { HeaderContainer, LocaleContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTipoCoffeDelivery} alt="" />
      <nav>
        <LocaleContainer>
          <MapPin weight="fill" size={22} />
          <p>Rio de Janeiro, RJ</p>
        </LocaleContainer>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
