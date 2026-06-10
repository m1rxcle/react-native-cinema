import React from "react"
import { Pressable, Text, View } from "react-native"

interface Props {
	focused: "active" | "history"
	setFocused: (value: "active" | "history") => void
}

const ActiveAndHistoryTabs = ({ focused, setFocused }: Props) => {
	return (
		<View className="flex-row gap-6 justify-between items-center bg-[#f3f3f3] rounded-full py-2 px-3">
			<Pressable onPress={() => setFocused("active")} className={`py-3 px-11 ${focused === "active" && "bg-white shadow-sm"} rounded-full`}>
				<Text className="font-bold text-xl font-nunito">Активные</Text>
			</Pressable>
			<Pressable onPress={() => setFocused("history")} className={`py-3 px-11 ${focused === "history" && "bg-white shadow-sm"} rounded-full`}>
				<Text className="font-bold text-xl font-nunito">История</Text>
			</Pressable>
		</View>
	)
}

export default ActiveAndHistoryTabs
