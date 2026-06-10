import type { IFilmResponse, IFilmScheduleResponse } from "@/@types"
import { filmApi } from "@/api/film.api"
import { scheduleApi } from "@/api/schedule.api"
import DateBadge from "@/shared/components/badges/date-badge"
import FilmImage from "@/shared/components/films/film-image"
import FilmNameWithGenres from "@/shared/components/films/film-name-with-genres"
import FilmRating from "@/shared/components/films/film-rating"
import Hall from "@/shared/components/halls/hall"
import ButtonBack from "@/shared/components/kit/button-back"
import FilmSkeleton from "@/shared/components/skeletons/film-skeleton"
import Button from "@/shared/components/ui/button"
import { useSeanceStore } from "@/shared/store/seance.store"
import normalizeLocalParams from "@/shared/utils/normalize-local-params"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { ScrollView, Text, View } from "react-native"

export default function FilmScreen() {
	const { id } = useLocalSearchParams()
	const router = useRouter()

	const normalizeId = normalizeLocalParams(id)

	const [film, setFilm] = useState<IFilmResponse["film"] | null>(null)
	const [loadingFilm, setLoadingFilm] = useState(false)
	const [errorGetFilm, setErrorGetFilm] = useState<string | null>(null)

	const [filmSchedule, setFilmSchedule] = useState<IFilmScheduleResponse["schedules"] | null>(null)
	const [loadingFilmSchedule, setLoadingFilmSchedule] = useState(false)
	const [errorGetFilmSchedule, setErrorGetFilmSchedule] = useState<string | null>(null)

	const [activeBadge, setActiveBadge] = useState(0)

	useEffect(() => {
		const load = async () => {
			setLoadingFilm(true)
			setErrorGetFilm(null)
			try {
				const response = await filmApi.getFilmById(normalizeId)
				setFilm(response.data.film)
			} catch (error) {
				console.log(error)
				if (error instanceof Error) {
					setErrorGetFilm(error.message)
				}
			} finally {
				setLoadingFilm(false)
			}
		}
		load()
	}, [normalizeId])

	useEffect(() => {
		const load = async () => {
			setLoadingFilmSchedule(true)
			setErrorGetFilmSchedule(null)
			try {
				const response = await scheduleApi.getSchedule(normalizeId)
				setFilmSchedule(response.data.schedules)
			} catch (error) {
				if (error instanceof Error) {
					setErrorGetFilmSchedule(error.message)
				}
				console.log(error)
			} finally {
				setLoadingFilmSchedule(false)
			}
		}

		load()
	}, [normalizeId])

	const { activeSeance, setActiveSeance } = useSeanceStore()

	if (errorGetFilm) return <Text>{errorGetFilm}</Text>
	if (errorGetFilmSchedule) return <Text>{errorGetFilmSchedule}</Text>

	if (loadingFilm && !film) return <FilmSkeleton />
	if (!film) return null

	if (loadingFilmSchedule && !filmSchedule) return <FilmSkeleton />
	if (!filmSchedule) return null

	return (
		<View className="background relative flex-1">
			<ScrollView contentContainerClassName="pb-32">
				<View className="mb-8 container">
					<ButtonBack onPress={() => setActiveSeance("")}>О фильме</ButtonBack>
				</View>
				<View className="flex flex-col gap-4 container mb-6">
					<View className="relative">
						<FilmImage filmImg={film.img || ""} />
						<FilmRating rating={film.userRatings.kinopoisk || 0} />
					</View>
					<FilmNameWithGenres className="text-2xl font-nunito font-semibold" name={film.name || ""} genres={film.genres || []} />
					<Text className="font-semibold font-nunito text-lg">{film.description}</Text>
				</View>
				<View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="bg-[#F3F3F3] p-2 rounded-full ml-4 mb-6">
						{!loadingFilmSchedule &&
							!errorGetFilmSchedule &&
							!errorGetFilm &&
							filmSchedule &&
							filmSchedule.length > 0 &&
							filmSchedule.map((schedule, index) => {
								return (
									<DateBadge
										key={index}
										style={
											activeBadge === index
												? {
														backgroundColor: "#F3F3F3",
														boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
														elevation: 5,
													}
												: {}
										}
										onPress={() => setActiveBadge(index)}
										date={schedule.date}
									/>
								)
							})}
					</ScrollView>
					<View className="container">{filmSchedule ? <Hall schedule={filmSchedule[activeBadge]} /> : <Text>Ничего нет</Text>}</View>
				</View>
			</ScrollView>
			<View className="absolute bottom-0 left-0 right-0 px-14">
				<Button
					style={{ backgroundColor: activeSeance ? "#000000" : "gray" }}
					disabled={!activeSeance}
					onPress={() => {
						router.push({
							pathname: `/(film)/seance-places`,
							params: {
								filmId: film.id,
								filmName: film.name,
								seanceId: activeSeance,
							},
						})
					}}
				>
					{!activeSeance ? "Выберите время сеанса" : "Продолжить"}
				</Button>
			</View>
		</View>
	)
}
