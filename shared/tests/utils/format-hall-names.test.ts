import { formatHallName } from "@/shared/utils/format-hall-names"
import { describe, expect, test } from "vitest"

describe("format-hall-names", () => {
	test("returns formatted red hall", () => {
		expect(formatHallName("Red")).toBe("Красный зал")
	})
	test("returns formatted blue hall", () => {
		expect(formatHallName("Blue")).toBe("Синий зал")
	})
	test("returns formatted red hall", () => {
		expect(formatHallName("Green")).toBe("Зеленый зал")
	})
	test("return purple hall if hall name is not red, blue or green", () => {
		expect(formatHallName("NotEvenOneOfNames")).toBe("Фиолетовый зал")
	})
})
