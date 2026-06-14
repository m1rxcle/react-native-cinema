import type { TTicket } from "@/@types/ticket.type"
import getTotalAmountTickets from "@/shared/utils/get-total-amount-tickets"
import { describe, expect, test } from "vitest"

const tickets: TTicket[] = [
	{
		id: "1",
		filmName: "test",
		seat: {
			row: 1,
			seat: 1,
			price: 100,
		},
		seance: "test",
	},
	{
		id: "2",
		filmName: "test",
		seat: {
			row: 1,
			seat: 2,
			price: 100,
		},
		seance: "test",
	},
	{
		id: "3",
		filmName: "test",
		seat: {
			row: 1,
			seat: 3,
			price: 100,
		},
		seance: "test",
	},
]

describe("get-total-amount-tickets", () => {
	test("returns total amount of tickets", () => {
		expect(getTotalAmountTickets(tickets)).toBe(300)
	})
	test("returns 0 if tickets is empty", () => {
		expect(getTotalAmountTickets([])).toBe(0)
	})
	test("amount must be a number", () => {
		expect(getTotalAmountTickets(tickets)).toBeTypeOf("number")
	})
})
