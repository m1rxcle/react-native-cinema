import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps {
	buttonClassName?: string
	children: React.ReactNode
}

const Button = ({ children, buttonClassName, ...props }: Props) => {
	return (
		<TouchableOpacity {...props} className={`bg-black px-3 py-6 rounded-full mt-2 ${buttonClassName || ""}`}>
			<Text className={`text-white text-center font-nunito `}>{children}</Text>
		</TouchableOpacity>
	)
}

export default Button
