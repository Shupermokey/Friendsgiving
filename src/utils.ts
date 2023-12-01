import { Person } from "./Types"


export const isEmailValid = (input: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return new RegExp(emailRegex).test(input)
}

export const sendEmails = (groupEmails: Person[]) => {
  console.log(groupEmails);
  
}