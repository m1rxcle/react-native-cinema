import type { ICreditCardInfo } from "@/@types/order.type"
import type { IUserDetails } from "@/@types/user.type"
import { create } from "zustand"

type TInitialState = {
	userDetails: IUserDetails
	creditCardInfo: ICreditCardInfo
}

type TCheckoutStoreActions = {
	setCreditCardInfo: (creditCardInfo: ICreditCardInfo) => void
	setUserDetails: (userDetails: IUserDetails) => void
}

export type TCheckoutStore = TInitialState & TCheckoutStoreActions

export const useCheckoutStore = create<TCheckoutStore>((set, get) => ({
	userDetails: {
		firstName: "",
		lastName: "",
		middleName: "",
		phone: "",
		city: "",
		email: "",
	},
	creditCardInfo: {
		cardNumber: "",
		month: "",
		year: "",
		cvv: "",
	},

	setCreditCardInfo: (creditCardInfo: ICreditCardInfo) => set({ creditCardInfo }),
	setUserDetails: (userDetails: IUserDetails) => set({ userDetails }),
}))
