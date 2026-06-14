import { OptCodeSchema } from "@/shared/schemas/code-schema"
import { describe, expect, test } from "vitest"

describe("code-schema", () => {
	test("accept valid code", () => {
		const result = OptCodeSchema.safeParse({
			code: "000000",
		})
		expect(result.success).toBe(true)
	})
	test("reject invalid code", () => {
		const result = OptCodeSchema.safeParse({
			code: "00000",
		})
		expect(result.success).toBe(false)
	})
	test("reject empty code", () => {
		const result = OptCodeSchema.safeParse({
			code: "",
		})
		expect(result.success).toBe(false)
	})
	test("reject different type", () => {
		const result = OptCodeSchema.safeParse({
			code: 123,
		})
		expect(result.success).toBe(false)
	})
})
