import eq from "../eq"

describe("eq.js", () => {
  test("should return true for the same object reference", () => {
    const object = { a: 1 }
    expect(eq(object, object)).toBe(true)
  })

  test("should return false for two different objects with the same structure", () => {
    const object = { a: 1 }
    const other = { a: 1 }
    expect(eq(object, other)).toBe(false)
  })

  test("should return true for two identical string primitives", () => {
    expect(eq("a", "a")).toBe(true)
  })

  test("should return false for a string primitive and a string object", () => {
    expect(eq("a", Object("a"))).toBe(false)
  })

  test("should return true for NaN compared to NaN", () => {
    expect(eq(NaN, NaN)).toBe(true)
  })

  test("should return false for a primitive number and a boxed number object", () => {
    expect(eq(1, Object(1))).toBe(false)
  })

  test("should return true for equivalent boolean primitives", () => {
    expect(eq(true, true)).toBe(true)
    expect(eq(false, false)).toBe(true)
  })

  test("should return false for different boolean values", () => {
    expect(eq(true, false)).toBe(false)
  })

  test("should return true for `null` compared to `null`", () => {
    expect(eq(null, null)).toBe(true)
  })

  test("should return true for `undefined` compared to `undefined`", () => {
    expect(eq(undefined, undefined)).toBe(true)
  })

  test("should return false for `null` compared to `undefined`", () => {
    expect(eq(null, undefined)).toBe(false)
  })

  test("should return false for different types of values", () => {
    expect(eq("1", 1)).toBe(false)
    expect(eq(1, true)).toBe(false)
    expect(eq({}, [])).toBe(false)
  })
})
