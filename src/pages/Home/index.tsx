import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import brandCoffeImage from '../../assets/coffe-brand-coffe-delivery.png'

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
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <ItemsContainer>
            <Item statusColor={'yellowDark'}>
              <div>
                <ShoppingCart weight="fill" size={22} />
              </div>
              <p>Compra simples e segura</p>
            </Item>
            <Item statusColor={'baseText'}>
              <div>
                <Package weight="fill" size={22} />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item statusColor={'yellow'}>
              <div>
                <Timer weight="fill" size={22} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item statusColor={'purple'}>
              <div>
                <Coffee weight="fill" size={22} />
              </div>
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsContainer>
        </InfosContainer>
        <img src={brandCoffeImage} alt="" />
      </IntroContainer>
      <CoffesContainer>
        <h1>Nossos cafés</h1>
        <CoffesContent>
          {coffes.map((coffe) => {
            return <CardCoffes key={coffe.id} coffe={coffe} />
          })}
        </CoffesContent>
      </CoffesContainer>
    </>
  )
}
