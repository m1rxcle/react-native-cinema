import type { FilmStuff } from "@/@types/film.type"
import { SERVER_API } from "@/shared/constants/app.constants"
import { useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"

interface Props {
	actors: FilmStuff[]
}

const FilmActorsBlock = ({ actors }: Props) => {
	const [errorToShowActorPic, setErrorToShowActorPic] = useState<Record<string, boolean>>({})

	return (
		<View className="flex flex-col gap-2 mt-2 mb-2">
			<Text className="font-nunito text-lg font-semibold">Актёры</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="flex gap-2">
				{actors.map((actor) => {
					const actorFirstName = actor.fullName.split(" ")[0]
					const actorSecondName = actor.fullName.split(" ")[1]
					const imageUrl = `${SERVER_API}${actor.photo}`
					const isFailedToLoad = errorToShowActorPic[actor.id]

					return (
						<View key={actor.id} className="flex flex-col items-center gap-2">
							<Image
								source={isFailedToLoad ? require("@/assets/images/empty/actor-pic.png") : { uri: imageUrl }}
								className="w-20 h-20 rounded-full"
								alt="actor"
								style={{ objectFit: "cover" }}
								onError={() => {
									setErrorToShowActorPic((prev) => {
										return { ...prev, [actor.id]: true }
									})
								}}
							/>
							<View className="flex flex-col items-center">
								<Text className="font-nunito text-gray-500 text-sm">{actorFirstName}</Text>
								<Text className="font-nunito text-gray-500 text-sm">{actorSecondName}</Text>
							</View>
						</View>
					)
				})}
			</ScrollView>
		</View>
	)
}

export default FilmActorsBlock
