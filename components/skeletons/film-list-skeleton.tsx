import React from "react"
import { ScrollView, View } from "react-native"

export const FilmListSkeleton = () => {
	return (
		<ScrollView className="flex flex-col py-8 container">
			<View className="w-40 h-8 animate-pulse mb-10 bg-gray-300 rounded-lg" />
			<View className="mb-8">
				<View className="h-[280] w-full bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-20 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-32 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-12 w-full bg-gray-300 rounded-2xl mb-4 animate-pulse" />
			</View>
			<View className="mb-8">
				<View className="h-[280] w-full bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-20 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-32 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-12 w-full bg-gray-300 rounded-2xl mb-4 animate-pulse" />
			</View>
			<View className="mb-8">
				<View className="h-[280] w-full bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-20 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-32 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-12 w-full bg-gray-300 rounded-2xl mb-4 animate-pulse" />
			</View>
		</ScrollView>
	)
}
