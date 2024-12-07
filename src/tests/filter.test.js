import filter from "../filter"

describe("filter.js", () => {
  test("filters elements based on a simple condition", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ]
    const result = filter(users, ({ active }) => active)
    console.log("result", result)
    expect(result).toEqual([{ user: "barney", active: true }])
  })

  test("returns an empty array if no elements match the condition", () => {
    const numbers = [1, 2, 3, 4]
    const result = filter(numbers, (num) => num > 10)
    expect(result).toEqual([])
  })

  test("handles an empty array gracefully", () => {
    const result = filter([], (val) => val)
    expect(result).toEqual([])
  })

  test("handles null or undefined array input", () => {
    expect(filter(null, (val) => val)).toEqual([])
    expect(filter(undefined, (val) => val)).toEqual([])
  })

  test("filters elements when predicate depends on the index", () => {
    const numbers = [0, 1, 2, 3, 4]
    const result = filter(numbers, (val, index) => index % 2 === 0)
    expect(result).toEqual([0, 2, 4])
  })

  test("filters elements when predicate depends on the array", () => {
    const numbers = [1, 2, 3, 4, 5]
    const result = filter(numbers, (val, index, arr) => val > arr.length / 2)
    expect(result).toEqual([3, 4, 5])
  })

  test("works with various types of values in the array", () => {
    const mixedArray = [0, "string", false, {}, [], null, undefined]
    const result = filter(
      mixedArray,
      (val) => typeof val === "object" && val !== null
    )
    expect(result).toEqual([{}, []])
  })
})
