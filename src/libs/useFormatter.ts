import { type BreedsType, type BreedsArray } from '../types/BreedsType'

interface FormatterProps {
  listBreedsName: (breeds: BreedsArray) => string
  primaryItem: (breeds: BreedsArray) => BreedsType
}

export const useFormatter = (): FormatterProps => ({
  primaryItem: (breeds) => {
    return breeds[0]
  },
  listBreedsName: (breeds) => {
    let text = ''
    breeds.forEach((item, index) => {
      if (index === 0) {
        text += item.name
      } else if (index === breeds.length - 1) {
        text += `e ${item.name}`
      } else {
        text += `, ${item.name}`
      }
    })

    if (text === '') {
      text = 'Não tem nome'
    }

    return text
  }
})
