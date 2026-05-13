/**
 * Функция для форматирования названий залов
 * Принимает название зала
 * Возвращает название зала
 *
 *
 * @param name
 *
 * @returns
 */

export const formatHallName = (name: string): string => {
	switch (name) {
		case "Red":
			return "Красный зал"
		case "Blue":
			return "Синий зал"
		case "Green":
			return "Зеленый зал"
		default:
			return "Фиолетовый зал"
	}
}
