import { useAuthStore } from "@/shared/store/auth.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("auth-store", () => {
	beforeEach(() => {
		useAuthStore.setState({
			phone: "",
			code: "",
		})
	})

	test("has initial state", () => {
		const state = useAuthStore.getState()

		expect(state.phone).toBe("")
		expect(state.code).toBe("")
	})

	test("setPhone update phone", () => {
		useAuthStore.getState().setPhone("89212632799")

		expect(useAuthStore.getState().phone).toBe("89212632799")
	})

	test("setCode update code", () => {
		useAuthStore.getState().setCode("000000")

		expect(useAuthStore.getState().code).toBe("000000")
	})

	test("setPhone does not affect code", () => {
		useAuthStore.getState().setPhone("89212632799")
		useAuthStore.getState().setCode("000000")

		const state = useAuthStore.getState()

		expect(state.phone).toBe("89212632799")
		expect(state.code).toBe("000000")
	})
})
