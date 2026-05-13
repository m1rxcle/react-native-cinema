import { useSeanceStore } from "@/store/seance.store"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { type ReactNode } from "react"
import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps {
	children: ReactNode
}

const ButtonBack = ({ children, ...props }: Props) => {
	const router = useRouter()
	const { setActiveSeance } = useSeanceStore()

	return (
		<TouchableOpacity
			{...props}
			onPress={() => {
				router.back()
				setActiveSeance("")
			}}
			className="flex flex-row items-start gap-4"
		>
			<Ionicons name="chevron-back" size={24} color="black" />
			<Text className="text-3xl font-semibold font-nunito">{children}</Text>
		</TouchableOpacity>
	)
}

export default ButtonBack
