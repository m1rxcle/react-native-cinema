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
