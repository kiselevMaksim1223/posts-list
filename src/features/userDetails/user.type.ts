type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type UserType = {
  id: number | null
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: Company
}
