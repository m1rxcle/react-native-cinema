import { PlaceTypeEnum, type TSelectedPlace } from "@/@types/ticket.type"
import { usePlaceStore } from "@/shared/store/place.store"
import { beforeEach, describe, expect, test } from "vitest"

describe("place-store", () => {
	beforeEach(() => {
		usePlaceStore.setState({
			selectedPlaceList: [],
		})
	})

	test("has initial state", () => {
		const state = usePlaceStore.getState()

		expect(state.selectedPlaceList).toEqual([])
	})

	test("resetPlaces reset state", () => {
		usePlaceStore.getState().resetPlaces()

		expect(usePlaceStore.getState().selectedPlaceList).toEqual([])
	})

	test("toggleSelectedPlace add place", () => {
		const place: TSelectedPlace = {
			id: "1",
			row: 1,
			seat: 1,
			price: 100,
			type: PlaceTypeEnum.ECONOM,
		}

		usePlaceStore.getState().toggleSelectedPlace(place)

		expect(usePlaceStore.getState().selectedPlaceList).toEqual([place])
	})

	test("toggleSelectedPlace remove place", () => {
		const place: TSelectedPlace = {
			id: "1",
			row: 1,
			seat: 1,
			price: 100,
			type: PlaceTypeEnum.ECONOM,
		}

		usePlaceStore.getState().toggleSelectedPlace(place)

		usePlaceStore.getState().toggleSelectedPlace(place)

		expect(usePlaceStore.getState().selectedPlaceList).toEqual([])
	})
})
