import type { IFilmScheduleResponse } from "@/@types"
import Places from "@/components/halls/places"
import ButtonBack from "@/components/kit/button-back"
import PlacesSkeleton from "@/components/skeletons/places-skeleton"
import Button from "@/components/ui/button"
import { SERVER_API } from "@/constants/app.constants"
import useFetch from "@/hooks/use-fetch"
import { usePlaceStore } from "@/store/place.store"
import { useSeanceStore } from "@/store/seance.store"
import { useTicketsStore } from "@/store/tickets.store"
import { generateTicketNumber } from "@/utils/generate-ticket-number"
import { getSeancePlaces } from "@/utils/get-seance-places"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useMemo } from "react"
import { Text, View } from "react-native"

export default function SeancePlacesScreen() {
	const router = useRouter()

	const { filmId, filmName, seanceId } = useLocalSearchParams()

	const { data, loading } = useFetch<IFilmScheduleResponse>(`${SERVER_API}/cinema/film/${filmId}/schedule`)

	//TODO: Сделать селекторы для каждого стора

	const { selectedPlaceList } = usePlaceStore()
	const { setTicketData } = useTicketsStore()
	const { activeSeance } = useSeanceStore()

	//TODO: Вынести в отдельный хук

	const hall = useMemo(() => {
		if (!data) return
		return getSeancePlaces(data, seanceId as string)
	}, [data, seanceId])

	if (!hall && loading) return <PlacesSkeleton />

	if (!hall) return null

	const collectTicketsData = () => {
		if (!selectedPlaceList.length || !activeSeance) return

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
						collectTicketsData()
						router.push(`/(film)/reserved-tickets-info`)
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
