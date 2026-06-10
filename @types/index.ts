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
	row: number
	seat: number
	price: number
	type: PlaceTypeEnum
}

export enum PlaceTypeEnum {
	BLOCKED = "blocked",
	ECONOM = "econom",
	COMFORT = "comfort",
}

export type TTicket = {
	id: string
	filmName: string
	seat: {
		row: number
		seat: number
		price: number
	}
	seance: string
}

export interface IUserDetails {
	firstName: string
	lastName: string
	middleName: string
	phone: string
	city: string
	email: string
}

export interface ICreditCardInfo {
	cardNumber: string
	month: string
	year: string
	cvv: string
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

export type TCheckoutPayload = {
	filmId: string
	person: IPerson
	debitCard: {
		pan: string
		expireDate: string
		cvv: string
	}
	seance: {
		date: string
		time: string
	}
	tickets: {
		row: number
		column: number
	}[]
}

export interface IPerson {
	firstname: string
	lastname: string
	middlename: string
	phone: string
}

export interface IOrder {
	_id: string
	film: IFilm
	orderNumber: number
	person: IPerson
	status: OrderStatusEnum
	tickets: {
		_id: string
		column: number
		row: number
		filmId: string
		orderId: string
		seance: {
			date: string
			time: string
		}
	}[]
}

export enum OrderStatusEnum {
	paid = "paid",
	canceled = "canceled",
}
