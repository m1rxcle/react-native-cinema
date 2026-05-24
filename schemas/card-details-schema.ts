import { z } from "zod"

const onlyDigits = (value: string) => value.replace(/\D/g, "")

export const cardDetailsSchema = z.object({
	cardNumber: z
		.string()
		.transform(onlyDigits)
		.refine((val) => val.length === 16, "Номер карты должен содержать 16 цифр"),
	month: z
		.string()
		.transform(onlyDigits)
		.refine((val) => val.length === 2, "Месяц должен содержать 2 цифры")
		.refine((val) => Number(val) >= 1 && Number(val) <= 12, "Месяц должен быть от 01 до 12"),
	year: z
		.string()
		.transform(onlyDigits)
		.refine((val) => val.length === 2, "Год должен содержать 2 цифры"),
	cvv: z
		.string()
		.transform(onlyDigits)
		.refine((val) => val.length >= 3 && val.length <= 4, "CVV должен содержать от 3 до 4 цифр"),
})

export type TCardDetails = z.infer<typeof cardDetailsSchema>
