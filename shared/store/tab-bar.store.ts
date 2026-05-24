import { create } from "zustand"

type TabBarStore = {
	hidden: boolean
	setHidden: (value: boolean) => void
}

export const useTabBarStore = create<TabBarStore>((set) => ({
	hidden: false,
	setHidden: (value) => set({ hidden: value }),
}))
