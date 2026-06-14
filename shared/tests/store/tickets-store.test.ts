import type { TTicket } from "@/@types/ticket.type"
import { useTicketsStore } from "@/shared/store/tickets.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("tickets-store", () => {
	beforeEach(() => {
		useTicketsStore.setState({
			totalAmount: 0,
			ticketData: [],
		})
	})

	test("has initial state", () => {
		const state = useTicketsStore.getState()

		expect(state.totalAmount).toBe(0)
		expect(state.ticketData).toEqual([])
	})

	test("setTicketData update state", () => {
		const ticket: TTicket = {
			id: "1",
			filmName: "Dune",
			seat: {
				row: 1,
				seat: 1,
				price: 100,
			},
			seance: "1",
		}

		useTicketsStore.getState().setTicketData([ticket])

		const state = useTicketsStore.getState()

		expect(state.ticketData).toEqual([ticket])
		expect(state.totalAmount).toBe(100)
	})
})
