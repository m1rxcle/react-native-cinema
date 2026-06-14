import type { IFilm } from "./film.type"
import type { IPerson } from "./user.type"

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

export interface ICreditCardInfo {
	cardNumber: string
	month: string
	year: string
	cvv: string
}
