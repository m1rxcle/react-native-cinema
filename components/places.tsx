import type { IHall, Place } from "@/@types"
import { ScrollView, Text, View } from "react-native"
import HintToPlaces from "./hint-to-places"

interface Props {
	places: Place[][] | undefined
	hallName: IHall["name"] | undefined
	filmId: string | string[]
}

const Places = ({ places, hallName, filmId }: Props) => {
	const toggleActivePlace = (placeId: string) => {}

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
					{places?.map((row, rowIndex) => {
						return (
							<View key={rowIndex} className="flex flex-row gap-6">
								<View className="w-6">
									<Text className="text-sm text-center font-nunito">{rowIndex + 1}</Text>
								</View>

								<View className="flex flex-row gap-2">
									{row.map((place, placeIndex) => {
										return (
											<View
												key={placeIndex}
												className={`${hallName !== "Red" ? "size-6" : "size-12"} rounded-md`}
												style={{
													backgroundColor: place.type === "BLOCKED" ? "black" : "#EBEBEB",
												}}
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
