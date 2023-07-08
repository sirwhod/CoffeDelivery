import { MapPin, ShoppingCart } from 'phosphor-react'
import logoTipoCoffeDelivery from '../../assets/logotipo-coffe-delivery.svg'

import { HeaderContainer, HeaderContent, LocaleContainer } from './styles'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartCoffesContext } from '../../context/CartCoffesContext'

export function Header() {
  const { coffesOnCart } = useContext(CartCoffesContext)

  const summary = coffesOnCart.reduce(
    (acc, coffe) => {
      if (coffe.onCart === true) {
        acc.total += coffe.quantityOnCart
      }
      return acc
    },
    {
      total: 0,
    },
  )

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoTipoCoffeDelivery} alt="" />
        </NavLink>
        <nav>
          <LocaleContainer>
            <MapPin weight="fill" size={22} />
            <p>Rio de Janeiro, RJ</p>
          </LocaleContainer>
          <NavLink to="/checkout" title="Carrinho">
            <span>{summary.total}</span>
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
