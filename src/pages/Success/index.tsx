import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryManImage from '../../assets/delivery-man.svg'
import { Item, ItemContainer, SuccessContainer, SuccessContent } from './styles'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </ItemContainer>
        </main>
      </SuccessContent>
      <img src={deliveryManImage} alt="" />
    </SuccessContainer>
  )
}
