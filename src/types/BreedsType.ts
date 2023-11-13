export interface BreedsType {
  id: number
  name: string
  life_span: string
  temperament: string
  bred_for?: string
  origin?: string
  height: {
    imperial: number
    metric: number
  }
  weight: {
    imperial: number
    metric: number
  }
}

export type BreedsArray = BreedsType[]
