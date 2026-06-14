import type { IFilmScheduleResponse } from "@/@types/response.type"
import { api } from "./client/api"

export const scheduleApi = {
	getSchedule: (filmId: string) => api.get<IFilmScheduleResponse>(`/cinema/film/${filmId}/schedule`),
}
