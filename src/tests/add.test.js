import add from "../add"

describe("add function", () => {
  test("adds two positive numbers", () => {
    expect(add(1, 2)).toBe(3)
  })

  test("adds positive and negative numbers", () => {
    expect(add(1, -2)).toBe(-1)
  })

  test("adds two negative numbers", () => {
    expect(add(-1, -2)).toBe(-3)
  })

  test("adds zero and a number", () => {
    expect(add(0, 5)).toBe(5)
  })

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000)
  })

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBe(4)
  })

  test("adds a number and a string representation of a number", () => {
    expect(add(5, "10")).toBe(15)
  })

  test("adds a string representation of a number and a number", () => {
    expect(add("10", 5)).toBe(15)
  })

  test("adds two string representations of numbers", () => {
    expect(add("10", "5")).toBe(15)
  })

  test("adds a number and NaN", () => {
    expect(add(5, NaN)).toBeNaN()
  })

  test("adds NaN and a number", () => {
    expect(add(NaN, 5)).toBeNaN()
  })

  test("adds two NaN values", () => {
    expect(add(NaN, NaN)).toBeNaN()
  })
})