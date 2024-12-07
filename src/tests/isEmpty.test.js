import isEmpty from "../isEmpty"

describe("isEmpty function", () => {
  test("returns true for null or undefined", () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  test("returns true for boolean values", () => {
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
  })

  test("returns true for numbers", () => {
    expect(isEmpty(0)).toBe(true)
    expect(isEmpty(1)).toBe(true)
    expect(isEmpty(-1)).toBe(true)
    expect(isEmpty(NaN)).toBe(true)
    expect(isEmpty(Infinity)).toBe(true)
  })

  test("returns true for an empty string", () => {
    expect(isEmpty("")).toBe(true)
  })

  test("returns false for a non-empty string", () => {
    expect(isEmpty("abc")).toBe(false)
    expect(isEmpty(" ")).toBe(false)
  })

  test("returns true for empty arrays", () => {
    expect(isEmpty([])).toBe(true)
  })

  test("returns false for non-empty arrays", () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  test("returns true for empty objects", () => {
    expect(isEmpty({})).toBe(true)
  })

  test("returns false for non-empty objects", () => {
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty(Object.create({}))).toBe(true)
  })

  test("returns true for empty maps and sets", () => {
    expect(isEmpty(new Map())).toBe(true)
    expect(isEmpty(new Set())).toBe(true)
  })

  test("returns false for non-empty maps and sets", () => {
    const map = new Map()
    map.set("key", "value")
    expect(isEmpty(map)).toBe(false)

    const set = new Set()
    set.add(1)
    expect(isEmpty(set)).toBe(false)
  })

  test("returns true for empty buffers", () => {
    const buffer = Buffer.alloc(0)
    expect(isEmpty(buffer)).toBe(true)
  })

  test("returns false for non-empty buffers", () => {
    const buffer = Buffer.from("test")
    expect(isEmpty(buffer)).toBe(false)
  })
})
