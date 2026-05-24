import type { TCheckoutPayload } from "@/@types"
import { api } from "./client/api"

export const paymentApi = {
	pay: (payload: TCheckoutPayload) => api.post("/cinema/payment", payload),
}
