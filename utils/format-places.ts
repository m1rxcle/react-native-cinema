import type { Place } from "@/@types"

/**
 * Функция для форматирования мест
 * Принимает массив мест, активный сеанс и id фильма
 * Возвращает массив мест
 *
 *
 * @param places - массив мест Place[][]
 * @param activeSeance - активный сеанс string
 * @param filmId - id фильма string
 * @param hallName - название зала string
 * @returns
 */

export const formattedPlaces = (places: Place[][], activeSeance: string, filmId: string | string[], hallName: string) => {
	let seatCounter = 1

	return places.map((row, rowIndex) => {
		return row.map((place) => {
			return {
				...place,
				id: `${filmId}-${hallName}-${activeSeance}-${rowIndex + 1}-${seatCounter}`,
				rowNumber: rowIndex + 1,
				seatNumber: seatCounter++,
			}
		})
	})
}
