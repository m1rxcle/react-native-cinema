import type { IHall } from "./ticket.type"

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

export interface FilmStuff {
	id: string
	photo: string
	fullName: string
	professions: Profession
}

export interface IFilmSchedule {
	date: string
	seances: IFilmSeance[]
}

export interface IFilmSeance {
	hall: IHall
	time: string
}
