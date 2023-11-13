/* eslint-disable @typescript-eslint/no-for-in-array */
import axios, { type AxiosResponse } from 'axios'

import AllowedEmails from '../config/allowed-emails'

import { type AnimalType, type AnimalResponseArray } from '../types/AnimalType'

interface ReturnApi {
  getAllAnimalsByUrl: (
    url: string,
    key: string
  ) => Promise<AxiosResponse<AnimalResponseArray>>
  getAnimalById: (
    url: string,
    key: string,
    id: string
  ) => Promise<AxiosResponse<AnimalType>>
  authEmail: (email: string) => boolean
}

export const useApi = (): ReturnApi => ({
  getAllAnimalsByUrl: async (url, key) => {
    return await axios.get(
      url + 'v1/images/search?limit=10&order=DESC&has_breeds=true&size=med',
      {
        headers: { 'x-api-key': key }
      }
    )
  },
  getAnimalById: async (url, key, id) => {
    return await axios.get(url + 'v1/images/' + id + '?size=med', {
      headers: { 'x-api-key': key }
    })
  },
  authEmail: (email: string) => {
    if (AllowedEmails.find((item) => item.email === email) != null) {
      return true
    } else {
      return false
    }
  }
})
