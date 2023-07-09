import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
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
  ValueOrder,
  RadioGroupContainer,
  RadioGroupButton,
} from './styles'
import { useContext } from 'react'
import * as z from 'zod'
import { CartCoffesContext } from '../../context/CartCoffesContext'
import { CoffeOrderComponent } from './components/CoffeOrder'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { Navigate } from 'react-router-dom'

const newCheckoutSchema = z.object({
  cep: z.number(),
  road: z.string().nonempty('Por favor preencha com o nome de sua rua!'),
  number: z.number(),
  complement: z.string(),
  district: z.string().nonempty('Por favor preencha com o bairro de sua rua!'),
  city: z.string().nonempty('Por favor preencha com a cidade de sua casa!'),
  uf: z.string().nonempty('Por favor preencha com o UF de sua cidade!'),
  type: z.enum(['credit', 'debit', 'money']),
})

type newCheckoutFormInputs = z.infer<typeof newCheckoutSchema>

export function Checkout() {
  const { coffesOnCart, sendAddress } = useContext(CartCoffesContext)

  const { total, totalItens } = useSummary()

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<newCheckoutFormInputs>({
    resolver: zodResolver(newCheckoutSchema),
  })

  console.log(errors)

  function handleNewCheckout(data: newCheckoutFormInputs) {
    sendAddress(data)
  }

  if (isSubmitSuccessful) {
    return <Navigate to="/success" />
  }

  return (
    <CheckoutComponent>
      <form onSubmit={handleSubmit(handleNewCheckout)}>
        <CompleteRegistration>
          <h1>Complete seu pedido</h1>
          <FormAddress>
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
                min={0}
                maxLength={8}
                minLength={8}
                {...register('cep', { valueAsNumber: true })}
              />
              {errors.cep && <span>{errors.cep.message}</span>}
              <FormInput
                inputType="RUA"
                type="text"
                id="road"
                placeholder="Rua"
                {...register('road')}
              />
              {errors.road && <span>{errors.road.message}</span>}
              <FormInput
                inputType="Numero"
                type="number"
                id="number"
                placeholder="Número"
                {...register('number', { valueAsNumber: true })}
              />
              {errors.number && <span>{errors.number.message}</span>}
              <FormInput
                inputType="Complemento"
                type="text"
                id="number"
                placeholder="Complemento"
                {...register('complement')}
              />
              {errors.complement && <span>{errors.complement.message}</span>}
              <FormInput
                inputType="Bairro"
                type="text"
                id="district"
                placeholder="Bairro"
                {...register('district')}
              />
              {errors.district && <span>{errors.district.message}</span>}
              <FormInput
                inputType="Cidade"
                type="text"
                id="city"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city && <span>{errors.city.message}</span>}
              <FormInput
                inputType="UF"
                type="text"
                id="uf"
                placeholder="UF"
                {...register('uf')}
              />
              {errors.uf && <span>{errors.uf.message}</span>}
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
              <Controller
                control={control}
                name="type"
                render={({ field }) => {
                  return (
                    <RadioGroupContainer
                      onValueChange={(event: 'credit' | 'debit' | 'money') =>
                        field.onChange(event)
                      }
                      value={field.value}
                    >
                      <RadioGroupButton value="credit">
                        <CreditCard size={16} />
                        Cartão de crédito
                      </RadioGroupButton>
                      <RadioGroupButton value="debit">
                        <Bank size={16} />
                        cartão de débito
                      </RadioGroupButton>
                      <RadioGroupButton value="money">
                        <Money size={16} />
                        dinheiro
                      </RadioGroupButton>
                    </RadioGroupContainer>
                  )
                }}
              />
              {errors.type && <span>{errors.type.message}</span>}
            </main>
          </FormPayment>
        </CompleteRegistration>
        <ViewOrderContent>
          <h1>Cafés selecionados</h1>
          <main>
            <CoffesOrder>
              {coffesOnCart.map((coffe) => {
                return (
                  <CoffeOrderComponent
                    key={coffe.coffe.id}
                    coffeOnCart={coffe}
                  />
                )
              })}
            </CoffesOrder>
            <ValueOrder>
              <div>
                <span>Total de itens</span>
                <span>{priceFormatter.format(totalItens)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>{priceFormatter.format(total)}</strong>
              </div>
            </ValueOrder>
            <button type="submit" disabled={isSubmitting}>
              confirmar pedido
            </button>
          </main>
        </ViewOrderContent>
      </form>
    </CheckoutComponent>
  )
}
