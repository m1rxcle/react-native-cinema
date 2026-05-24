import type { IFilmScheduleResponse } from "@/@types"
import { scheduleApi } from "@/api/schedule.api"
import Places from "@/components/halls/places"
import ButtonBack from "@/components/kit/button-back"
import PlacesSkeleton from "@/components/skeletons/places-skeleton"
import Button from "@/components/ui/button"
import useGetHall from "@/hooks/use-get-hall"
import { usePlaceStore } from "@/store/place.store"
import { useSeanceStore } from "@/store/seance.store"
import { useTicketsStore } from "@/store/tickets.store"
import { generateTicketNumber } from "@/utils/generate-ticket-number"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"

export default function SeancePlacesScreen() {
	const { filmId, filmName, seanceId } = useLocalSearchParams()

	const router = useRouter()

	const [filmSchedule, setFilmSchedule] = useState<IFilmScheduleResponse["schedules"] | null>(null)
	const [loadingFilmSchedule, setLoadingFilmSchedule] = useState(false)
	const [errorGetFilmSchedule, setErrorGetFilmSchedule] = useState<string | null>(null)

	useEffect(() => {
		const load = async () => {
			try {
				setLoadingFilmSchedule(true)
				setErrorGetFilmSchedule(null)
				const response = await scheduleApi.getSchedule(filmId[0])
				setFilmSchedule(response.data.schedules)
			} catch (error) {
				if (error instanceof Error) {
					setErrorGetFilmSchedule(error.message)
				}
				console.log(error)
			} finally {
				setLoadingFilmSchedule(false)
			}
		}
		load()
	}, [filmId])

	//TODO: Сделать селекторы для каждого стора а так же (BOOK STORE)

	const { selectedPlaceList } = usePlaceStore()
	const { setTicketData } = useTicketsStore()
	const { activeSeance } = useSeanceStore()

	const hall = useGetHall(filmSchedule, seanceId)

	if (!hall && loadingFilmSchedule) return <PlacesSkeleton />

	if (!hall) return null

	if (errorGetFilmSchedule) return <Text>{errorGetFilmSchedule}</Text>

	const collectTicketsData = () => {
		if (!selectedPlaceList.length || !activeSeance) return false

		setTicketData(
			selectedPlaceList.map((place) => ({
				id: generateTicketNumber(),
				filmName: filmName as string,
				seat: {
					rowNumber: place.rowNumber,
					seatNumber: place.seatNumber,
					price: place.price,
				},
				seanceDate: activeSeance,
			})),
		)

		return true
	}

	return (
		<View className="background min-h-full relative">
			<View className="container mb-8">
				<ButtonBack>
					<Text>Выбор места</Text>
				</ButtonBack>
			</View>

			<Places places={hall.places} hallName={hall.name} filmId={filmId} filmName={filmName} />

			<View className="absolute bottom-0 left-0 right-0 px-14">
				<Button
					onPress={() => {
						const isSuccess = collectTicketsData()
						if (!isSuccess) return
						router.push({ pathname: `/(film)/reserved-tickets-info`, params: { filmId } })
					}}
					style={!selectedPlaceList.length && { backgroundColor: "gray" }}
					disabled={!selectedPlaceList.length}
				>
					{selectedPlaceList.length ? "Продолжить" : "Выберите место"}
				</Button>
			</View>
		</View>
	)
}
