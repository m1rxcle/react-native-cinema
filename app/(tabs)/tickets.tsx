import UserTickets from "@/shared/components/tickets/user-tickets"
import { Text, View } from "react-native"

export default function Tickets() {
	return (
		<View className="background flex-1 container gap-3">
			<Text className="text-2xl font-bold font-nunito">Билеты</Text>
			<UserTickets />
		</View>
	)
}
