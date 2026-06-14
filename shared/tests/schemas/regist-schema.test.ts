import { RegisterSchema } from "@/shared/schemas/register-schema"
import { describe, expect, test } from "vitest"

describe("register-schema", () => {
	test("accept valid phones", () => {
		const result = RegisterSchema.safeParse({
			phone: "89212632799",
		})

		expect(result.success).toBe(true)
	})
	test("reject short phones", () => {
		const result = RegisterSchema.safeParse({
			phone: "123",
		})

		expect(result.success).toBe(false)
	})
	test("reject symbols", () => {
		const result = RegisterSchema.safeParse({
			phone: "A./zx.as;qw",
		})

		expect(result.success).toBe(false)
	})
	test("reject missing fields", () => {
		const result = RegisterSchema.safeParse({
			phone: "",
		})

		expect(result.success).toBe(false)
	})

	test("reject wrong types", () => {
		const result = RegisterSchema.safeParse({
			phone: 123,
		})

		expect(result.success).toBe(false)
	})
})
