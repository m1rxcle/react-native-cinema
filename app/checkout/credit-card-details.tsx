import CreditCardDetailsForm from "@/shared/components/forms/credit-card-form"
import ButtonBack from "@/shared/components/kit/button-back"
import ProgressBar from "@/shared/components/kit/progress-bar"
import { Text, View } from "react-native"

const CreditCardDetailsScreen = () => {
	return (
		<View className="background container flex-1">
			<View className="mb-8">
				<ButtonBack>
					<Text>Карта для оплаты</Text>
				</ButtonBack>
			</View>
			<ProgressBar step={4} className="mb-6 " />

			<CreditCardDetailsForm />
		</View>
	)
}

export default CreditCardDetailsScreen
