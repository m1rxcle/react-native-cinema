import type { IFilmScheduleResponse } from "@/@types"

export const getSeancePlaces = (data: IFilmScheduleResponse, seanceId: string) => {
	if (!data) return
	const serializedSeances = data.schedules.flatMap((schedule) => {
		return schedule.seances.map((seance) => ({
			...seance,
			date: schedule.date,
		}))
	})

	const currentSeance = serializedSeances.find((seance) => `${seance.date}-${seance.hall.name}-${seance.time}` === seanceId)

	const places = currentSeance?.hall

	return places
}
