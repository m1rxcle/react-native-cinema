import { TTicket } from "@/@types"

export default function getTotalAmountTickets(tickets: TTicket[]) {
	return tickets.reduce((acc, ticket) => acc + ticket.seat.price, 0)
}
