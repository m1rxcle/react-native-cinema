import { useEffect, useState } from "react"

export default function useFetch<T>(url: string) {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<T | undefined>(undefined)
	const [error, setError] = useState<string | null>(null)
	const [reason, setReason] = useState<string | null>(null)

	const fn = async (url: string): Promise<void> => {
		setLoading(true)
		setError(null)
		try {
			const response = await fetch(url, {
				priority: "high",
				method: "GET",
			})
			if (!response.ok) {
				setError(`Ошибка: ${response.status}`)
				setReason(response.statusText)
			}
			const result = await response.json()
			setData(result)
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message)
			}
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fn(url)
	}, [url])

	return { data, loading, error, reason }
}
