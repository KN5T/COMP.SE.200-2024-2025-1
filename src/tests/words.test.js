import words from "../words.js"

describe("words function", () => {
  test("splits a basic ASCII string into words", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ])
  })

  test("splits a string with custom pattern", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual([
      "fred",
      "barney",
      "&",
      "pebbles",
    ])
  })

  test("handles an empty string", () => {
    expect(words("")).toEqual([])
  })

  test("handles strings with no recognizable words", () => {
    expect(words("!@#$%^&*()")).toEqual([])
  })

  test("splits a string containing Unicode words", () => {
    expect(words("mañana café")).toEqual(["mañana", "café"])
    expect(words("hello 你好")).toEqual(["hello", "你好"])
  })

  test("handles numbers in a string", () => {
    expect(words("123 456")).toEqual(["123", "456"])
    expect(words("word123 word456")).toEqual(["word123", "word456"])
  })

  test("splits a string with mixed-case words", () => {
    expect(words("camelCaseString")).toEqual(["camel", "Case", "String"])
    expect(words("PascalCaseString")).toEqual(["Pascal", "Case", "String"])
  })

  test("splits snake_case strings", () => {
    expect(words("snake_case_test")).toEqual(["snake", "case", "test"])
  })

  test("splits kebab-case strings", () => {
    expect(words("kebab-case-test")).toEqual(["kebab", "case", "test"])
  })

  test("handles strings with multiple spaces", () => {
    expect(words("   spaced   out    words   ")).toEqual([
      "spaced",
      "out",
      "words",
    ])
  })

  test("returns an empty array for null or undefined input", () => {
    expect(words(null)).toEqual([])
    expect(words(undefined)).toEqual([])
  })

  test("handles strings with special characters", () => {
    expect(words("hello-world! #1 $test")).toEqual([
      "hello",
      "world",
      "1",
      "test",
    ])
  })

  test("works with a pattern that matches all characters", () => {
    expect(words("hello-world! #1 $test", /.+/g)).toEqual([
      "hello-world! #1 $test",
    ])
  })
})
