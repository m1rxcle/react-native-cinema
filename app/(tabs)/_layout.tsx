import CustomTabBar from "@/shared/components/kit/custom-tab-bar"
import { Tabs } from "expo-router"

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
			tabBar={(props) => <CustomTabBar {...props} />}
		>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="tickets" />
			<Tabs.Screen name="profile" />
		</Tabs>
	)
}
