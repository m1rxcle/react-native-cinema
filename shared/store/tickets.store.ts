import type { TTicket } from "@/@types/ticket.type"
import { create } from "zustand"

type TTicketsStore = {
	ticketData: TTicket[]
	totalAmount: number

	setTicketData: (data: TTicket[]) => void
}

export const useTicketsStore = create<TTicketsStore>((set, get) => ({
	ticketData: [],
	totalAmount: 0,

	setTicketData: (data: TTicket[]) => set({ ticketData: data, totalAmount: data.reduce((acc, ticket) => acc + ticket.seat.price, 0) }),
}))
