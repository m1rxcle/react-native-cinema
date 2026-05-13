import React from "react"
import { Text, View } from "react-native"

const FilmRating = ({ rating }: { rating: number }) => {
	return (
		<View className="absolute top-4 left-4 bg-[#FFDD00] px-4 py-2 rounded-full">
			<Text className="text-black font-bold text-xs font-nunito text-center">{rating}</Text>
		</View>
	)
}

export default FilmRating
