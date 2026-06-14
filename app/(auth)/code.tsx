import ButtonBack from "@/shared/components/kit/button-back"
import FormField from "@/shared/components/kit/form-field"
import Button from "@/shared/components/ui/button"
import { OptCodeSchema, type TOptCodeSchema } from "@/shared/schemas/code-schema"
import { useAuthStore } from "@/shared/store/auth.store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "expo-router"
import { useForm } from "react-hook-form"
import { Text, View } from "react-native"

const OtpCodeScreen = () => {
	const router = useRouter()

	const { phone } = useAuthStore()

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<TOptCodeSchema>({
		resolver: zodResolver(OptCodeSchema),
		defaultValues: {
			code: "",
		},
		mode: "onSubmit",
	})

	const onSubmit = async (data: TOptCodeSchema) => {
		router.push({ pathname: "/(tabs)/profile" })
		console.log(data)
	}

	return (
		<View className="background flex-1 container gap-6">
			<ButtonBack>Проверочный код</ButtonBack>

			<Text className="text-xl font-semibold font-nunito">На указанный вами номер был отправлен проверочный код</Text>

			<FormField label="Код" placeholder="Проверочный код" control={control} controllerName="code" error={errors.code} />

			<View>
				<Button onPress={handleSubmit(onSubmit)}>
					<Text className="font-semibold font-nunito">Продолжить</Text>
				</Button>
				<Button style={{ backgroundColor: "#e3e3e3" }}>
					<Text className="text-black font-semibold font-nunito">Отправить код повторно</Text>
				</Button>
			</View>
		</View>
	)
}

export default OtpCodeScreen
