import { ReactNode, createContext, useEffect, useState } from 'react'

import artesanalHamburguer from '../assets/food/artesanal-hamburguer.png'
import artesanalHamburguerComplet from '../assets/food/artesanal-hamburguer-complet.png'
import artesanalHamburguerWithBacon from '../assets/food/artesanal-hamburguer-with-bacon.png'
import pizzaCalabresa from '../assets/food/calabresa.png'
import pizzaChickenWithCatupiry from '../assets/food/frango-com-catupiry.png'
import pizzaMussarela from '../assets/food/MILHO-VERDE-COM-MUCARELA-OU-CATUPIRY-MILHO-VERDE-COBERTA-COM-MUCARELA-OU-CATUPIRY-2048x1957.webp'
import chickenStrogonoff from '../assets/food/chicken-stroganoff-rice-potato-straw-png.png'
import penneBolognese from '../assets/food/penne-bolognese-with-parmesan-cheese-png.png'
import penneWithWhiteSauce from '../assets/food/penne-with-white-sauce-png.png'
import pratoFeito from '../assets/food/pratocontrahome.png'
import crazyPotato from '../assets/food/crazy-potato.jpg'

export interface Coffe {
  id: string
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

export interface CoffeOnCart {
  coffe: Coffe
  quantityOnCart: number
  onCart: boolean
}

export interface addressPurchese {
  cep: number
  road: string
  number: number
  complement: string
  district: string
  city: string
  uf: string
  type: 'credit' | 'debit' | 'money'
}

interface CartCoffesContextType {
  coffes: Coffe[]
  coffesOnCart: CoffeOnCart[]
  addressPurchese: addressPurchese | undefined
  addCoffesOnCart: (newCoffe: CoffeOnCart) => void
  removeCoffeOfCart: (id: string) => void
  removeQuantityCoffe: (id: string) => void
  addQuantityCoffe: (id: string) => void
  sendAddress: (data: addressPurchese) => void
}

interface CartCoffesContextProviderProps {
  children: ReactNode
}

export const CartCoffesContext = createContext({} as CartCoffesContextType)

export function CartCoffesContextProvider({
  children,
}: CartCoffesContextProviderProps) {
  const [coffes, setCoffes] = useState<Coffe[]>([])
  const [coffesOnCart, setCoffesOnCart] = useState<CoffeOnCart[]>([])
  const [addressPurchese, setAddressPurchese] = useState<addressPurchese>()

  useEffect(() => {
    const coffesList = [
      {
        id: 'asidghasiudghasiudasdas',
        image: artesanalHamburguer,
        type: ['Hamburguer'],
        name: 'Hamburguer Artesanal',
        description: 'O Hamburguer Artesanal mais gostoso da cidade!',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudasdasds',
        image: artesanalHamburguerComplet,
        type: ['Hamburguer'],
        name: 'Hamburguer Artesanal Completo',
        description:
          'O Hamburguer Artesanal que você já conhece, mas agora completo!',
        price: 19.9,
      },
      {
        id: 'asidghasiudghasiudasdasasdas',
        image: artesanalHamburguerWithBacon,
        type: ['Hamburguer'],
        name: 'Hamburguer Artesanal com Bacon',
        description: 'O Hamburguer Artesanal para os amantes de bacon!',
        price: 29.9,
      },
      {
        id: 'asidghasiudghasiudaasdasdsdas',
        image: pizzaCalabresa,
        type: ['Pizza'],
        name: 'Pizza de Calabresa',
        description: 'Se delicie com a melhor pizza de calabresa da cidade!',
        price: 49.9,
      },
      {
        id: 'asidghasiudghasiudaasasdasdsdasdsdas',
        image: pizzaChickenWithCatupiry,
        type: ['Pizza'],
        name: 'Pizza de frango com Catupiry',
        description:
          'Se delicie com a melhor pizza de frango com Catupiry da cidade!',
        price: 49.9,
      },
      {
        id: 'asidghasiudasdasghasiudaasdasdsdas',
        image: pizzaMussarela,
        type: ['Pizza'],
        name: 'Pizza de Mussarela',
        description: 'Se delicie com a melhor pizza de Mussarela da cidade!',
        price: 49.9,
      },
      {
        id: 'asidghasiudasdasghasiudaasdasdsdas',
        image: chickenStrogonoff,
        type: ['Prato feito'],
        name: 'Strogonoff de frango',
        description: 'Se delicie com o melhor Strogonoff de frango da cidade!',
        price: 12.9,
      },
      {
        id: 'asidghasiudasdasghasiudaasdasasdasdsdas',
        image: penneBolognese,
        type: ['Prato feito'],
        name: 'Macarrão a Bolanhesa',
        description: 'Se delicie com o melhor Macarrão a Bolanhesa da cidade!',
        price: 19.9,
      },
      {
        id: 'asidghasiudasdasghasiudasdasdaasdasdsdas',
        image: penneWithWhiteSauce,
        type: ['Prato feito'],
        name: 'Macarrão ao Molho branco',
        description:
          'Se delicie com o melhor Macarrão ao Molho branco da cidade!',
        price: 19.9,
      },
      {
        id: 'asidghasiudasdasghasiudaasdaasdfassdsdas',
        image: pratoFeito,
        type: ['Prato feito'],
        name: 'Prato feito',
        description: 'Se delicie com o melhor Prato feito da cidade!',
        price: 24.9,
      },
      {
        id: 'asidghasiudasdasghasiudaasdadsafsdsdsdas',
        image: crazyPotato,
        type: ['Acompanhamentos'],
        name: 'Batata Maluca',
        description: 'Se delicie com a melhor Batata Maluca da cidade!',
        price: 19.9,
      },
    ]

    setCoffes(coffesList)
  }, [])

  function addCoffesOnCart(newCoffe: CoffeOnCart) {
    setCoffesOnCart((state) => [newCoffe, ...state])
  }

  function removeQuantityCoffe(id: string) {
    setCoffesOnCart((coffesOnCart: CoffeOnCart[]) => {
      return coffesOnCart.map((coffeOnCart) => {
        if (coffeOnCart.coffe.id === id) {
          return {
            ...coffeOnCart,
            quantityOnCart: coffeOnCart.quantityOnCart - 1,
          }
        }
        return coffeOnCart
      })
    })
  }

  function addQuantityCoffe(id: string) {
    setCoffesOnCart((coffesOnCart: CoffeOnCart[]) => {
      return coffesOnCart.map((coffeOnCart) => {
        if (coffeOnCart.coffe.id === id) {
          return {
            ...coffeOnCart,
            quantityOnCart: coffeOnCart.quantityOnCart + 1,
          }
        }
        return coffeOnCart
      })
    })
  }

  function removeCoffeOfCart(id: string) {
    setCoffesOnCart((coffesOnCart: CoffeOnCart[]) => {
      return coffesOnCart.filter((coffeOnCart) => coffeOnCart.coffe.id !== id)
    })
  }

  function sendAddress(data: addressPurchese) {
    setAddressPurchese(data)
  }

  return (
    <CartCoffesContext.Provider
      value={{
        coffes,
        coffesOnCart,
        addressPurchese,
        addCoffesOnCart,
        removeCoffeOfCart,
        removeQuantityCoffe,
        addQuantityCoffe,
        sendAddress,
      }}
    >
      {children}
    </CartCoffesContext.Provider>
  )
}
