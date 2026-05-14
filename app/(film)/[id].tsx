import type { IFilmResponse, IFilmScheduleResponse } from "@/@types"
import DateBadge from "@/components/badges/date-badge"
import FilmImage from "@/components/films/film-image"
import FilmNameWithGenres from "@/components/films/film-name-with-genres"
import FilmRating from "@/components/films/film-rating"
import Hall from "@/components/halls/hall"
import ButtonBack from "@/components/kit/button-back"
import FilmSkeleton from "@/components/skeletons/film-skeleton"
import Button from "@/components/ui/button"
import { SERVER_API } from "@/constants/app.constants"
import useFetch from "@/hooks/use-fetch"
import { useSeanceStore } from "@/store/seance.store"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { ScrollView, Text, View } from "react-native"

export default function FilmScreen() {
	const { id } = useLocalSearchParams()
	const router = useRouter()
	const { activeSeance } = useSeanceStore()

	const { data: filmData, loading: loadingFilmData } = useFetch<IFilmResponse>(`${SERVER_API}/cinema/film/${id}`)
	const { data: filmSchedule, loading: loadingSchedule } = useFetch<IFilmScheduleResponse>(`${SERVER_API}/cinema/film/${id}/schedule`)
	const [activeBadge, setActiveBadge] = useState(0)

	if (!filmData && loadingFilmData) return <FilmSkeleton />
	if (!filmData) return null
	const film = filmData.film

	if (!filmSchedule && loadingSchedule) return <FilmSkeleton />
	if (!filmSchedule) return null
	const schedules = filmSchedule.schedules

	return (
		<View className="background relative flex-1">
			<ScrollView contentContainerClassName="pb-32">
				<View className="mb-8 container">
					<ButtonBack>О фильме</ButtonBack>
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
						{!loadingSchedule &&
							schedules &&
							schedules.length > 0 &&
							schedules.map((schedule, index) => {
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
					<View className="container">{schedules ? <Hall schedule={schedules[activeBadge]} /> : <Text>Ничего нет</Text>}</View>
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
