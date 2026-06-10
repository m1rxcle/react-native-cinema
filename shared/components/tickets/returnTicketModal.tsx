import useAnimateModal from "@/shared/hooks/use-animate-modal"
import { Ionicons } from "@expo/vector-icons"
import { Modal, Pressable, Text, View } from "react-native"
import Animated from "react-native-reanimated"
import Button from "../ui/button"

interface Props {
	visibleReturnModal: boolean
	setVisibleReturnModal: (visible: boolean) => void
}

const ReturnTicketModal = ({ visibleReturnModal, setVisibleReturnModal }: Props) => {
	const animatedStyle = useAnimateModal(visibleReturnModal)

	return (
		<Modal visible={visibleReturnModal} animationType="none" transparent>
			<Pressable onPress={() => setVisibleReturnModal(false)} className="flex-1 justify-end bg-black/50">
				<Animated.View className="bg-white rounded-t-3xl p-6 container gap-4" style={animatedStyle}>
					<Ionicons name="help-outline" size={40} color="white" className="p-3 mx-auto bg-black self-start rounded-full" />
					<Text className="font-bold text-3xl font-nunito text-center mb-2">Вы уверены, что хотите вернуть билет?</Text>
					<View>
						<Button style={{ backgroundColor: "#f1f1f1" }}>
							<Text className="text-black font-semibold text-center font-nunito">Вернуть</Text>
						</Button>
						<Button onPress={() => setVisibleReturnModal(false)}>Отменить</Button>
					</View>
				</Animated.View>
			</Pressable>
		</Modal>
	)
}

export default ReturnTicketModal
