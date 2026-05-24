import type { IFilmScheduleResponse, IHall } from "@/@types"
import { getSeancePlaces } from "@/shared/utils/get-seance-places"
import normalizeLocalParams from "@/shared/utils/normalize-local-params"
import { useMemo } from "react"

export default function useGetHall(schedules: IFilmScheduleResponse["schedules"] | null, seanceId: string | string[]): IHall | null {
	const normalizeSeanceId = normalizeLocalParams(seanceId)

	const hall = useMemo(() => {
		if (!schedules) return
		return getSeancePlaces(schedules, normalizeSeanceId)
	}, [schedules, normalizeSeanceId])

	if (!hall) return null

	return hall
}
