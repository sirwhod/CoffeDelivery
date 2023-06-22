import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  CheckoutComponent,
  CompleteRegistration,
  HeaderContainer,
  FormAddress,
  FormInput,
  FormPayment,
  ViewOrderContent,
  CoffesOrder,
  CoffeOrder,
  ValueOrder,
  ButtonRemove,
  InputCoffe,
} from './styles'

import coffeImage from '../../assets/coffes/Image-1.png'

export function Checkout() {
  return (
    <CheckoutComponent>
      <CompleteRegistration>
        <h1>Complete seu pedido</h1>
        <FormAddress action="">
          <HeaderContainer>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de entrega</strong>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderContainer>
          <main>
            <FormInput
              inputType="CEP"
              type="number"
              placeholder="CEP"
              id="CEP"
            />
            <FormInput
              inputType="RUA"
              type="text"
              name="address"
              id="address"
              placeholder="Rua"
            />
            <FormInput
              inputType="Numero"
              type="number"
              name="number"
              id="number"
              placeholder="Número"
            />
            <FormInput
              inputType="Complemento"
              type="text"
              id="number"
              placeholder="Complemento"
            />
            <FormInput
              inputType="Bairro"
              type="text"
              name=""
              id=""
              placeholder="Bairro"
            />
            <FormInput
              inputType="Cidade"
              type="text"
              name=""
              id=""
              placeholder="Cidade"
            />
            <FormInput
              inputType="UF"
              type="text"
              name=""
              id=""
              placeholder="UF"
            />
          </main>
        </FormAddress>

        <FormPayment>
          <HeaderContainer>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagaro
              </span>
            </div>
          </HeaderContainer>

          <main>
            <button>
              <CreditCard size={16} />
              Cartão de crédito
            </button>
            <button>
              <Bank size={16} />
              cartão de débito
            </button>
            <button>
              <Money size={16} />
              dinheiro
            </button>
          </main>
        </FormPayment>
      </CompleteRegistration>
      <ViewOrderContent>
        <h1>Cafés selecionados</h1>
        <main>
          <CoffesOrder>
            <CoffeOrder>
              <header>
                <img src={coffeImage} alt="" />
                <div>
                  <span>Expresso Tradicional</span>
                  <footer>
                    <InputCoffe>
                      <button>
                        <Plus weight="bold" size={14} />
                      </button>
                      <input type="number" min={0} max={10} placeholder="0" />
                      <button>
                        <Minus weight="bold" size={14} />
                      </button>
                    </InputCoffe>
                    <ButtonRemove>
                      <Trash size={16} />
                      remover
                    </ButtonRemove>
                  </footer>
                </div>
              </header>
              <strong>R$ 9,90</strong>
            </CoffeOrder>
            <CoffeOrder>
              <header>
                <img src={coffeImage} alt="" />
                <div>
                  <span>Expresso Tradicional</span>
                  <footer>
                    <InputCoffe>
                      <button>
                        <Plus weight="bold" size={14} />
                      </button>
                      <input type="number" min={0} max={10} placeholder="0" />
                      <button>
                        <Minus weight="bold" size={14} />
                      </button>
                    </InputCoffe>
                    <ButtonRemove>
                      <Trash size={16} />
                      remover
                    </ButtonRemove>
                  </footer>
                </div>
              </header>
              <strong>R$ 9,90</strong>
            </CoffeOrder>
          </CoffesOrder>
          <ValueOrder>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </ValueOrder>
          <button>confirmar pedido</button>
        </main>
      </ViewOrderContent>
    </CheckoutComponent>
  )
}
