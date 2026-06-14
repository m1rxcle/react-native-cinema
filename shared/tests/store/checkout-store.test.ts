import { useCheckoutStore } from "@/shared/store/checkout.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("checkout-store", () => {
	beforeEach(() => {
		useCheckoutStore.setState({
			userDetails: { firstName: "", lastName: "", middleName: "", phone: "", city: "", email: "" },
			creditCardInfo: { cardNumber: "", month: "", year: "", cvv: "" },
		})
	})

	test("has initial state", () => {
		const state = useCheckoutStore.getState()

		expect(state.userDetails).toEqual({
			firstName: "",
			lastName: "",
			middleName: "",
			phone: "",
			city: "",
			email: "",
		})

		expect(state.creditCardInfo).toEqual({
			cardNumber: "",
			month: "",
			year: "",
			cvv: "",
		})
	})

	test("setCreditCardInfo update card details", () => {
		useCheckoutStore.getState().setCreditCardInfo({
			cardNumber: "5555555555555555",
			month: "12",
			year: "30",
			cvv: "111",
		})

		expect(useCheckoutStore.getState().creditCardInfo.cardNumber).toBe("5555555555555555")
		expect(useCheckoutStore.getState().creditCardInfo.month).toBe("12")
		expect(useCheckoutStore.getState().creditCardInfo.year).toBe("30")
		expect(useCheckoutStore.getState().creditCardInfo.cvv).toBe("111")
	})

	test("setUserDetails update user details", () => {
		useCheckoutStore.getState().setUserDetails({
			firstName: "Dmitriy",
			lastName: "Gorbachev",
			middleName: "Vladimirovich",
			phone: "89212632799",
			city: "Moscow",
			email: "Gf9yT@example.com",
		})

		expect(useCheckoutStore.getState().userDetails.firstName).toBe("Dmitriy")
		expect(useCheckoutStore.getState().userDetails.lastName).toBe("Gorbachev")
		expect(useCheckoutStore.getState().userDetails.middleName).toBe("Vladimirovich")
		expect(useCheckoutStore.getState().userDetails.phone).toBe("89212632799")
		expect(useCheckoutStore.getState().userDetails.city).toBe("Moscow")
		expect(useCheckoutStore.getState().userDetails.email).toBe("Gf9yT@example.com")
	})

	test("setCreditCard not affect user details", () => {
		useCheckoutStore.getState().setUserDetails({
			firstName: "Dmitriy",
			lastName: "Gorbachev",
			middleName: "Vladimirovich",
			phone: "89212632799",
			city: "Moscow",
			email: "Gf9yT@example.com",
		})
		useCheckoutStore.getState().setCreditCardInfo({
			cardNumber: "5555555555555555",
			month: "12",
			year: "30",
			cvv: "111",
		})

		const state = useCheckoutStore.getState()

		expect(state.userDetails.firstName).toBe("Dmitriy")
		expect(state.userDetails.lastName).toBe("Gorbachev")
		expect(state.userDetails.middleName).toBe("Vladimirovich")
		expect(state.userDetails.phone).toBe("89212632799")
		expect(state.userDetails.city).toBe("Moscow")
		expect(state.userDetails.email).toBe("Gf9yT@example.com")

		expect(state.creditCardInfo.cardNumber).toBe("5555555555555555")
		expect(state.creditCardInfo.month).toBe("12")
		expect(state.creditCardInfo.year).toBe("30")
		expect(state.creditCardInfo.cvv).toBe("111")
	})
})
