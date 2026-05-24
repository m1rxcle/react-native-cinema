import UserDetailsForm from "@/shared/components/forms/user-details-form"
import ButtonBack from "@/shared/components/kit/button-back"
import ProgressBar from "@/shared/components/kit/progress-bar"
import { Text, View } from "react-native"

const UserDetailsScreen = () => {
	return (
		<View className="background container flex-1">
			<View className="mb-8">
				<ButtonBack>
					<Text>Ваши данные</Text>
				</ButtonBack>
			</View>
			<ProgressBar step={3} className="mb-6 " />

			<UserDetailsForm />
		</View>
	)
}

export default UserDetailsScreen
