import type { TTicket } from "@/@types"
import { splitSeanceDate } from "@/utils/split-seance-date"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, View } from "react-native"

interface Props {
	tickets: TTicket[]
}

const ReservedTickets = ({ tickets }: Props) => {
	return (
		<View>
			<View className="mb-3">
				<Text className="text-lg font-semibold font-nunito text-[#969696]">Название фильма</Text>
				<Text className="text-2xl font-bold font-nunito">{tickets[0].filmName}</Text>
			</View>
			<View className="flex flex-col gap-3 mb-3 ">
				{tickets.map((ticket, index) => {
					const { date, hall, time } = splitSeanceDate(ticket.seanceDate)

					return (
						<View key={ticket.id} className="border rounded-3xl border-black px-4 py-2">
							<View className="flex flex-row justify-between items-center">
								<View>
									<Text className="text-lg font-semibold font-nunito text-[#969696]">Билет</Text>
									<Text className="text-2xl font-bold font-nunito">{index + 1}</Text>
								</View>
								<Ionicons name="ticket-outline" size={24} color="white" className="p-3 bg-[#E10098] rounded-full" />
							</View>
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
										{ticket.seat.rowNumber} ряд, {ticket.seat.seatNumber} место
									</Text>
								</View>
							</View>
						</View>
					)
				})}
			</View>
		</View>
	)
}

export default ReservedTickets
