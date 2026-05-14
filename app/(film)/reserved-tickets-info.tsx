import { useTicketsStore } from "@/store/tickets.store"
import React from "react"
import { Text, View } from "react-native"

const ReservedTicketsInfoScreen = () => {
	const { ticketData } = useTicketsStore()

	console.log(ticketData)

	return (
		<View>
			<Text>ReservedTicketsInfoScreen</Text>
		</View>
	)
}

export default ReservedTicketsInfoScreen
