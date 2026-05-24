import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps {
	children: React.ReactNode
}

const Button = ({ children, ...props }: Props) => {
	return (
		<TouchableOpacity {...props} className="bg-black px-3 py-6 rounded-full mt-2">
			<Text className="text-white text-center font-nunito">{children}</Text>
		</TouchableOpacity>
	)
}

export default Button
