import type { Place } from "@/@types"

export const formattedPlaces = (places: Place[][], activeSeance: string, filmId: string | string[], hallName: string) => {
	let seatCounter = 1

	return places.map((row, rowIndex) => {
		return row.map((place) => {
			return {
				id: `${filmId}-${hallName}-${activeSeance}-${rowIndex + 1}-${seatCounter}`,
				rowNumber: rowIndex + 1,
				seatNumber: seatCounter++,
				...place,
			}
		})
	})
}
