import reduce from "../reduce"

describe("reduce function", () => {
  const cart = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 150 },
  ]

  test("calculates the total price of products in the cart", () => {
    const total = reduce(cart, (sum, product) => sum + product.price, 0)
    expect(total).toBe(450)
  })

  test("returns the initial value for an empty cart", () => {
    const total = reduce([], (sum, product) => sum + product.price, 0)
    expect(total).toBe(0)
  })

  test("handles a cart with a single product", () => {
    const total = reduce([{ name: "Product 1", price: 100 }], (sum, product) => sum + product.price, 0)
    expect(total).toBe(100)
  })

  test("reduces an array of numbers to their sum", () => {
    const numbers = [1, 2, 3, 4, 5]
    const sum = reduce(numbers, (acc, num) => acc + num, 0)
    expect(sum).toBe(15)
  })

  test("reduces an array of numbers to their product", () => {
    const numbers = [1, 2, 3, 4, 5]
    const product = reduce(numbers, (acc, num) => acc * num, 1)
    expect(product).toBe(120)
  })

  test("reduces an object to a concatenated string of its values", () => {
    const obj = { a: "hello", b: "world", c: "!" }
    const result = reduce(obj, (acc, value) => acc + value, "")
    expect(result).toBe("helloworld!")
  })

  test("reduces an array of objects to a single object", () => {
    const objects = [{ a: 1 }, { b: 2 }, { c: 3 }]
    const result = reduce(objects, (acc, obj) => Object.assign(acc, obj), {})
    expect(result).toEqual({ a: 1, b: 2, c: 3 })
  })

  test("reduces an array of arrays to a single array", () => {
    const arrays = [[1, 2], [3, 4], [5, 6]]
    const result = reduce(arrays, (acc, arr) => acc.concat(arr), [])
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
})