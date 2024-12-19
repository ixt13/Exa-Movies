interface genre {
	name: string
}
interface rating {
	imdb: number
	kp: number
}
interface votes {
	imdb: number
	kp: number
}
interface backdrop {
	previewUrl: string
	url: string
}

interface countries {
	name: string
}

export interface iTodo {
	id: number
	genres: genre
	movieLength: number
	name: string
	rating: rating
	year: number
	ageRating: number
	backdrop?: backdrop
	countries: countries[]
}
export interface KinopoiskResponse {
	docs: iTodo[]
}

export interface iHomeScreenProps {
	movies: iTodo[]
}
