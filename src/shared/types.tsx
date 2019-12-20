export type Alert = {
  message?: string
  color?: string
}

export type User = {
  email: string
  token: string
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
