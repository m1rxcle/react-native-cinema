import type { IHall, IPlace, IPlaceAfterFormat } from "@/@types/ticket.type"
import { usePlaceStore } from "@/shared/store/place.store"
import { useSeanceStore } from "@/shared/store/seance.store"
import { formattedPlaces } from "@/shared/utils/format-places"
import { useLayoutEffect, useMemo } from "react"
import { ScrollView, Text, View } from "react-native"
import ProgressBar from "../kit/progress-bar"
import HintToPlaces from "./hint-to-places"
import Place from "./place"

interface Props {
	places: IPlace[][]
	hallName: IHall["name"]
	filmId: string | string[]
	filmName: string | string[]
}

const Places = ({ places, hallName, filmId, filmName }: Props) => {
	const { selectedPlaceList, toggleSelectedPlace, resetPlaces } = usePlaceStore()
	const { activeSeance } = useSeanceStore()

	useLayoutEffect(() => {
		return () => {
			resetPlaces()
		}
	}, [])

	const selectedPlaceIds = useMemo(() => new Set(selectedPlaceList.map((p) => p.id)), [selectedPlaceList])

	if (!places || !activeSeance) return null

	const newPlaces = formattedPlaces(places, activeSeance, filmId, filmName as string, hallName)

	return (
		<View className="container mb-6 overflow-auto">
			<ProgressBar step={1} className="mb-6" />

			<Text className="text-xl font-nunito mb-6">Ряд</Text>
			<ScrollView
				horizontal
				removeClippedSubviews={false}
				showsHorizontalScrollIndicator={hallName === "Blue"}
				scrollEnabled={hallName === "Blue"}
				className="pb-10"
				indicatorStyle="black"
				indicatorClassName="visible"
				contentContainerClassName="flex flex-col gap-6"
			>
				<View className="flex flex-col gap-6 mb-6">
					{newPlaces.map((row, rowIndex) => {
						return (
							<View key={rowIndex} className="flex flex-row gap-6 items-center">
								<View className="w-6">
									<Text className="text-sm text-center font-nunito">{rowIndex + 1}</Text>
								</View>

								<View className="flex flex-row gap-2">
									{row.map((place: IPlaceAfterFormat) => {
										const isPlaceSelected = selectedPlaceIds.has(place.id)
										return (
											<Place
												hallName={hallName}
												key={place.id}
												seat={place}
												isPlaceSelected={isPlaceSelected}
												toggleSelectedPlace={toggleSelectedPlace}
											/>
										)
									})}
								</View>
							</View>
						)
					})}
				</View>
				<HintToPlaces />
			</ScrollView>
		</View>
	)
}

export default Places
