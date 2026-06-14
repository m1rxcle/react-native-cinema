import type { IOrder } from "@/@types/order.type"
import { create } from "zustand"

type TInitialState = {
	lastOrder: IOrder | null
}

type TOrderStoreActions = {
	setLastOrder: (order: IOrder) => void
}

export type TOrderStore = TInitialState & TOrderStoreActions

export const useOrderStore = create<TOrderStore>((set, get) => ({
	lastOrder: null,
	setLastOrder: (order: IOrder) => set({ lastOrder: order }),
}))
