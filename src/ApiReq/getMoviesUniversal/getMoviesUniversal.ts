import { iTodo, KinopoiskResponse } from './types'

interface iParams {
	lists?: string[]
	notNullFields?: string[]
	type?: string
	year?: string[]
	'rating.kp'?: string[]
	'rating.imdb'?: string[]
	limit?: string
}
interface iqueryParamsProps {
	queryParamsProps: iParams
}
export async function getMoviesUniversal({
	queryParamsProps,
}: iqueryParamsProps): Promise<iTodo[] | []> {
	const { SECRET_TOKEN } = process.env
	const baseUrl = 'https://api.kinopoisk.dev/v1.4/movie'

	const url = new URL(baseUrl)

	const queryParams = { ...queryParamsProps, token: SECRET_TOKEN }

	Object.entries(queryParams).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach(v => url.searchParams.append(key, v))
		} else if (value) {
			url.searchParams.append(key, value)
		}
	})

	try {
		const response = await fetch(url.toString(), {
			cache: 'default',
			next: { revalidate: 180 },
		})
		console.log(response)
		if (response.ok) {
			const data: KinopoiskResponse = await response.json()
			console.log(data)
			return data.docs
		} else {
			return []
		}
	} catch (error) {
		console.log(error)
		return []
	}
}
