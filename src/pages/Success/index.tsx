import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryManImage from '../../assets/delivery-man.svg'
import { Item, ItemContainer, SuccessContainer, SuccessContent } from './styles'
import { useContext } from 'react'
import { CartCoffesContext } from '../../context/CartCoffesContext'

export function Success() {
  const { addressPurchese } = useContext(CartCoffesContext)

  console.log(addressPurchese)
  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <main>
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
