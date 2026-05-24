import { paymentApi } from "@/api/payment.api"
import { cardDetailsSchema, type TCardDetails } from "@/schemas/card-details-schema"
import { useCheckoutStore } from "@/store/checkout.store"
import { useSeanceStore } from "@/store/seance.store"
import { useTicketsStore } from "@/store/tickets.store"
import normalizeLocalParams from "@/utils/normalize-local-params"
import { splitSeanceDate } from "@/utils/split-seance-date"
import { zodResolver } from "@hookform/resolvers/zod"
import { isAxiosError } from "axios"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ActivityIndicator, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import ExpiryDateField from "../kit/expiry-date-field"
import FormField from "../kit/form-field"
import Button from "../ui/button"

const CreditCardDetailsForm = () => {
	const { filmId } = useLocalSearchParams()

	const normalizeFilmId = normalizeLocalParams(filmId)

	const router = useRouter()

	const [loadingPayload, setLoadingPayload] = useState(false)

	const { creditCardInfo, setCreditCardInfo, userDetails } = useCheckoutStore()
	const { activeSeance } = useSeanceStore()
	const { ticketData } = useTicketsStore()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TCardDetails>({
		resolver: zodResolver(cardDetailsSchema),
		defaultValues: {
			cardNumber: creditCardInfo.cardNumber || "",
			month: creditCardInfo.month || "",
			year: creditCardInfo.year || "",
			cvv: creditCardInfo.cvv || "",
		},
		mode: "onSubmit",
	})

	const onSubmit = async (data: TCardDetails) => {
		if (!activeSeance) return

		const { date, hall, time } = splitSeanceDate(activeSeance)

		setCreditCardInfo(data)

		try {
			setLoadingPayload(true)
			const response = await paymentApi.pay({
				filmId: normalizeFilmId,
				debitCard: {
					pan: data.cardNumber,
					expireDate: `${data.month}/${data.year}`,
					cvv: data.cvv,
				},
				person: {
					firstname: userDetails.firstName,
					lastname: userDetails.lastName,
					middlename: userDetails.middleName,
					phone: userDetails.phone,
				},
				seance: {
					date,
					time,
				},
				tickets: ticketData.map((ticket) => ({
					row: ticket.seat.rowNumber,
					column: ticket.seat.seatNumber,
				})),
			})
		} catch (error) {
			if (isAxiosError(error)) {
				console.error(error.response?.status)
			} else {
				console.log(error)
			}
		} finally {
			setLoadingPayload(false)
		}
	}

	return (
		<View className={`relative flex-1 ${loadingPayload && "opacity-50"}`}>
			{loadingPayload && <ActivityIndicator size="large" color="black" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
			<KeyboardAwareScrollView style={{ flex: 1 }}>
				<View className="flex flex-col justify-between flex-1">
					<View className="flex flex-col gap-6 mb-6 bg-[#F5F5F5] p-6 rounded-2xl">
						<FormField
							control={control}
							label="Номер карты*"
							controllerName="cardNumber"
							placeholder="Введите номер карты"
							error={errors.cardNumber}
							disabled={loadingPayload}
						/>
						<View className="flex flex-row justify-between gap-4">
							<ExpiryDateField control={control} error={errors.month || errors.year} disabled={loadingPayload} />
							<FormField control={control} label="CVV*" controllerName="cvv" placeholder="0000" error={errors.cvv} disabled={loadingPayload} />
						</View>
					</View>
				</View>
			</KeyboardAwareScrollView>
			<Button
				disabled={loadingPayload}
				className={`fixed bottom-0 left-0 right-0 ${loadingPayload && "bg-gray-500"}`}
				onPress={handleSubmit(onSubmit)}
			>
				Продолжить
			</Button>
		</View>
	)
}

export default CreditCardDetailsForm
