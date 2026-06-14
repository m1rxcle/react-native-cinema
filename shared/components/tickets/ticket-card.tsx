import type { TTicket } from "@/@types/ticket.type"
import { splitSeanceDate } from "@/shared/utils/split-seance-date"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Pressable, Text, View } from "react-native"

interface Props {
	ticket: TTicket
	index: number
	status?: "paid" | "cancelled"
	returnTicketButton?: boolean

	setVisibleReturnModal?: (visible: boolean) => void
}

const TicketCard = ({ index, ticket, status, returnTicketButton, setVisibleReturnModal }: Props) => {
	const { date, hall, time } = splitSeanceDate(ticket.seance)

	return (
		<View className="border rounded-3xl border-black px-4 py-4">
			<View className="flex flex-row justify-between items-center mb-1">
				<View>
					<Text className="text-lg font-semibold font-nunito text-[#969696]">Билет</Text>
					<Text className="text-2xl font-bold font-nunito">{index + 1}</Text>
				</View>
				<Ionicons name="ticket-outline" size={24} color="white" className="p-3 bg-[#E10098] rounded-full" />
			</View>
			{status && (
				<View className={`self-start flex-row items-center gap-1 py-2 px-3 rounded-full mb-1 ${status === "paid" ? "bg-[#BBF7D0]" : "bg-[#FECACA]"}`}>
					<Text>{status === "paid" ? "оплачен" : "отменен"}</Text>
					<Ionicons name={status === "paid" ? "checkmark-circle-outline" : "close-circle-outline"} size={16} color="black" />
				</View>
			)}
			<View className="flex gap-1">
				<View>
					<Text className="text-lg font-semibold font-nunito text-[#969696]">Дата и время</Text>
					<Text className="text-lg  font-nunito">
						{date} в {time}
					</Text>
				</View>
				<View>
					<Text className="text-lg font-semibold font-nunito text-[#969696]">Зал</Text>
					<Text className="text-lg  font-nunito">{hall}</Text>
				</View>
				<View>
					<Text className="text-lg font-semibold font-nunito text-[#969696]">Место</Text>
					<Text className="text-lg  font-nunito">
						{ticket.seat.row} ряд, {ticket.seat.seat} место
					</Text>
				</View>
				{returnTicketButton && setVisibleReturnModal && (
					<Pressable
						onPress={() => {
							setVisibleReturnModal(true)
						}}
						className="py-3 px-6 rounded-full bg-[#f3f3f3] mt-2"
					>
						<Text className="font-semibold font-nunito mx-auto">Вернуть билет</Text>
					</Pressable>
				)}
			</View>
		</View>
	)
}

export default TicketCard
