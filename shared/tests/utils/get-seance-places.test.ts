import { getSeanceHall } from "@/shared/utils/get-seance-places"
import { describe, expect, test } from "vitest"

describe("get-seance-places", () => {
	test("returns hall when seanceId matches", () => {
		const schedule = [{ date: "2024-01-01", seances: [{ time: "10:00", hall: { name: "Red" } }] }] as any

		const seanceId = "2024-01-01-Red-10:00"

		const result = getSeanceHall(schedule, seanceId)

		expect(result).toEqual({ name: "Red" })
	})
	test("return undefined if seanceId not match", () => {
		const schedule = [{ date: "2024-01-01", seances: [{ time: "10:00", hall: { name: "Red" } }] }] as any

		const seanceId = "123"

		const result = getSeanceHall(schedule, seanceId)

		expect(result).toBeUndefined()
	})
	test("works with multiple schedules", () => {
		const schedule = [
			{ date: "2024-01-01", seances: [{ time: "10:00", hall: { name: "Red" } }] },
			{ date: "2024-01-02", seances: [{ time: "10:00", hall: { name: "Blue" } }] },
		] as any

		const seanceId = "2024-01-01-Red-10:00"

		const result = getSeanceHall(schedule, seanceId)

		expect(result).toEqual({ name: "Red" })
	})
	test("if schedule is empty return undefined", () => {
		expect(getSeanceHall([], "123")).toBeUndefined()
	})
})
