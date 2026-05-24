import { userDetailsSchema, type TUserDetails } from "@/shared/schemas/user-details-schema"
import { useCheckoutStore } from "@/shared/store/checkout.store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocalSearchParams, useRouter } from "expo-router"
import React from "react"
import { useForm } from "react-hook-form"
import { Keyboard, TouchableWithoutFeedback, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import FormField from "../kit/form-field"
import Button from "../ui/button"

const UserDetailsForm = () => {
	const { filmId } = useLocalSearchParams()

	const router = useRouter()

	const { userDetails, setUserDetails } = useCheckoutStore()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TUserDetails>({
		resolver: zodResolver(userDetailsSchema),
		defaultValues: {
			firstName: userDetails.firstName || "",
			lastName: userDetails.lastName || "",
			middleName: userDetails.middleName || "",
			phone: userDetails.phone || "",
			city: userDetails.city || "",
			email: userDetails.email || "",
		},
		mode: "onSubmit",
	})

	const onSubmit = (data: TUserDetails) => {
		setUserDetails(data)
		router.push({ pathname: "/checkout/credit-card-details", params: { filmId } })
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAwareScrollView style={{ flex: 1 }}>
				<View className="flex flex-col justify-between flex-1">
					<View className="flex flex-col gap-6 mb-6">
						<FormField control={control} label="Фамилия*" controllerName="lastName" placeholder="Введите фамилию" error={errors.lastName} />
						<FormField control={control} label="Имя*" controllerName="firstName" placeholder="Введите имя" error={errors.firstName} />
						<FormField control={control} label="Отчество*" controllerName="middleName" placeholder="Введите отчество" error={errors.middleName} />
						<FormField control={control} label="Телефон" controllerName="phone" placeholder="Введите телефон" error={errors.phone} />
						<FormField control={control} label="Город" controllerName="city" placeholder="Введите город" error={errors.city} />
						<FormField control={control} label="Email" controllerName="email" placeholder="Введите электронную почту" error={errors.email} />
					</View>
					<Button onPress={handleSubmit(onSubmit)}>Продолжить</Button>
				</View>
			</KeyboardAwareScrollView>
		</TouchableWithoutFeedback>
	)
}

export default UserDetailsForm
