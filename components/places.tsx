import type { IHall, Place } from "@/@types"
import { usePlaceStore } from "@/store/place.store"
import { useSeanceStore } from "@/store/seance.store"
import { formattedPlaces } from "@/utils/format-places"
import { useLayoutEffect, useMemo } from "react"
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import HintToPlaces from "./hint-to-places"

interface Props {
	places: Place[][]
	hallName: IHall["name"]
	filmId: string | string[]
}

const Places = ({ places, hallName, filmId }: Props) => {
	const { selectedPlaceList, toggleSelectedPlace, resetPlaces } = usePlaceStore()
	const { activeSeance } = useSeanceStore()

	useLayoutEffect(() => {
		return () => {
			resetPlaces()
		}
	}, [])

	const selectedPlaceIds = useMemo(() => new Set(selectedPlaceList.map((p) => p.id)), [selectedPlaceList])

	if (!places || !activeSeance) return null

	const newPlaces = formattedPlaces(places, activeSeance, filmId, hallName)

	return (
		<View className="container mb-6">
			<Text className="text-xl font-nunito mb-6">Ряд</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={hallName === "Blue"}
				scrollEnabled={hallName === "Blue"}
				className="pb-10"
				indicatorStyle="black"
				indicatorClassName="visible"
				contentContainerClassName="flex flex-col gap-6"
			>
				<View className="flex flex-col gap-6 ">
					{newPlaces.map((row, rowIndex) => {
						return (
							<View key={rowIndex} className="flex flex-row gap-6 items-center">
								<View className="w-6">
									<Text className="text-sm text-center font-nunito">{rowIndex + 1}</Text>
								</View>

								<View className="flex flex-row gap-2">
									{row.map((place) => {
										const isPlaceSelected = selectedPlaceIds.has(place.id)
										return (
											<TouchableWithoutFeedback
												onPress={() => {
													toggleSelectedPlace(place)
												}}
												key={place.id}
												disabled={place.type === "BLOCKED"}
											>
												<View
													className={`${hallName !== "Red" ? "size-6" : "size-12"} rounded-md`}
													style={{
														backgroundColor: place.type === "BLOCKED" ? "black" : isPlaceSelected ? "#FFCDEE" : "#EBEBEB",
													}}
												/>
											</TouchableWithoutFeedback>
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
