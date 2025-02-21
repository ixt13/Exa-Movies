import { KinopoiskResponse } from './types'

export interface iParams {
	lists?: string[]
	notNullFields?: string[]
	type?: string
	year?: string[]
	'rating.kp'?: string[]
	'rating.imdb'?: string[]
	limit?: string
	page?: string
	id?: string[]
	'genres.name': string[]
	typeNumber?: string[]
	token?: string
}
export interface iqueryParamsProps {
	queryParamsProps: iParams
}
export async function getMoviesUniversal({
	queryParamsProps,
}: iqueryParamsProps): Promise<KinopoiskResponse> {
	const { SECRET_TOKEN } = process.env
	const baseUrl = `https://api.kinopoisk.dev/v1.4/movie${
		queryParamsProps.id ? '/' + queryParamsProps.id : ''
	}`

	const url = new URL(baseUrl)

	const queryParams = { ...queryParamsProps, token: SECRET_TOKEN }

	Object.entries(queryParams).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach(v => url.searchParams.append(key, v))
		} else if (value) {
			url.searchParams.append(key, value)
		}
	})
	console.log(url)
	try {
		const response = await fetch(url.toString(), {
			cache: 'default',
			next: { revalidate: 180 },
		})

		if (response.ok) {
			const data: KinopoiskResponse = await response.json()

			return data
		} else {
			const data: KinopoiskResponse = await response.json()
			console.log(data)
			return data
		}
	} catch (error) {
		console.log(error)
		return {}
	}
}
