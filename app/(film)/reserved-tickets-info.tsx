import ButtonBack from "@/shared/components/kit/button-back"
import ProgressBar from "@/shared/components/kit/progress-bar"
import ReservedTickets from "@/shared/components/tickets/reserved-tickets"
import Button from "@/shared/components/ui/button"
import { useTicketsStore } from "@/shared/store/tickets.store"
import { useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { ScrollView, Text, View } from "react-native"

const ReservedTicketsInfoScreen = () => {
	const { filmId } = useLocalSearchParams()

	const { ticketData, totalAmount } = useTicketsStore()
	const router = useRouter()

	const onPress = () => {
		router.push({ pathname: "/checkout/user-details", params: { filmId } })
	}

	return (
		<View className="background  container flex-1">
			<View className="mb-8">
				<ButtonBack>
					<Text>Информация о билетах</Text>
				</ButtonBack>
			</View>
			<ProgressBar step={2} className="mb-6 " />

			<ScrollView>
				<ReservedTickets tickets={ticketData} />
			</ScrollView>
			<View className="background fixed bottom-0 left-0 right-0 ">
				<Text className="text-3xl font-bold font-nunito">Сумма: {totalAmount} ₽</Text>
				<Button onPress={onPress}>Купить билеты</Button>
			</View>
		</View>
	)
}

export default ReservedTicketsInfoScreen
