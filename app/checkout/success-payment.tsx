import Button from "@/shared/components/ui/button"
import { useOrderStore } from "@/shared/store/order.store"
import { usePlaceStore } from "@/shared/store/place.store"
import { useSeanceStore } from "@/shared/store/seance.store"
import { useTicketsStore } from "@/shared/store/tickets.store"
import { splitSeanceDate } from "@/shared/utils/split-seance-date"
import { Ionicons } from "@expo/vector-icons"
import { Stack, useRouter } from "expo-router"
import React from "react"
import { Text, View } from "react-native"

const SuccessPaymentScreen = () => {
	const { lastOrder } = useOrderStore()
	const { ticketData } = useTicketsStore()
	const { setActiveSeance } = useSeanceStore()
	const { resetPlaces } = usePlaceStore()

	const router = useRouter()

	if (!lastOrder) return null

	const seats = lastOrder.tickets.map((ticket) => {
		return {
			row: ticket.row,
			seat: ticket.column,
		}
	})
	const hall = splitSeanceDate(ticketData[0].seance).hall
	const orderNumber = lastOrder.orderNumber

	const onClose = () => {
		router.replace({ pathname: "/" })

		setActiveSeance(null)
		resetPlaces()
	}

	const onPressDetails = () => {
		router.push({ pathname: "/" })

		setActiveSeance(null)
		resetPlaces()
	}

	return (
		<>
			<Stack.Screen
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
			/>

			<View className="background container flex-1">
				<View className="flex justify-end items-end">
					<Ionicons onPress={onClose} name="close" size={24} color="#000000" />
				</View>
				<View className="pt-6 pb-10 gap-4">
					<View className="flex items-center justify-center">
						<Ionicons name="checkmark-circle" size={80} color="#E843B2" />
					</View>
					<View className="px-4 gap-4">
						<Text className="text-3xl font-bold font-nunito text-center">Оплата прошла успешно</Text>

						<View>
							<Text className="text-base font-semibold font-nunito text-[#969696] mb-2">Количество Билетов</Text>
							<Text className="text-lg font-semibold font-nunito">{lastOrder.tickets.length}</Text>
						</View>
						<View>
							<Text className="text-base font-semibold font-nunito text-[#969696] mb-2">Фильм</Text>
							<Text className="text-lg font-semibold font-nunito">{lastOrder.film.name || "Неизвестный фильм"}</Text>
						</View>
						<View>
							<Text className="text-base font-semibold font-nunito text-[#969696] mb-2">Зал</Text>
							<Text className="text-lg font-semibold font-nunito">{hall}</Text>
						</View>
						<View>
							<Text className="text-base font-semibold font-nunito text-[#969696] mb-2">Места</Text>
							<Text className="text-lg font-semibold font-nunito">
								{seats.length > 1 ? seats[0].row + " ряд" + ", места " : seats[0].row + " ряд" + ", место "}
								{seats.length > 1 ? seats.map((seat) => seat.seat).join(" и ") : seats[0].seat}
							</Text>
						</View>
						<View>
							<Text className="text-base font-semibold font-nunito text-[#969696] mb-2">Номера Заказа</Text>
							<Text className="text-lg font-semibold font-nunito">{orderNumber}</Text>
						</View>
						<View>
							<Text className="text-lg font-semibold font-nunito text-[#969696]">Вся информация продублирована в SMS и на электронную почту</Text>
						</View>
					</View>
				</View>
				<View className="gap-2">
					<Button onPress={onPressDetails} style={{ backgroundColor: "#f1f1f1" }}>
						<Text className="text-black font-semibold text-center font-nunito">Детали заказа</Text>
					</Button>
					<Button onPress={onClose}>На главную</Button>
				</View>
			</View>
		</>
	)
}

export default SuccessPaymentScreen
