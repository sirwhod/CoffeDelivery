import { ReactNode, createContext, useEffect, useState } from 'react'

import coffeImage1 from '../assets/coffes/Image.png'
import coffeImage2 from '../assets/coffes/Image-1.png'
import coffeImage3 from '../assets/coffes/Image-2.png'
import coffeImage4 from '../assets/coffes/Image-3.png'
import coffeImage5 from '../assets/coffes/Image-4.png'
import coffeImage6 from '../assets/coffes/Image-5.png'
import coffeImage7 from '../assets/coffes/Image-6.png'
import coffeImage8 from '../assets/coffes/Image-7.png'
import coffeImage9 from '../assets/coffes/Image-8.png'
import coffeImage10 from '../assets/coffes/Image-9.png'
import coffeImage11 from '../assets/coffes/Image-10.png'
import coffeImage12 from '../assets/coffes/Image-11.png'
import coffeImage13 from '../assets/coffes/Image-12.png'
import coffeImage14 from '../assets/coffes/Image-13.png'

export interface Coffe {
  id: string
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

interface CoffeOnCart {
  coffe: Coffe
  quantityOnCart: number
  onCart: boolean
}

interface CartCoffesContextType {
  coffes: Coffe[]
  coffesOnCart: CoffeOnCart[]
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

  useEffect(() => {
    const coffesList = [
      {
        id: 'asidghasiudghasiudasdas',
        image: coffeImage1,
        type: ['Tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudasd',
        image: coffeImage2,
        type: ['Tradicional'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudafasv',
        image: coffeImage3,
        type: ['Tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudvasfas',
        image: coffeImage4,
        type: ['Tradicional', 'Gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudasfaw',
        image: coffeImage5,
        type: ['Tradicional', 'Com Leite'],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudawdaw',
        image: coffeImage6,
        type: ['Tradicional', 'Com leite'],
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudwffq',
        image: coffeImage7,
        type: ['Tradicional', 'Com Leite'],
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudqwfqwf',
        image: coffeImage8,
        type: ['Tradicional', 'com leite'],
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudfwqwfqwgv',
        image: coffeImage9,
        type: ['Tradicional', 'Com Leite'],
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudqwfvqfgqw',
        image: coffeImage10,
        type: ['Especial', 'Com Leite'],
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudcqwfqwfqw',
        image: coffeImage11,
        type: ['Especial', 'Alcoólico', 'Gelado'],
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudfqwfqwf',
        image: coffeImage12,
        type: ['Especial'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudqwfqwfqw',
        image: coffeImage13,
        type: ['Especial'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
      },
      {
        id: 'asidghasiudghasiudfqwfqw',
        image: coffeImage14,
        type: ['Especial', 'Alcoólico'],
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
      },
    ]

    setCoffes(coffesList)
  }, [])

  return (
    <CartCoffesContext.Provider value={{ coffes, coffesOnCart }}>
      {children}
    </CartCoffesContext.Provider>
  )
}
