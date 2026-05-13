import { useTabBarStore } from "@/store/tab-bar.store"
import { useRef } from "react"
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native"

export default function useHideTabBar() {
	const { setHidden } = useTabBarStore()

	const lastY = useRef(0)

	const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const y = e.nativeEvent.contentOffset.y

		if (y > lastY.current + 5) setHidden(true)
		else if (y < lastY.current - 5) setHidden(false)

		lastY.current = y
	}

	return { onScroll }
}
