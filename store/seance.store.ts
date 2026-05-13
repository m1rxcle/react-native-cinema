import { create } from "zustand"

type SeanceStore = {
	seanceId: string
	activeSeance: string | null
	setSeanceId: (id: string) => void
	setActiveSeance: (id: string | null) => void
}

export const useSeanceStore = create<SeanceStore>((set) => ({
	seanceId: "",
	activeSeance: null,
	setSeanceId: (id: string) => set({ seanceId: id }),
	setActiveSeance: (id: string | null) => set({ activeSeance: id }),
}))
