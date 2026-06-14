import { z } from "zod"

export const RegisterSchema = z.object({
	phone: z
		.string()
		.transform((val) => val.replace(/\D/g, ""))
		.refine((val) => val.length === 11, "Номер телефона должен содержать 11 цифр"),
})

export type TRegisterSchema = z.infer<typeof RegisterSchema>
