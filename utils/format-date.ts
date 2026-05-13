/**
 * Функция для форматирования даты
 * Принимает дату в формате dd.mm.yyyy
 * Возвращает дату в формате WD DD MMM
 *
 * @param date - Дата в формате dd.mm.yyyy
 * @returns - Дата в формате WD DD MMM
 */

export const formatDate = (date: string): string => {
	const [day, month, year] = date.split(".")

	const convertTotDate = new Date(Number(year) + 2000, Number(month) - 1, Number(day))

	const formattedDate = convertTotDate.toLocaleDateString("ru-RU", {
		weekday: "short",
		day: "numeric",
		month: "short",
	})

	return formattedDate
}
