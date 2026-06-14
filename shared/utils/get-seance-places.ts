/**
 * Функция для получения зала по активному сеансу и id фильма
 * Принимает данные о сеансах и активный сеанс
 * Возвращает название зала
 *
 * @param data
 * @param seanceId
 * @returns
 */

import type { IFilmScheduleResponse } from "@/@types/response.type"
import type { IHall } from "@/@types/ticket.type"

export const getSeanceHall = (schedules: IFilmScheduleResponse["schedules"], seanceId: string): IHall | undefined => {
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
