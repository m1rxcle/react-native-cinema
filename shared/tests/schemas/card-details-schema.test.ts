import { cardDetailsSchema } from "@/shared/schemas/card-details-schema"
import { describe, expect, test } from "vitest"

describe("card-details-schema", () => {
	test("accept valid card details", () => {
		const result = cardDetailsSchema.safeParse({
			cardNumber: "5555555555555555",
			month: "12",
			year: "30",
			cvv: "111",
		})
		expect(result.success).toBe(true)
	})
	test("reject invalid card number", () => {
		const result = cardDetailsSchema.safeParse({
			cardNumber: "5555555", // not 16 digits
			month: "12",
			year: "30",
			cvv: "111",
		})
		expect(result.success).toBe(false)
	})

	test("reject invalid month", () => {
		const result = cardDetailsSchema.safeParse({
			cardNumber: "5555555555555555",
			month: "23", // not between 1 and 12
			year: "30",
			cvv: "111",
		})
		expect(result.success).toBe(false)
	})
	test("reject missing fields", () => {
		const result = cardDetailsSchema.safeParse({
			cardNumber: "",
			month: "",
			year: "",
			cvv: "",
		})
		expect(result.success).toBe(false)
	})
	test("reject wrong types", () => {
		const result = cardDetailsSchema.safeParse({
			cardNumber: 123,
			month: "23",
			year: 32,
			cvv: 23,
		})
		expect(result.success).toBe(false)
	})
})
