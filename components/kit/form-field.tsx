import React from "react"
import { Controller, type Control, type FieldError, type FieldPath, type FieldValues } from "react-hook-form"
import { Text, TextInput, View } from "react-native"

interface Props<T extends FieldValues> {
	control: Control<T>
	label: string
	controllerName: FieldPath<T>
	placeholder: string
	error?: FieldError
	className?: string
}

const FormField = <T extends FieldValues>({ control, label, controllerName, placeholder, error, className }: Props<T>) => {
	return (
		<View className="flex flex-col gap-2 flex-1">
			<Text className={`font-semibold font-nunito text-black ${error && "text-red-500"}`}>{label}</Text>
			<Controller
				control={control}
				name={controllerName}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						keyboardType={controllerName === "phone" ? "phone-pad" : "default"}
						textContentType={
							controllerName === "email"
								? "emailAddress"
								: controllerName === "phone"
									? "telephoneNumber"
									: controllerName === "name"
										? "name"
										: controllerName === "familyName"
											? "familyName"
											: controllerName === "surname"
												? "givenName"
												: "none"
						}
						value={value}
						onBlur={onBlur}
						onChangeText={onChange}
						placeholder={placeholder}
						placeholderTextColor="#9CA3AF"
						className={`border p-3 rounded-full font-nunito font-semibold text-xl border-[#B7B7B7] ${error && "border-red-500"} ${className}`}
					/>
				)}
			/>
			{error && <Text className="text-red-500">{error.message}</Text>}
		</View>
	)
}

export default FormField
