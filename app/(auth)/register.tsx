import { authApi } from "@/api/auth.api"
import FormField from "@/shared/components/kit/form-field"
import Button from "@/shared/components/ui/button"
import { RegisterSchema, type TRegisterSchema } from "@/shared/schemas/register-schema"
import { useAuthStore } from "@/shared/store/auth.store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Text, View } from "react-native"

const RegisterScreen = () => {
	const [loadingOpt, setLoadingOpt] = useState(false)

	const router = useRouter()

	const { setPhone } = useAuthStore()

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<TRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			phone: "",
		},
		mode: "onSubmit",
	})

	const onSubmit = async (data: TRegisterSchema) => {
		try {
			setLoadingOpt(true)

			const response = await authApi.createOptCode(data.phone)
			setPhone(data.phone)
			router.push({ pathname: "/(auth)/code", params: { retryDelay: response.data.retryDelay } })
			console.log("Phone", data.phone)
			console.log("Response", response.data)
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message)
			}
		} finally {
			setLoadingOpt(false)
		}
	}

	return (
		<View className="background flex-1 container gap-6">
			<Text className="text-2xl font-bold font-nunito">Авторизация</Text>

			<Text className="text-xl font-semibold font-nunito">Введите номер телефона для входа в свой профиль</Text>

			<FormField label="Телефон" placeholder="+7(000) 000 00 00" control={control} controllerName="phone" error={errors.phone} />

			<View>
				<Button onPress={handleSubmit(onSubmit)}>
					<Text className="font-semibold font-nunito">Продолжить</Text>
				</Button>
				<Button
					style={{ backgroundColor: "#e3e3e3" }}
					onPress={() => {
						router.replace("/")
					}}
				>
					<Text className="text-black font-semibold font-nunito">На главную</Text>
				</Button>
			</View>
		</View>
	)
}

export default RegisterScreen
