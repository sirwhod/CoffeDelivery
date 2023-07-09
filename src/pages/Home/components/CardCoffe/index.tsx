import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CardCoffe, InputCoffe, TypeCoffe } from './styles'
import { useState, useContext } from 'react'
import { CartCoffesContext, Coffe } from '../../../../context/CartCoffesContext'
import { priceFormatterNumber } from '../../../../utils/formatter'

interface CardCoffeProps {
  coffe: Coffe
}

export function CardCoffes({ coffe }: CardCoffeProps) {
  const { addCoffesOnCart } = useContext(CartCoffesContext)

  const { image, name, type, description, price } = coffe

  const [quantity, setQuantity] = useState(0)

  function handleChangeInput(event: { target: { value: any } }) {
    const newValueQuantity = event.target.value

    setQuantity(newValueQuantity)
  }

  function handlePlus(event: { preventDefault: () => void }) {
    event.preventDefault()

    const newValueQuantity = quantity + 1

    setQuantity(newValueQuantity)
  }

  function handleMinus(event: { preventDefault: () => void }) {
    event.preventDefault()

    const newValueQuantity = quantity - 1

    setQuantity(newValueQuantity)
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()

    const NewCoffe = {
      coffe,
      quantityOnCart: quantity,
      onCart: true,
    }

    addCoffesOnCart(NewCoffe)
  }

  return (
    <CardCoffe>
      <img src={image} alt="" />
      <TypeCoffe>
        {type.map((type) => {
          return <span key={type}>{type}</span>
        })}
      </TypeCoffe>
      <strong>{name}</strong>
      <p>{description}</p>
      <footer>
        <p>
          R$ <strong>{priceFormatterNumber(price)}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <InputCoffe>
            <button onClick={handlePlus}>
              <Plus weight="bold" size={14} />
            </button>
            <input
              type="number"
              min={0}
              max={10}
              placeholder="0"
              onChange={handleChangeInput}
              value={quantity}
            />
            <button onClick={handleMinus}>
              <Minus weight="bold" size={14} />
            </button>
          </InputCoffe>
          <button type="submit">
            <ShoppingCart weight="fill" />
          </button>
        </form>
      </footer>
    </CardCoffe>
  )
}
