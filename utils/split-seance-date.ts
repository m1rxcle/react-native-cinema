import { formatHallName } from "./format-hall-names"

export function splitSeanceDate(seanceDate: string) {
	const [rawDate, rawHall, rawTime] = seanceDate.split("-")

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
