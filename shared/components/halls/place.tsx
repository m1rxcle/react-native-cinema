import type { IPlaceAfterFormat } from "@/@types"
import { flip, useFloating } from "@floating-ui/react-native"
import React, { useLayoutEffect } from "react"
import { Pressable, View } from "react-native"
import Tooltip from "../ui/tooltip"

interface Props {
	seat: IPlaceAfterFormat
	isPlaceSelected: boolean
	hallName: string
	toggleSelectedPlace: (place: IPlaceAfterFormat) => void
}

const Place = ({ seat, isPlaceSelected, hallName, toggleSelectedPlace }: Props) => {
	const { refs, floatingStyles, update } = useFloating({
		placement: "bottom",
		middleware: [flip({ fallbackPlacements: ["top", "bottom"] })],
	})

	useLayoutEffect(() => {
		if (isPlaceSelected) {
			update()
		}
	}, [isPlaceSelected, update])

	return (
		<View className="relative">
			<Pressable
				ref={refs.setReference}
				onPress={() => {
					toggleSelectedPlace(seat)
				}}
				disabled={seat.type === "blocked"}
			>
				<View
					className={`${hallName !== "Red" ? "size-6" : "size-12"} rounded-md `}
					style={{
						backgroundColor: seat.type === "blocked" ? "#000000" : isPlaceSelected ? "#FFCDEE" : "#EBEBEB",
					}}
				/>
			</Pressable>

			{isPlaceSelected && (
				<View ref={refs.setFloating} style={floatingStyles} className="z-[1000]">
					<Tooltip seat={seat} />
				</View>
			)}
		</View>
	)
}

export default Place
