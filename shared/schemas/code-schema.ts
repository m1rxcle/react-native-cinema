import { z } from "zod"

export const OptCodeSchema = z.object({
	code: z
		.string()
		.transform((val) => val.replace(/\D/g, ""))
		.refine((val) => val.length === 6, {
			message: "Код должен содержать 6 цифр",
		}),
})

export type TOptCodeSchema = z.infer<typeof OptCodeSchema>
