import { create } from "zustand"

type PlaceStore = {
	activePlaceList: string[]
	setActivePlace: (id: string) => void
}

export const usePlaceStore = create<PlaceStore>((set, get) => ({
	activePlace: [],
	setActivePlace: (id: string) => set({}),
}))
