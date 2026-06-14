import { OrderStatusEnum, type IOrder } from "@/@types/order.type"
import { useOrderStore } from "@/shared/store/order.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("order-store", () => {
	beforeEach(() => {
		useOrderStore.setState({
			lastOrder: null,
		})
	})

	test("has initial state", () => {
		const state = useOrderStore.getState()

		expect(state.lastOrder).toBeNull()
	})

	test("setLastOrder update state", () => {
		const order: IOrder = {
			_id: "1",
			film: {
				id: "1",
				name: "Dune",
				originalName: "Dune",
				description: "Dune",
				releaseDate: "01.01.2001",
				actors: [{ id: "1", photo: "photo", fullName: "Kali", professions: "ACTOR" }],
				directors: [{ id: "1", photo: "photo", fullName: "Kali", professions: "DIRECTOR" }],
				runtime: "1",
				ageRating: "G",
				genres: ["фэнтези"],
				userRatings: {
					kinopoisk: 1,
					imdb: 1,
				},
				img: "img",
				country: {
					name: "Russia",
					code: "RU",
					code2: "RU",
					id: "1",
				},
			},
			orderNumber: 1,
			person: { firstname: "Dmitriy", lastname: "Gorbachev", middlename: "Vladimirovich", phone: "89212632799" },
			status: OrderStatusEnum.paid,
			tickets: [
				{
					_id: "1",
					column: 1,
					row: 1,
					filmId: "1",
					orderId: "1",
					seance: {
						date: "01.01.2001",
						time: "12:00",
					},
				},
			],
		}

		useOrderStore.getState().setLastOrder(order)

		expect(useOrderStore.getState().lastOrder).toEqual(order)
	})
})
