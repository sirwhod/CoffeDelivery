import { ShoppingCart, Timer } from 'phosphor-react'

import brandKitchenKonect from '../../assets/brand--Konectkitchen.svg'

import {
  IntroContainer,
  InfosContainer,
  ItemsContainer,
  Item,
  CoffesContainer,
  CoffesContent,
} from './styles'

import { CardCoffes } from './components/CardCoffe'
import { useContext } from 'react'
import { CartCoffesContext } from '../../context/CartCoffesContext'

export function Home() {
  const { coffes } = useContext(CartCoffesContext)

  return (
    <>
      <IntroContainer>
        <InfosContainer>
          <h1>Encontre pratos perfeitos para qualquer hora do dia.</h1>
          <h3>
            Com o Kitchen Konect você come pratos incríveis e avalia eles.
          </h3>
          <ItemsContainer>
            <Item statusColor={'yellowDark'}>
              <div>
                <ShoppingCart weight="fill" size={22} />
              </div>
              <p>Compra simples e segura</p>
            </Item>
            <Item statusColor={'yellow'}>
              <div>
                <Timer weight="fill" size={22} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </Item>
          </ItemsContainer>
        </InfosContainer>
        <img src={brandKitchenKonect} alt="" />
      </IntroContainer>
      <CoffesContainer>
        <h1>Nossos pratos</h1>
        <CoffesContent>
          {coffes.map((coffe) => {
            return <CardCoffes key={coffe.id} coffe={coffe} />
          })}
        </CoffesContent>
      </CoffesContainer>
    </>
  )
}
