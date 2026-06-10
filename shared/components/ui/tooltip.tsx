import { type IPlaceAfterFormat } from "@/@types"
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

interface Props {
	seat: IPlaceAfterFormat
}

const Tooltip = ({ seat }: Props) => {
	const [hide, setHide] = useState(false)

	return (
		<View className={`${hide ? "hidden" : ""} items-center min-w-[100px] z-50`}>
			<View className="bg-black h-3 w-3 rotate-45 -mb-2" />
			<View className=" bg-black px-2 py-1.5 rounded-xl flex flex-col gap-1">
				<View className="flex flex-row justify-between items-center gap-2">
					<Text className="text-white text-sm">{seat.price} ₽</Text>
					<Pressable className={``} onPress={() => setHide(!hide)}>
						<Text className=" text-white text-base opacity-80">X</Text>
					</Pressable>
				</View>
				<View>
					<Text className="text-[#B7B7B7] text-xs">
						{seat.row} ряд, {seat.seat} место
					</Text>
				</View>
			</View>
		</View>
	)
}

export default Tooltip
