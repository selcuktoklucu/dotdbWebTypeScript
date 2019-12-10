export type Alert = {
  message?: string
  color?: string
}

export type User = {
  firstName: string
  lastName: string
}
// export type Credentials = {
//   email: string
//   password: string
// }
export interface Credentials {
  email: string
  password: string
  passwordConfirmation?: string
}
