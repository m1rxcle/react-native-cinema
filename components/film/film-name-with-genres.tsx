import React from "react"
import { Text, View } from "react-native"

interface Props {
	name: string
	genres: string[]
	className?: string
}

const FilmNameWithGenres = ({ name, genres, className }: Props) => {
	return (
		<View>
			<Text numberOfLines={1} className={className}>
				{name}
			</Text>
			<Text numberOfLines={1} className="font-nunito text-base text-[#969696]">
				{genres.join(", ")}
			</Text>
		</View>
	)
}

export default FilmNameWithGenres
