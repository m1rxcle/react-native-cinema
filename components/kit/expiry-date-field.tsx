import type { TCardDetails } from "@/schemas/card-details-schema"
import { Controller, type Control, type ErrorOption } from "react-hook-form"
import { Text, TextInput, View } from "react-native"

interface Props {
	control: Control<TCardDetails>
	error?: ErrorOption
}

const ExpiryDateField = ({ control, error }: Props) => {
	return (
		<View className="flex-1 gap-2">
			<Text className="font-semibold font-nunito text-black">Срок*</Text>

			<View className="border rounded-full border-[#B7B7B7] flex-row items-center ">
				<Controller
					control={control}
					name="month"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							value={value}
							onBlur={onBlur}
							onChangeText={(text) => {
								const cleaned = text.replace(/\D/g, "")

								const formatted = cleaned.replace(/(\d{4})/g, "$1 ").trim()

								onChange(formatted)
							}}
							placeholderTextColor="#9CA3AF"
							placeholder="MM"
							className="p-3 text-xl"
							keyboardType="number-pad"
							maxLength={2}
						/>
					)}
				/>
				<Text className="text-2xl">/</Text>
				<Controller
					control={control}
					name="year"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							value={value}
							onBlur={onBlur}
							onChangeText={(text) => {
								onChange(text.replace(/\D/g, ""))
							}}
							placeholderTextColor="#9CA3AF"
							placeholder="YY"
							className="p-3 text-xl"
							keyboardType="number-pad"
							maxLength={2}
						/>
					)}
				/>
			</View>
			{error && <Text className="text-red-500">{error.message}</Text>}
		</View>
	)
}

export default ExpiryDateField
