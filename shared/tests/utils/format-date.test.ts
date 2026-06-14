import { formatDate } from "@/shared/utils/format-date"
import { describe, expect, test } from "vitest"

describe("format-date", () => {
	test("returns formatted date", () => {
		expect(formatDate("01.01.2001")).toBe("пн, 1 янв.")
	})
	test("return invalid date if date is empty", () => {
		expect(formatDate("")).toBe("Invalid Date")
	})
	test("return invalid date if date is not full", () => {
		expect(formatDate("01.01")).toBe("Invalid Date")
	})
})
