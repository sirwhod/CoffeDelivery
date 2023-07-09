import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { Router } from './Router'
import { CartCoffesContextProvider } from './context/CartCoffesContext'

export function App() {
  // const [theme, setTheme] = useState(defaultTheme)

  // function handleThemeChange() {
  //   if (theme === defaultTheme) {
  //     setTheme(darkTheme)
  //   } else {
  //     setTheme(defaultTheme)
  //   }
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartCoffesContextProvider>
          <Router />
        </CartCoffesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
