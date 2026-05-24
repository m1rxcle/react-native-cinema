import type { IFilmResponse, IFilmsResponse } from "@/@types"
import { api } from "./client/api"

export const filmApi = {
	getFilms: () => api.get<IFilmsResponse>("/cinema/films"),
	getFilmById: (id: string) => api.get<IFilmResponse>(`/cinema/film/${id}`),
}
