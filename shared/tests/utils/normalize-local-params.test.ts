import { describe, expect, test } from "vitest"
import normalizeLocalParams from "../../utils/normalize-local-params"
describe("normalize-local-params", () => {
	test("returns string as is", () => {
		expect(normalizeLocalParams("test")).toBe("test")
	})

	test("returns first element of array", () => {
		expect(normalizeLocalParams(["test"])).toBe("test")
	})
	test("return first element of array even if array is bigger than 1 element", () => {
		expect(normalizeLocalParams(["test", "test2"])).toBe("test")
	})
	test("not should return something if empty args", () => {
		expect(normalizeLocalParams([])).toBe(undefined)
	})
})
