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
		places: IPlace[][]
	}
	time: string
}

export interface IHall {
	name: string
	places: IPlace[][]
}

export interface IPlace {
	price: number
	type: PlaceTypeEnum
}

export interface IPlaceAfterFormat {
	id: string
	rowNumber: number
	seatNumber: number
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

export type TProgressStep = 1 | 2 | 3 | 4

export const placeTypeLabel: Record<PlaceTypeEnum, string> = {
	[PlaceTypeEnum.BLOCKED]: "Недоступно",
	[PlaceTypeEnum.ECONOM]: "Эконом",
	[PlaceTypeEnum.COMFORT]: "Комфорт",
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
