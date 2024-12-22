interface genre {
	name: string
}
interface rating {
	imdb: number
	kp: number
}

interface poster {
	previewUrl: string
	url: string
}

interface countries {
	name: string
}

export interface KinopoiskResponse {
	docs: iTodo[]
}

export interface iHomeScreenProps {
	movies: iTodo[]
}
export interface iTodo {
	id: number
	genres: genre
	movieLength: number
	name: string
	rating: rating
	year: number
	ageRating: number
	poster?: poster
	countries: countries[]
}
