import capitalize from "../capitalize"

describe("capitalize function", () => {
  test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello")
  })

  test("capitalizes the first letter of a string with mixed case", () => {
    expect(capitalize("hElLo")).toBe("Hello")
  })

  test("capitalizes the first letter of a string with leading spaces", () => {
    expect(capitalize("  hello")).toBe("  Hello")
  })

  test("returns an empty string when input is empty", () => {
    expect(capitalize("")).toBe("")
  })

  test("capitalizes a single character", () => {
    expect(capitalize("a")).toBe("A")
  })

  test("capitalizes a string with all uppercase letters", () => {
    expect(capitalize("HELLO")).toBe("Hello")
  })

  test("capitalizes a string with all lowercase letters", () => {
    expect(capitalize("hello")).toBe("Hello")
  })

  test("capitalizes a string with special characters", () => {
    expect(capitalize("!hello")).toBe("!hello")
  })

  test("capitalizes a string with numbers", () => {
    expect(capitalize("123hello")).toBe("123hello")
  })

  test("capitalizes a string with mixed special characters and letters", () => {
    expect(capitalize("!@#hello")).toBe("!@#hello")
  })

  test("capitalizes a string with mixed numbers and letters", () => {
    expect(capitalize("123hello")).toBe("123hello")
  })
})