import { create } from "zustand"

type TTicket = {
	id: string
	filmName: string
	seat: {
		rowNumber: number
		seatNumber: number
		price: number
	}
	seanceDate: string
}

type TTicketsStore = {
	ticketData: TTicket[]
	setTicketData: (data: TTicket[]) => void
}

export const useTicketsStore = create<TTicketsStore>((set, get) => ({
	ticketData: [],

	setTicketData: (data: TTicket[]) => set({ ticketData: data }),
}))
