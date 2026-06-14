import type { IGetSessionResponse } from "@/@types/response.type"
import { api } from "./client/api"

export const userApi = {
	getUser: () => api.get<IGetSessionResponse>("/users/session"),
}
