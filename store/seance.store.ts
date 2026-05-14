import { create } from "zustand"

type SeanceStore = {
	seanceId: string
	activeSeance: string
	setSeanceId: (id: string) => void
	setActiveSeance: (id: string) => void
}

export const useSeanceStore = create<SeanceStore>((set) => ({
	seanceId: "",
	activeSeance: "",
	setSeanceId: (id: string) => set({ seanceId: id }),
	setActiveSeance: (id: string) => set({ activeSeance: id }),
}))
