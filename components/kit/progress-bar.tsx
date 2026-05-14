import type { TProgressStep } from "@/@types"
import { MAX_PROGRESS_BAR_STEPS } from "@/constants/app.constants"
import { Text, View } from "react-native"

interface Props {
	step: TProgressStep
	className?: string
}

const ProgressBar = ({ step, className }: Props) => {
	return (
		<View className={`flex items-start gap-2 ${className}`}>
			<Text className="text-base font-nunito font-semibold">
				Шаг {step} из {MAX_PROGRESS_BAR_STEPS}
			</Text>
			<View className="w-full bg-[#EBEBEB] relative h-1 rounded-full">
				<View style={{ width: `${(step / MAX_PROGRESS_BAR_STEPS) * 100}%` }} className="bg-[#E843B2] absolute top-0 left-0 h-full rounded-full" />
			</View>
		</View>
	)
}

export default ProgressBar
