import { useSeanceStore } from "@/shared/store/seance.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("seance-store", () => {
	beforeEach(() => {
		useSeanceStore.setState({
			seanceId: "",
			activeSeance: "",
		})
	})

	test("has initial state", () => {
		const state = useSeanceStore.getState()

		expect(state.seanceId).toBe("")
		expect(state.activeSeance).toBe("")
	})

	test("setSeanceId update state", () => {
		useSeanceStore.getState().setSeanceId("1")

		expect(useSeanceStore.getState().seanceId).toEqual("1")
	})

	test("setActiveSeance update state", () => {
		useSeanceStore.getState().setActiveSeance("active-seance")

		expect(useSeanceStore.getState().activeSeance).toEqual("active-seance")
	})
})
