import type { IGetSessionResponse } from "@/@types/response.type"
import { userApi } from "@/api/user.api"
import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { ActivityIndicator, Text, View } from "react-native"

export default function Profile() {
	const [user, setUser] = useState<IGetSessionResponse | null>(null)
	const [loadingUser, setLoadingUser] = useState(true)

	const router = useRouter()

	useEffect(() => {
		const load = async () => {
			setLoadingUser(true)

			try {
				const response = await userApi.getUser()
				setUser(response.data)
			} catch (error) {
				setUser(null)
				console.log(error)
			} finally {
				setLoadingUser(false)
			}
		}

		load()
	}, [])

	useEffect(() => {
		if (!loadingUser && !user) {
			router.replace({ pathname: "/(auth)/register" })
		}
	}, [loadingUser, user, router])

	if (loadingUser) {
		return (
			<View className="flex-1 background">
				<ActivityIndicator size="large" className=" text-black mx-auto h-full" />
			</View>
		)
	}

	if (!user) {
		return null
	}

	return (
		<View className="background flex-1 container">
			<Text>Профиль</Text>
		</View>
	)
}
