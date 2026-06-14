import { generateTicketNumber } from "@/shared/utils/generate-ticket-number"
import { describe, expect, test } from "vitest"

describe("generate-ticket-number", () => {
	test("number length is 6", () => {
		expect(generateTicketNumber()).toHaveLength(6)
	})
	test("number is string", () => {
		expect(generateTicketNumber()).toBeTypeOf("string")
	})
})
