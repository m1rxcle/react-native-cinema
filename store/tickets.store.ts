import type { TTicket } from "@/@types"
import { create } from "zustand"

type TTicketsStore = {
	ticketData: TTicket[]
	totalAmount: number

	setTotalAmount: (amount: number) => void
	setTicketData: (data: TTicket[]) => void
}

export const useTicketsStore = create<TTicketsStore>((set, get) => ({
	ticketData: [],
	totalAmount: 0,

	setTotalAmount: (amount: number) => set({ totalAmount: amount }),
	setTicketData: (data: TTicket[]) => set({ ticketData: data }),
}))
