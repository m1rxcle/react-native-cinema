import type { IFilmScheduleResponse, IHall } from "@/@types"
import { getSeancePlaces } from "@/utils/get-seance-places"
import { useMemo } from "react"

export default function useGetHall(schedules: IFilmScheduleResponse["schedules"] | null, seanceId: string | string[]): IHall | null {
	const hall = useMemo(() => {
		if (!schedules) return
		return getSeancePlaces(schedules, seanceId[0])
	}, [schedules, seanceId])

	if (!hall) return null

	return hall
}
