import toString from "../toString"

describe("toString function", () => {
  test("converts a number to a string", () => {
    expect(toString(123)).toBe("123")
  })

  test("converts an array to a string", () => {
    expect(toString([1, 2, 3])).toBe("1,2,3")
  })

  test("converts an object to a string", () => {
    expect(toString({ a: 1, b: 2 })).toBe("[object Object]")
  })

  test("returns an empty string for null or undefined", () => {
    expect(toString(null)).toBe("")
    expect(toString(undefined)).toBe("")
  })

  test("converts a boolean to a string", () => {
    expect(toString(true)).toBe("true")
    expect(toString(false)).toBe("false")
  })

  test("converts a symbol to a string", () => {
    expect(toString(Symbol("symbol"))).toBe("Symbol(symbol)")
  })

  test("converts a date to a string", () => {
    const date = new Date("2023-01-01T00:00:00Z")
    expect(toString(date)).toBe(date.toString())
  })

  test("converts a function to a string", () => {
    const func = function() { return "test" }
    expect(toString(func)).toBe(func.toString())
  })

  test("converts an array with null and undefined to a string", () => {
    expect(toString([1, null, 3, undefined])).toBe("1,,3,")
  })

  test("converts a negative zero to a string", () => {
    expect(toString(-0)).toBe("-0")
  })

  test("converts Infinity to a string", () => {
    expect(toString(Infinity)).toBe("Infinity")
    expect(toString(-Infinity)).toBe("-Infinity")
  })

  test("converts NaN to a string", () => {
    expect(toString(NaN)).toBe("NaN")
  })
})