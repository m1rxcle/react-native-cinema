import type { IFilmsResponse } from "@/@types"
import FilmsList from "@/components/film/films-list"
import { FilmListSkeleton } from "@/components/skeletons/film-list-skeleton"
import { SERVER_API } from "@/constants/app.constants"
import useFetch from "@/hooks/use-fetch"
import useHideTabBar from "@/hooks/use-hide-tab-bar"
import { ScrollView, Text } from "react-native"

/**
 * Главная странница приложения
 *
 * @returns
 */

export default function Index() {
	const { data, loading, error, reason } = useFetch<IFilmsResponse>(`${SERVER_API}/cinema/films`)
	const { onScroll } = useHideTabBar()

	if (!data && loading) return <FilmListSkeleton />

	const categoriesOfFilms = {
		fantasy: data?.films.filter((film) => film.genres.includes("фэнтези")) || [],
		triller: data?.films.filter((film) => film.genres.includes("триллер")) || [],
		premium: data?.films.filter((film) => film.name.includes("Интерстеллар") || film.name.includes("Сайлент Хилл")) || [],
		horror: data?.films.filter((film) => film.genres.includes("ужасы")) || [],
	}

	return (
		<ScrollView onScroll={onScroll} className="background flex-1">
			<Text className="text-2xl font-nunito font-bold mb-3 container">Фильмы</Text>

			{error && <Text className="text-red-500 text-lg">Ошибка: {reason || error}</Text>}
			{data && data.films.length > 0 && (
				<FilmsList
					fantasy={categoriesOfFilms.fantasy}
					triller={categoriesOfFilms.triller}
					premium={categoriesOfFilms.premium}
					horror={categoriesOfFilms.horror}
				/>
			)}
		</ScrollView>
	)
}
