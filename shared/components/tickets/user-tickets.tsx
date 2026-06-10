import { useTicketsStore } from "@/shared/store/tickets.store"
import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import ActiveAndHistoryTabs from "./active-and-history-tabs"
import ReturnTicketModal from "./returnTicketModal"
import TicketCard from "./ticket-card"

const UserTickets = () => {
	const [focused, setFocused] = useState<"active" | "history">("active")
	const [visibleReturnModal, setVisibleReturnModal] = useState(false)
	const { ticketData } = useTicketsStore()

	return (
		<View className="flex-1 ">
			<ActiveAndHistoryTabs focused={focused} setFocused={setFocused} />
			<ScrollView contentContainerClassName="flex flex-col gap-4 mt-6 pb-28">
				{ticketData.map((ticket, index) => (
					<TicketCard
						ticket={ticket}
						key={ticket.id}
						index={index}
						status={"paid"}
						returnTicketButton
						setVisibleReturnModal={setVisibleReturnModal}
					/>
				))}
			</ScrollView>
			<ReturnTicketModal visibleReturnModal={visibleReturnModal} setVisibleReturnModal={setVisibleReturnModal} />
		</View>
	)
}

export default UserTickets
