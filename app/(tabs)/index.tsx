import type { IFilmsResponse } from "@/@types"
import { filmApi } from "@/api/film.api"
import FilmsList from "@/shared/components/films/films-list"
import { FilmListSkeleton } from "@/shared/components/skeletons/film-list-skeleton"
import useHideTabBar from "@/shared/hooks/use-hide-tab-bar"
import { useEffect, useState } from "react"
import { ScrollView, Text } from "react-native"

/**
 * Главная странница приложения
 *
 * @returns
 */

export default function Index() {
	const [films, setFilms] = useState<IFilmsResponse["films"] | null>(null)
	const [loadingFilms, setLoadingFilms] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const load = async () => {
			setLoadingFilms(true)
			setError(null)
			try {
				const response = await filmApi.getFilms()
				setFilms(response.data.films)
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message)
				}
				console.log(error)
			} finally {
				setLoadingFilms(false)
			}
		}
		load()
	}, [])

	const { onScroll } = useHideTabBar()

	if (loadingFilms) return <FilmListSkeleton />

	const categoriesOfFilms = {
		fantasy: films?.filter((film) => film.genres.includes("фэнтези")) || [],
		triller: films?.filter((film) => film.genres.includes("триллер")) || [],
		premium: films?.filter((film) => film.name.includes("Интерстеллар") || film.name.includes("Сайлент Хилл")) || [],
		horror: films?.filter((film) => film.genres.includes("ужасы")) || [],
	}

	return (
		<ScrollView onScroll={onScroll} className="background flex-1">
			<Text className="text-2xl font-nunito font-bold mb-3 container">Фильмы</Text>

			{error && <Text className="text-red-500 text-lg">Ошибка: {error}</Text>}
			{films && films.length > 0 && (
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
