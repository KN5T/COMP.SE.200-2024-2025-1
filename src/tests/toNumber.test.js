import toNumber from "../toNumber"

describe("toNumber function", () => {
  test("converts a string to a number", () => {
    expect(toNumber("123")).toBe(123)
  })

  test("converts a string with leading and trailing spaces to a number", () => {
    expect(toNumber("  123  ")).toBe(123)
  })

  test("converts a boolean to a number", () => {
    expect(toNumber(true)).toBe(1)
    expect(toNumber(false)).toBe(0)
  })

  test("converts null to 0", () => {
    expect(toNumber(null)).toBe(0)
  })

  test("converts undefined to NaN", () => {
    expect(toNumber(undefined)).toBeNaN()
  })

  test("converts an object to NaN", () => {
    expect(toNumber({})).toBeNaN()
  })

  test("converts an array to NaN", () => {
    expect(toNumber([1, 2, 3])).toBeNaN()
  })

  test("converts a string representation of a float to a number", () => {
    expect(toNumber("3.2")).toBe(3.2)
  })

  test("converts a string representation of a negative number to a number", () => {
    expect(toNumber("-123")).toBe(-123)
  })

  test("converts a string representation of a hexadecimal number to NaN", () => {
    expect(toNumber("0x1a")).toBeNaN()
  })

  test("converts a binary string to a number", () => {
    expect(toNumber("0b1010")).toBe(10)
  })

  test("converts an octal string to a number", () => {
    expect(toNumber("0o12")).toBe(10)
  })

  test("converts a symbol to NaN", () => {
    expect(toNumber(Symbol("123"))).toBeNaN()
  })

  test("converts an object with a valueOf method to a number", () => {
    const obj = { valueOf: () => 123 }
    expect(toNumber(obj)).toBe(123)
  })

  test("converts an object with a toString method to a number", () => {
    const obj = { toString: () => "123" }
    expect(toNumber(obj)).toBe(123)
  })

  test("converts Infinity to a number", () => {
    expect(toNumber(Infinity)).toBe(Infinity)
  })

  test("converts Number.MIN_VALUE to a number", () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
  })
})