import map from "../map.js"

describe("map function", () => {
  test("applies the iteratee to each element in the array", () => {
    const array = [1, 2, 3]
    const square = (n) => n * n
    expect(map(array, square)).toEqual([1, 4, 9])
  })

  test("handles an empty array gracefully", () => {
    const array = []
    const iteratee = (n) => n * 2
    expect(map(array, iteratee)).toEqual([])
  })

  test("works with various data types in the array", () => {
    const array = [1, "a", true, null]
    const iteratee = (value) => (value === null ? "null" : typeof value)
    expect(map(array, iteratee)).toEqual([
      "number",
      "string",
      "boolean",
      "null",
    ])
  })

  test("handles null or undefined input as an empty array", () => {
    const iteratee = (n) => n
    expect(map(null, iteratee)).toEqual([])
    expect(map(undefined, iteratee)).toEqual([])
  })

  test("handles functions as elements in the array", () => {
    const array = [() => 1, () => 2]
    const iteratee = (fn) => fn()
    expect(map(array, iteratee)).toEqual([1, 2])
  })

  test("returns a new array and does not mutate the original array", () => {
    const array = [1, 2, 3]
    const iteratee = (n) => n + 1
    const result = map(array, iteratee)
    expect(result).toEqual([2, 3, 4])
    expect(array).toEqual([1, 2, 3])
  })
})
