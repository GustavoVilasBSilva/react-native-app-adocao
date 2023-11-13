import { type BreedsArray } from './BreedsType'

export interface AnimalType {
  id: string
  url: string
  width: number
  height: number
  breeds: BreedsArray
}

export type AnimalResponseArray = AnimalType[]
