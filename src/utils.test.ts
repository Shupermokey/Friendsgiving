import {describe, it, expect} from "vitest"
import { isEmailValid } from "./utils"


describe("isEmailValid", () => {

  it("isEmailValid('cheese') should return false", () => {
    const result = isEmailValid("cheese")
    expect(result).toBe(false)
  })
  
  it("isEmailValid('jon@jon.com') should return true", () => {
    const result = isEmailValid("jon@jon.com")
    expect(result).toBe(true)
  })
})