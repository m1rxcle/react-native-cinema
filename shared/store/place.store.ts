import type { TSelectedPlace } from "@/@types/ticket.type"
import { create } from "zustand"

type PlaceStore = {
	selectedPlaceList: TSelectedPlace[]
	toggleSelectedPlace: (place: TSelectedPlace) => void
	resetPlaces: () => void
}

export const usePlaceStore = create<PlaceStore>((set, get) => ({
	selectedPlaceList: [],
	toggleSelectedPlace: (place: TSelectedPlace) => {
		const selectedPlaceList = get().selectedPlaceList

		const isPlaceSelected = selectedPlaceList.find((p) => p.id === place.id)

		if (isPlaceSelected) {
			set({ selectedPlaceList: selectedPlaceList.filter((p) => p.id !== place.id) })
		} else {
			set({ selectedPlaceList: [...selectedPlaceList, place] })
		}
	},
	resetPlaces: () => set({ selectedPlaceList: [] }),
}))
