import { SERVER_API } from "@/shared/constants/app.constants"
import { useState } from "react"
import { Image, View } from "react-native"

interface Props {
	filmImg: string
	size?: "small" | "large"
	className?: string
}

/**
 * Компонент для отображения обложки фильма
 * принимает параметры size и filmImg
 * size - размер обложки
 * filmImg - ссылка на обложку
 *
 * @param {Props} { size = "large", filmImg }: { size: "small" | "large", filmImg: string }
 *
 * @returns {React.JSX.Element}
 */

const FilmImage = ({ size = "large", filmImg, className }: Props) => {
	const [loadedFilmPic, setLoadedFilmPic] = useState(false)

	return (
		<View className={`${size === "small" ? "h-60" : "h-80"} relative w-full  mb-2 shadow-[0_2px_2px_0_rgba(0,0,0,0.15)] shadow-black ${className}`}>
			<Image
				blurRadius={10}
				source={{ uri: `${SERVER_API}${filmImg}` }}
				className="w-full h-full rounded-2xl absolute top-0 left-0"
				alt="film_img"
				style={{ objectFit: "cover" }}
			/>

			<Image
				source={{ uri: `${SERVER_API}${filmImg}` }}
				className="w-full h-full rounded-2xl  absolute top-0 left-0"
				alt="film_img"
				onLoad={() => setLoadedFilmPic(true)}
				style={{ objectFit: "cover", opacity: loadedFilmPic ? 1 : 0 }}
			/>
		</View>
	)
}

export default FilmImage
