import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import "./global.css"

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Nunito: require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
	})

	useEffect(() => {
		if (error || loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

	return (
		<SafeAreaView className="min-h-screen background">
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaView>
	)
}
