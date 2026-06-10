import type { TTicket } from "@/@types"
import React from "react"
import { Text, View } from "react-native"
import TicketCard from "./ticket-card"

interface Props {
	tickets: TTicket[]
}

const ReservedTickets = ({ tickets }: Props) => {
	if (!tickets.length) return null

	return (
		<View>
			<View className="mb-3">
				<Text className="text-lg font-semibold font-nunito text-[#969696]">Название фильма</Text>
				<Text className="text-2xl font-bold font-nunito">{tickets[0].filmName}</Text>
			</View>
			<View className="flex flex-col gap-3 mb-3 ">
				{tickets.map((ticket, index) => {
					return <TicketCard key={ticket.id} index={index} ticket={ticket} />
				})}
			</View>
		</View>
	)
}

export default ReservedTickets
