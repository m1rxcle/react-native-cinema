import { create } from "zustand"

type TInitialState = {
	phone: string
	code: string
}

type TAuthActions = {
	setPhone: (phone: string) => void
	setCode: (code: string) => void
}

export type TAuthStore = TInitialState & TAuthActions

export const useAuthStore = create<TAuthStore>((set, get) => ({
	phone: "",
	code: "",

	setPhone: (phone: string) => set({ phone }),
	setCode: (code: string) => set({ code }),
}))
