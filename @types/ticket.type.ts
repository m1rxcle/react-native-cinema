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

export interface IHall {
	name: string
	places: IPlace[][]
}

export interface IPlace {
	price: number
	type: PlaceTypeEnum
}

export type TSelectedPlace = {
	id: string
	price: number
	type: PlaceTypeEnum
	row: number
	seat: number
}

export enum PlaceTypeEnum {
	BLOCKED = "blocked",
	ECONOM = "econom",
	COMFORT = "comfort",
}

export const placeTypeLabel: Record<PlaceTypeEnum, string> = {
	[PlaceTypeEnum.BLOCKED]: "Недоступно",
	[PlaceTypeEnum.ECONOM]: "Эконом",
	[PlaceTypeEnum.COMFORT]: "Комфорт",
}

export interface IPlaceAfterFormat {
	id: string
	row: number
	seat: number
	price: number
	type: PlaceTypeEnum
}
