import React, { useState, useEffect } from 'react'
// import { History } from 'history'
import { useHistory } from 'react-router-dom'

//import { signIn } from '../api'
import { Credentials, User } from '../../shared/types'
import Button from 'react-bootstrap/Button'
import { searchPhone, getSuggestions, saveTheAddress } from '../apiNewOrder'
import { AlertProps } from 'react-bootstrap/Alert'

type Props = {
  user: User
  alerts: Array<any>
  setAlerts: any
}
type Suggestion = {
  description: string
  id: string
}

const NewOrder: React.FC<Props> = props => {
  const [phoneNumber, setPhoneNumber] = useState()
  const [address, setAddress] = useState()

  const [name, setName] = useState()
  const [orderTotal, setOrderTotal] = useState()
  const [date, setDate] = useState()
  const [suggestions, setSuggestions] = useState()

  const cleanFields = () => {
    setPhoneNumber('')
    setAddress('')
    setName('')
    setOrderTotal('')
    setDate('')
    setSuggestions('')
  }

  useEffect(() => {
    async function fetchMyApi() {
      if (phoneNumber && phoneNumber.length === 10) {
        const response = await searchPhone(phoneNumber, props.user)
        if (response) {
          setAddress(response.customer.currentAddress)
        } else {
          props.setAlerts([
            ...props.alerts,
            {
              title: 'Address not found! Please create one',
              variant: 'success'
            }
          ])
        }
      }
    }
    fetchMyApi()
  }, [phoneNumber])

  useEffect(() => {
    async function fetchForSuggestedAddresses() {
      if (address && address.length > 4) {
        const response = await getSuggestions(address, props.user)
        if (response === false) {
          props.setAlerts([
            ...props.alerts,
            {
              title:
                'getSuggestions failed. Please change the input and try again',
              variant: 'danger'
            }
          ])
        }
        console.log('retrieved addresses', response.response)
        const responseArr = response.response
        setSuggestions([...responseArr])
      }
    }
    fetchForSuggestedAddresses()
  }, [address])

  //localStorage.getItem('token', data)
  return (
    <div className="col-md-6 m-auto py-3">
      <form className="auth-form" onSubmit={() => console.log('heyo')}>
        <h3>Add new order</h3>
        <label htmlFor="number">Phone Number</label>
        <input
          required
          name="phoneNumber"
          value={phoneNumber}
          type="tel"
          placeholder="6172827141"
          maxLength={10}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="text">Address</label>

        <input
          required
          name="Address"
          value={address}
          type="text"
          placeholder="566 Columbia Rd"
          onChange={e => setAddress(e.target.value)}
        />
        <label htmlFor="text">Name</label>

        <input
          name="name"
          value={name}
          type="text"
          placeholder="Big Papa"
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="number">Order Total</label>

        <input
          name="orderTotal"
          value={orderTotal}
          type="number"
          placeholder="Optional"
          onChange={e => setOrderTotal(e.target.value)}
        />
        <label htmlFor="email">Date</label>

        <input
          name="date"
          value={date}
          type="date"
          placeholder="Optional"
          onChange={e => setDate(e.target.value)}
        />

        {suggestions &&
          suggestions.length > 0 &&
          suggestions.map((suggestion: Suggestion, key: number) => (
            <Button
              variant="primary"
              key={key}
              type="button"
              onClick={() => {
                saveTheAddress(
                  phoneNumber,
                  suggestion.description,
                  name,
                  props.user
                )
                cleanFields()
              }}
            >
              {suggestion.description}
            </Button>
          ))}
      </form>
    </div>
  )
}
export default NewOrder
