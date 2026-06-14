import type { TTicket } from "@/@types/ticket.type"

export default function getTotalAmountTickets(tickets: TTicket[]) {
	return tickets.reduce((acc, ticket) => acc + ticket.seat.price, 0)
}
