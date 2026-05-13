import { Text, View } from "react-native"

const HintToPlaces = () => {
	return (
		<View className="container flex flex-row justify-between gap-4">
			<View className="flex flex-row gap-2 items-center">
				<View className="size-6 bg-black rounded-md" />
				<Text className="text-xl font-nunito font-semibold">Заняты</Text>
			</View>
			<View className="flex flex-row gap-2 items-center">
				<View className="size-6 bg-[#FFCDEE] rounded-md" />
				<Text className="text-xl font-nunito font-semibold">Выбраны</Text>
			</View>
			<View className="flex flex-row gap-2 items-center">
				<View className="size-6 bg-[#EBEBEB] rounded-md" />
				<Text className="text-xl font-nunito font-semibold">Доступны </Text>
			</View>
		</View>
	)
}

export default HintToPlaces
