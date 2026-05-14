import type { IPlace } from "@/@types"

/**
 * Функция для форматирования мест
 * Принимает массив мест, активный сеанс и id фильма
 * Возвращает массив мест
 *
 *
 * @param places - массив мест IPlace[][]
 * @param activeSeance - активный сеанс string
 * @param filmId - id фильма string
 * @param hallName - название зала string
 * @param filmName - название фильма string
 * @returns
 */

export const formattedPlaces = (
	places: IPlace[][],
	activeSeance: string,
	filmId: string | string[],
	filmName: string | string[],
	hallName: string,
) => {
	let seatCounter = 1

	return places.map((row, rowIndex) => {
		return row.map((place) => {
			return {
				...place,
				id: `${filmId}-${hallName}-${activeSeance}-${rowIndex + 1}-${seatCounter}`,
				rowNumber: rowIndex + 1,
				seatNumber: seatCounter++,
				filmName: filmName.toString(),
			}
		})
	})
}
