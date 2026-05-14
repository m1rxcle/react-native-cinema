import { Text, View } from "react-native"

const PlacesSkeleton = () => {
	return (
		<View className="container background min-h-screen">
			<View className="w-40 h-8 animate-pulse mb-10 bg-gray-300 rounded-lg" />
			<View className="flex flex-col gap-6 mb-10">
				{Array.from({ length: 10 }).map((_, index) => {
					return (
						<View key={index} className="flex flex-row gap-6 items-center">
							<View className="w-6">
								<Text className="text-sm text-center font-nunito">{index + 1}</Text>
							</View>

							<View className="flex flex-row gap-2">
								{Array.from({ length: 10 }).map((_, index) => {
									return (
										<View key={index}>
											<View className="size-6 bg-gray-300 rounded-lg" />
										</View>
									)
								})}
							</View>
						</View>
					)
				})}
			</View>
			<View className="container flex flex-row justify-between gap-4">
				<View className="flex flex-row gap-2 items-center">
					<View className="bg-gray-300 rounded-lg animate-pulse w-20 h-5" />
				</View>
				<View className="flex flex-row gap-2 items-center">
					<View className="bg-gray-300 rounded-lg animate-pulse w-20 h-5" />
				</View>
				<View className="flex flex-row gap-2 items-center">
					<View className="bg-gray-300 rounded-lg animate-pulse w-20 h-5" />
				</View>
			</View>
		</View>
	)
}

export default PlacesSkeleton
