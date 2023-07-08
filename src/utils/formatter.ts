export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const priceFormatterNumber = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const formattedValue = formatter.format(value)

  const numberValue = formattedValue.replace(/[^\d.,]/g, '')

  return numberValue
}
