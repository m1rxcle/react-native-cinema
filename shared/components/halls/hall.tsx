import type { IFilmSchedule, IFilmSeance } from "@/@types/film.type"
import { useSeanceStore } from "@/shared/store/seance.store"
import { formatHallName } from "@/shared/utils/format-hall-names"
import { Ionicons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"

interface Props {
	schedule: IFilmSchedule
}

const Hall = ({ schedule }: Props) => {
	const { activeSeance, setActiveSeance } = useSeanceStore()

	if (!schedule) return null

	const groupedByHallName = schedule.seances.reduce(
		(acc, seance) => {
			const hallName = seance.hall.name
			if (!acc[hallName]) {
				acc[hallName] = []
			}

			acc[hallName].push(seance)

			return acc
		},
		{} as Record<string, IFilmSeance[]>,
	)

	const onPressSeance = (id: string) => {
		setActiveSeance(activeSeance === id ? null : id)
	}

	return (
		<View className="flex flex-col gap-2 mt-2 mb-2">
			{Object.entries(groupedByHallName).map(([hallName, seances]) => (
				<View key={hallName}>
					<Text className="font-nunito text-base font-semibold">{formatHallName(hallName)}</Text>

					<View className="flex flex-row gap-4 flex-wrap w-full">
						{seances.map((seance) => {
							const id = `${schedule.date}-${seance.hall.name}-${seance.time}`
							return (
								<Pressable
									onPress={() => onPressSeance(id)}
									key={id}
									className={`${activeSeance === id ? "bg-[#E10098] " : "bg-[#F3F3F3] "}  rounded-full `}
								>
									<View className="relative px-8 py-3">
										<Text
											className={`font-nunito font-bold text-xl ${activeSeance === id ? "text-white" : "text-black"}`}
											style={{
												transform: [{ translateX: activeSeance === id ? -1 : 0 }],
											}}
										>
											{seance.time}
										</Text>

										<Ionicons
											onPress={() => setActiveSeance("")}
											name="close"
											color="white"
											size={20}
											style={{
												marginLeft: 6,
												opacity: activeSeance === id ? 1 : 0,
												position: "absolute",
												top: "50%",
												right: 8,
											}}
										/>
									</View>
								</Pressable>
							)
						})}
					</View>
				</View>
			))}
		</View>
	)
}

export default Hall
