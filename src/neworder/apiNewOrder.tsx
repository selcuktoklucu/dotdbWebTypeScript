import { apiUrl } from '../apiConfig'
import axios from 'axios'
import { Credentials, User } from '../shared/types'

export const createOrder = (credentials: Credentials) =>
  fetch(`${apiUrl}/new-order/`, {
    method: 'Post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'ru,en;q=0.9'
    },
    body: JSON.stringify({
      credentials: {
        email: `${credentials.email}`,
        password: `${credentials.password}`,
        password_confirmation: `${credentials.passwordConfirmation}`
      }
    })
  })

export const searchPhone = async (phone: number, user: User) => {
  // const token = SecureStore.getItemAsync('secure_token')
  // console.log('searchByPhone network', user.token)

  // const token = await SecureStore.getItemAsync('secure_token')
  // console.log('apiurl', apiUrl)
  const token = user.token
  const response = await fetch(`${apiUrl}/customers/${phone}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  if (response.status === 200) {
    const responseJson = await response.json()
    return responseJson
  } else {
    return false
  }
}

export const getSuggestions = async (address: string, user: User) => {
  const token = user.token
  const response = await fetch(`${apiUrl}/google-maps-masker/${address}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  if (response.status === 200) {
    const responseJson = await response.json()
    console.log('responseJson', responseJson)
    return responseJson
  } else {
    return false
  }
}

type Data = {
  phoneNumber: number
  address: string
  name: string
}
export const saveTheAddress = async (
  phoneNumber: number,
  address: string,
  name: string,
  user: User
) => {
  const data = {
    phoneNumber,
    address,
    name
  }
  // openMap({ end: this.state.currentAddress, navigate_mode: "navigate" });
  postAddress(data, user)
}

export const postAddress = async (data: Data, user: User) => {
  const token = user.token

  const response = await fetch(`${apiUrl}/customers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
      customer: {
        name: data.name,
        phone: data.phoneNumber,
        currentAddress: data.address
      }
    })
  })

  const responseJson = await response.json()
  console.log(
    'reponse postAddress',
    responseJson,
    'responseCode',
    response.status
  )
  return response.status === 1 ? true : false
}
