import { useTabBarStore } from "@/shared/store/tab-bar.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("tab-bar-store", () => {
	beforeEach(() => {
		useTabBarStore.setState({
			hidden: false,
		})
	})

	test("has initial state", () => {
		const state = useTabBarStore.getState()

		expect(state.hidden).toBe(false)
	})

	test("setHidden update state", () => {
		useTabBarStore.getState().setHidden(true)

		expect(useTabBarStore.getState().hidden).toBeTruthy()
	})
})
