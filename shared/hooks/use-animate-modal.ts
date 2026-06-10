import { useEffect } from "react"
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export default function useAnimateModal(visible: boolean) {
	const translateY = useSharedValue(0)

	useEffect(() => {
		translateY.value = withTiming(visible ? 0 : 300, { duration: 300 })
	}, [visible, translateY])

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: translateY.value }],
	}))

	return animatedStyle
}
