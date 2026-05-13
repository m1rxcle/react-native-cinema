import { formatDate } from "@/utils/format-date"
import { Pressable, Text, type PressableProps } from "react-native"

interface Props extends PressableProps {
	date: string
	className?: string
}

const DateBadge = ({ date, className, ...props }: Props) => {
	return (
		<Pressable {...props} className={`rounded-full px-3 py-2 ${className}`}>
			<Text className="text-lg font-bold font-nunito">{formatDate(date)}</Text>
		</Pressable>
	)
}

export default DateBadge
