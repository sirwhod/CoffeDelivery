import { CurrencyDollar, MapPin, Timer, Star } from 'phosphor-react'
import deliveryManImage from '../../assets/delivery-man.svg'
import {
  Item,
  ItemContainer,
  StarContainer,
  SuccessContainer,
  SuccessContent,
} from './styles'
import { useContext } from 'react'
import { CartCoffesContext } from '../../context/CartCoffesContext'

export function Success() {
  const { addressPurchese, coffesOnCart } = useContext(CartCoffesContext)

  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o seu pedido chegará até você!</span>

        <main>
          <span>Itens comprados:</span>

          {coffesOnCart.map((item) => {
            if (item.onCart === true) {
              return (
                <ItemContainer key={item.coffe.id}>
                  <Item statusColor="white">
                    <img src={item.coffe.image} alt="" />
                  </Item>
                  <div>
                    <span>{item.coffe.name}</span>
                    <strong>{`Quantidade: ${item.quantityOnCart}`}</strong>
                  </div>
                </ItemContainer>
              )
            } else {
              return null
            }
          })}

          <StarContainer>
            <span>Avalie o seu pedido:</span>
            <div>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
            </div>
          </StarContainer>

          <span>Dados do pedido:</span>
          <ItemContainer>
            <Item statusColor="purple">
              <MapPin weight="fill" />
            </Item>
            <div>
              <span>
                Entrega em{' '}
                <strong>{`${addressPurchese?.road}, ${addressPurchese?.number}`}</strong>
              </span>
              <span>{`${addressPurchese?.district} - ${addressPurchese?.city}, ${addressPurchese?.uf}`}</span>
            </div>
          </ItemContainer>
          <ItemContainer>
            <Item statusColor="yellow">
              <Timer weight="fill" />
            </Item>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </ItemContainer>
          <ItemContainer>
            <Item statusColor="yellowDark">
              <CurrencyDollar />
            </Item>
            <div>
              <span>Pagamento na entrega</span>
              <strong>
                {addressPurchese?.type === 'credit'
                  ? 'Crédito'
                  : addressPurchese?.type === 'debit'
                  ? 'Débito'
                  : 'Dinheiro'}
              </strong>
            </div>
          </ItemContainer>
        </main>
      </SuccessContent>
      <img src={deliveryManImage} alt="" />
    </SuccessContainer>
  )
}
