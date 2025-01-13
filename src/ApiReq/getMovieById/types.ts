export interface iMovieResponse {
	id: number
	externalId: {
		imdb: string
		kpHD: string
		tmdb: number
	}
	rating: { imdb: number; kp: number }
	name: string
	alternativeName: string
	enName: string
	ageRating: number
	audience: {
		count: number
		country: string
	}[]
	backdrop: {
		previewUrl: string
		url: string
	}
	budget: {
		currency: string
		value: number
	}
	countries: { name: string }[]
	createdAt: string
	description: string
	fees: {
		russia: {
			value: number
			currency: string
		}
		usa: {
			value: number
			currency: string
		}
		world: {
			value: number
			currency: string
		}
	}
	genres: { name: string }[]
	isSeries: boolean
	lists: string[]
	logo: {
		previewUrl: string
		url: string
	}
	movieLength: number
	names: {
		name: string
		language: string
		type: string | null
	}[]

	persons: {
		id: number
		photo: string
		name: string
		enName: string
		description: string
		profession: string
	}[]
	videos: {
		trailers: { name: string; site: string; url: string }[]
	}
}
