import type { IFilm, IFilmSchedule } from "./film.type"
import type { IUser } from "./user.type"

export interface IFilmsResponse {
	films: IFilm[]
	status: string
}

export interface IFilmResponse {
	film: IFilm
	status: string
}

export interface IFilmScheduleResponse {
	schedules: IFilmSchedule[]
}

export interface IGetSessionResponse {
	success: boolean
	reason: string
	user: IUser
}
