import { z } from "zod"

export const userDetailsSchema = z.object({
	firstName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
	lastName: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
	middleName: z.string().min(2, "Отчество должно содержать минимум 2 символа"),
	phone: z.string().min(10, "Номер телефона должен содержать минимум 10 символов"),
	city: z.string().min(2, "Город должен содержать минимум 2 символа"),
	email: z.email("Некорректный формат электронной почты"),
})

export type TUserDetails = z.infer<typeof userDetailsSchema>
