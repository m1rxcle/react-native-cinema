import { SERVER_API } from "@/constants/app.constants"
import { create } from "axios"

export const api = create({
	baseURL: SERVER_API,
	headers: {
		"Content-Type": "application/json",
	},
})
