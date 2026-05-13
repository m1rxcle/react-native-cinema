import type { IFilmScheduleResponse } from "@/@types"
import ButtonBack from "@/components/kit/button-back"
import Places from "@/components/places"
import Button from "@/components/ui/button"
import { SERVER_API } from "@/constants/app.constants"
import useFetch from "@/hooks/use-fetch"
import { usePlaceStore } from "@/store/place.store"
import { getSeancePlaces } from "@/utils/get-seance-places"
import { useLocalSearchParams } from "expo-router"
import { useMemo } from "react"
import { Text, View } from "react-native"

export default function SeancePlacesScreen() {
	const { filmId, seanceId } = useLocalSearchParams()

	const { data, loading } = useFetch<IFilmScheduleResponse>(`${SERVER_API}/cinema/film/${filmId}/schedule`)

	const { selectedPlaceList } = usePlaceStore()

	const hall = useMemo(() => {
		if (!data) return
		return getSeancePlaces(data, seanceId as string)
	}, [data, seanceId])

	if (!hall && loading) return null

	if (!hall) return null

	return (
		<View className="background min-h-full relative">
			<View className="container">
				<ButtonBack>
					<Text>Выбор места</Text>
				</ButtonBack>
			</View>

			<Places places={hall.places} hallName={hall.name} filmId={filmId} />

			<View className="absolute bottom-0 left-0 right-0 px-14">
				<Button style={!selectedPlaceList.length ? { backgroundColor: "gray" } : {}} disabled={!selectedPlaceList.length}>
					Продолжить
				</Button>
			</View>
		</View>
	)
}
