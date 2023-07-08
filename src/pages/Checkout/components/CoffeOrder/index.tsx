import { Minus, Plus, Trash } from 'phosphor-react'
import { ButtonRemove, CoffeOrder, InputCoffe } from './styled'
import {
  CartCoffesContext,
  CoffeOnCart,
} from '../../../../context/CartCoffesContext'
import { useContext } from 'react'
import { priceFormatter } from '../../../../utils/formatter'

interface CoffeOrderComponentProps {
  coffeOnCart: CoffeOnCart
}

export function CoffeOrderComponent({ coffeOnCart }: CoffeOrderComponentProps) {
  const { removeQuantityCoffe, addQuantityCoffe, removeCoffeOfCart } =
    useContext(CartCoffesContext)

  function handleRemoveQuantity() {
    removeQuantityCoffe(coffeOnCart.coffe.id)
  }

  function handleAddQuantity() {
    addQuantityCoffe(coffeOnCart.coffe.id)
  }

  function handleRemoveCoffe() {
    removeCoffeOfCart(coffeOnCart.coffe.id)
  }

  return (
    <CoffeOrder>
      <header>
        <img src={coffeOnCart.coffe.image} alt="" />
        <div>
          <span>{coffeOnCart.coffe.name}</span>
          <footer>
            <InputCoffe>
              <button type="button" onClick={handleAddQuantity}>
                <Plus weight="bold" size={14} />
              </button>
              <input
                type="number"
                min={0}
                max={10}
                placeholder="0"
                value={coffeOnCart.quantityOnCart}
              />
              <button type="button" onClick={handleRemoveQuantity}>
                <Minus weight="bold" size={14} />
              </button>
            </InputCoffe>
            <ButtonRemove onClick={handleRemoveCoffe}>
              <Trash size={16} />
              remover
            </ButtonRemove>
          </footer>
        </div>
      </header>
      <strong>{priceFormatter.format(coffeOnCart.coffe.price)}</strong>
    </CoffeOrder>
  )
}
