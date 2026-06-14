import type { IFilmResponse, IFilmsResponse } from "@/@types/response.type"
import { api } from "./client/api"

export const filmApi = {
	getFilms: () => api.get<IFilmsResponse>("/cinema/films"),
	getFilmById: (id: string) => api.get<IFilmResponse>(`/cinema/film/${id}`),
}
