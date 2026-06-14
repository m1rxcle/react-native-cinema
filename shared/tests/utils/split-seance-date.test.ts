import { splitSeanceDate } from "@/shared/utils/split-seance-date"
import { describe, expect, test } from "vitest"

const seanceDate = "01.01.2001-Red-12:00"

describe("split-seance-date", () => {
	test("return object with date, hall and time", () => {
		const result = splitSeanceDate(seanceDate)

		expect(result).toEqual({
			date: "1 января",
			hall: "Красный зал",
			time: "12:00",
		})
	})
	test("return undefined  if seanceDate is empty", () => {
		const result = splitSeanceDate("")

		expect(result).toBeUndefined()
	})
	test("returns undefined for invalid format", () => {
		const result = splitSeanceDate("invalid")

		expect(result).toBe("Invalid seance")
	})
})
