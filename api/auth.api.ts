import { api } from "./client/api"

export const authApi = {
	createOptCode: (phone: string) => api.post("/auth/otp", { phone }),
}
