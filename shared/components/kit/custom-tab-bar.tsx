import type { TabRouteNames } from "@/@types"
import { TABS_ICONS, TABS_ROUT_NAME } from "@/shared/constants/tab-bar.constants"
import { useTabBarStore } from "@/shared/store/tab-bar.store"
import { Ionicons } from "@expo/vector-icons"
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Dimensions, Text, TouchableOpacity, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
	const { hidden } = useTabBarStore()

	const translateX = useSharedValue(0)
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		}
	})
	const tabStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: withTiming(hidden ? 100 : 0, {
						duration: 300,
					}),
				},
				{
					scale: withTiming(hidden ? 0 : 1),
				},
			],
			opacity: withTiming(hidden ? 0 : 1, {
				duration: 300,
			}),
		}
	})

	const SCREEN_WIDTH = Dimensions.get("window").width

	const TAB_WIDTH = (SCREEN_WIDTH - 96) / 3

	return (
		<Animated.View
			style={[tabStyle]}
			className={`absolute left-0 right-0 bottom-4 py-4 background opacity-95 backdrop-blur-md mx-12 rounded-full border border-black  shadow-sm`}
		>
			<View className="relative flex flex-row items-center mx-auto">
				<Animated.View
					style={[
						{
							position: "absolute",
							backgroundColor: "#E10098",
							borderRadius: 100,
							height: 60,
							padding: 10,
							width: TAB_WIDTH,
						},
						animatedStyle,
					]}
				/>
				{state.routes.map((route, index) => {
					const isFocused = state.index === index

					const onPress = () => {
						navigation.navigate(route.name)

						translateX.value = withSpring(index * TAB_WIDTH, {
							dampingRatio: 0.6,
						})
					}

					const name = route.name as TabRouteNames

					return (
						<TouchableOpacity style={{ width: TAB_WIDTH, alignItems: "center" }} key={route.key} onPress={onPress}>
							<View className="flex gap-1 flex-col items-center justify-center ">
								<Ionicons name={TABS_ICONS[name]} size={24} color={!isFocused ? "black" : "white"} />
								<Text className={`${!isFocused ? "text-black" : "text-white"} text-xs font-nunito font-bold`}>{TABS_ROUT_NAME[name]}</Text>
							</View>
						</TouchableOpacity>
					)
				})}
			</View>
		</Animated.View>
	)
}

export default CustomTabBar
