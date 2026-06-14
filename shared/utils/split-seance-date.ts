import { formatHallName } from "./format-hall-names"

/**
 *  Функция которая разбивает id сеанса
 *  @example "01.01.2001-Red-12:00"
 *  возвращает объект данных каждого типа или undefined если не передали данные
 *
 * @param seanceDate
 * @returns  {date: string, hall: string, time: string}
 */

export function splitSeanceDate(seanceDate: string) {
	if (!seanceDate) return

	const [rawDate, rawHall, rawTime] = seanceDate.split("-")

	if (!rawDate || !rawHall || !rawTime) {
		return "Invalid seance"
	}

	const [day, month, year] = rawDate.split(".")

	const dateObj = new Date(Number(year) + 2000, Number(month) - 1, Number(day))

	const formattedDate = dateObj.toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "long",
	})

	return {
		date: formattedDate,
		hall: formatHallName(rawHall),
		time: rawTime,
	}
}
