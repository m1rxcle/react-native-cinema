import { userDetailsSchema } from "@/shared/schemas/user-details-schema"
import { describe, expect, test } from "vitest"

describe("user-details-schema", () => {
	test("accept valid user details", () => {
		const result = userDetailsSchema.safeParse({
			firstName: "Dmitriy",
			lastName: "Gorbachev",
			middleName: "Vladimirovich",
			phone: "89212632799",
			city: "Moscow",
			email: "Gf9yT@example.com",
		})
		expect(result.success).toBe(true)
	})
	test("reject invalid user details", () => {
		const result = userDetailsSchema.safeParse({
			firstName: "",
			lastName: "Gorbachev",
			middleName: "Vladimirovich",
			phone: "89212632799",
			city: "Moscow",
			email: "Gf9yT@example.com",
		})
		expect(result.success).toBe(false)
	})
	test("reject empty user details", () => {
		const result = userDetailsSchema.safeParse({
			firstName: "",
			lastName: "",
			middleName: "",
			phone: "",
			city: "",
			email: "@example.com",
		})
		expect(result.success).toBe(false)
	})
	test("reject different type", () => {
		const result = userDetailsSchema.safeParse({
			firstName: "",
			lastName: "Gorbachev",
			middleName: "Vladimirovich",
			phone: 123213213,
			city: "Moscow",
			email: "Gf9yT@example.com",
		})
		expect(result.success).toBe(false)
	})
})
