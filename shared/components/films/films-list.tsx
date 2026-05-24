import type { IFilm } from "@/@types"
import { ScrollView, Text, View } from "react-native"
import { FilmCard } from "./film-card"

interface Props {
	fantasy: IFilm[]
	triller: IFilm[]
	premium: IFilm[]
	horror: IFilm[]
}

const FilmsList = ({ fantasy, triller, premium, horror }: Props) => {
	return (
		<View className="flex flex-col gap-8 py-6 mb-24">
			{fantasy && fantasy.length > 0 && (
				<View className="flex flex-col gap-4 container">
					<FilmCard film={fantasy[0]} size="large" />
				</View>
			)}
			{triller && triller.length > 0 && (
				<>
					<Text className="text-2xl font-nunito font-bold container">Триллеры</Text>
					<ScrollView showsHorizontalScrollIndicator={false} snapToInterval={224} horizontal contentContainerClassName="flex flex-row gap-4 pl-2">
						{triller.map((film) => (
							<FilmCard key={film.id} film={film} size="small" />
						))}
					</ScrollView>
				</>
			)}
			{premium && premium.length > 0 && (
				<View className="flex flex-col gap-4 container">
					<Text className="text-2xl font-nunito font-bold">Популярные</Text>

					{premium.map((film) => (
						<FilmCard key={film.id} film={film} size="large" />
					))}
				</View>
			)}
			{horror && horror.length > 0 && (
				<>
					<Text className="text-2xl font-nunito font-bold container">Ужасы</Text>
					<ScrollView showsHorizontalScrollIndicator={false} snapToInterval={224} horizontal contentContainerClassName="flex flex-row gap-4 pl-2">
						{horror.map((film) => (
							<FilmCard key={film.id} film={film} size="small" />
						))}
					</ScrollView>
				</>
			)}
		</View>
	)
}

export default FilmsList
