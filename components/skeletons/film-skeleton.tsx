import { ScrollView, View } from "react-native"

const FilmSkeleton = () => {
	return (
		<ScrollView className="flex flex-col py-8 container background">
			<View className="w-40 h-8 animate-pulse mb-10 bg-gray-300 rounded-lg" />
			<View className="mb-8">
				<View className="h-[280] w-full bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-8 w-36 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-4 w-44 bg-gray-300 rounded-lg mb-4 animate-pulse" />
				<View className="h-56 w-full bg-gray-300 rounded-2xl mb-4 animate-pulse" />
			</View>
		</ScrollView>
	)
}

export default FilmSkeleton
