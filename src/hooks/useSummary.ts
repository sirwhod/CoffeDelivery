import { useContext } from 'react'
import { CartCoffesContext } from '../context/CartCoffesContext'

export function useSummary() {
  const { coffesOnCart } = useContext(CartCoffesContext)

  const summary = coffesOnCart.reduce(
    (acc, coffes) => {
      if (coffes.onCart === true) {
        acc.totalItens += coffes.coffe.price * coffes.quantityOnCart
      }
      acc.total = acc.totalItens + 3.5
      return acc
    },
    {
      totalItens: 0,
      total: 3.5,
    },
  )

  return summary
}
