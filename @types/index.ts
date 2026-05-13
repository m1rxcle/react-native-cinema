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

export interface IFilmSchedule {
	date: string
	seances: IFilmSeance[]
}

export interface IFilmSeance {
	hall: {
		name: string
		places: Place[][]
	}
	time: string
}

export interface IHall {
	name: string
	places: Place[][]
}

export interface Place {
	price: number
	type: PlaceTypeEnum
}

export enum PlaceTypeEnum {
	BLOCKED = "BLOCKED",
	ECONOM = "ECONOM",
	COMFORT = "COMFORT",
}

export interface IFilm {
	id: string
	name: string
	originalName: string
	description: string
	releaseDate: string
	actors: FilmStuff[]
	directors: FilmStuff[]
	runtime: string
	ageRating: AgeRatings
	genres: string[]
	userRatings: {
		kinopoisk: number
		imdb: number
	}
	img: string
	country: {
		name: string
		code: string
		code2: string
		id: string
	}
}

export interface FilmStuff {
	id: string
	photo: string
	fullName: string
	professions: Profession
}
const professions = {
	ACTOR: "ACTOR",
	DIRECTOR: "DIRECTOR",
} as const

export type Profession = (typeof professions)[keyof typeof professions]

const ageRatings = {
	G: "G",
	PG: "PG",
	PG_13: "PG-13",
	R: "R",
	NC_17: "NC-17",
} as const

export type AgeRatings = (typeof ageRatings)[keyof typeof ageRatings]

export type TabRouteNames = "index" | "tickets" | "profile"
