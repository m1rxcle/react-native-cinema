import type { IFilmScheduleResponse, IHall } from "@/@types"

/**
 * Функция для получения зала по активному сеансу и id фильма
 * Принимает данные о сеансах и активный сеанс
 * Возвращает название зала
 *
 * @param data
 * @param seanceId
 * @returns
 */

export const getSeancePlaces = (schedules: IFilmScheduleResponse["schedules"], seanceId: string): IHall | undefined => {
	if (!schedules) return
	const serializedSeances = schedules.flatMap((schedule) => {
		return schedule.seances.map((seance) => ({
			...seance,
			date: schedule.date,
		}))
	})

	const currentSeance = serializedSeances.find((seance) => `${seance.date}-${seance.hall.name}-${seance.time}` === seanceId)

	const hall = currentSeance?.hall

	return hall
}
