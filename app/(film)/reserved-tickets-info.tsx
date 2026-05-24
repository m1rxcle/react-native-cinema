import ButtonBack from "@/components/kit/button-back"
import ProgressBar from "@/components/kit/progress-bar"
import ReservedTickets from "@/components/tickets/reserved-tickets"
import Button from "@/components/ui/button"
import { useTicketsStore } from "@/store/tickets.store"
import getTotalAmountTickets from "@/utils/get-total-amount-tickets"
import { useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { ScrollView, Text, View } from "react-native"

const ReservedTicketsInfoScreen = () => {
	const { filmId } = useLocalSearchParams()

	const { ticketData, setTotalAmount } = useTicketsStore()
	const router = useRouter()

	const onPress = () => {
		setTotalAmount(getTotalAmountTickets(ticketData))
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
				<Text className="text-3xl font-bold font-nunito">Сумма: {getTotalAmountTickets(ticketData)} ₽</Text>
				<Button onPress={onPress}>Купить билеты</Button>
			</View>
		</View>
	)
}

export default ReservedTicketsInfoScreen
