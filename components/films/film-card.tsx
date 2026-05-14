import type { IFilm } from "@/@types"
import { useRouter } from "expo-router"
import React from "react"
import { View } from "react-native"
import Button from "../ui/button"
import FilmActorsBlock from "./film-actors-block"
import FilmImage from "./film-image"
import FilmNameWithGenres from "./film-name-with-genres"
import FilmRating from "./film-rating"

interface Props {
	film: IFilm
	size?: "small" | "large"
	className?: string
}

export const FilmCard = ({ film, size = "large", className }: Props) => {
	const router = useRouter()

	const isPremium = film.name.includes("Интерстеллар") || film.name.includes("Сайлент Хилл")

	const onButtonPress = (filmId: string) => {
		console.log(filmId)
		router.push({ pathname: `/(film)/[id]`, params: { id: filmId } })
	}

	return (
		<View className={`${size === "small" ? "w-60" : "w-full"} relative  ${className}`}>
			<FilmImage size={size} filmImg={film.img} />
			<FilmNameWithGenres className="text-lg font-semibold font-nunito" name={film.name} genres={film.genres} />

			{isPremium && size === "large" && <FilmActorsBlock actors={film.actors} />}

			<Button onPress={() => onButtonPress(film.id)}>Подробнее</Button>

			<FilmRating rating={film.userRatings.kinopoisk} />
		</View>
	)
}
