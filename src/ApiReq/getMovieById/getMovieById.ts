import { iMovieResponse } from '@/ApiReq/getMovieById/types'

export async function getMovieById(
	id: number
): Promise<iMovieResponse | undefined> {
	const { SECRET_TOKEN } = process.env
	const baseUrl = `https://api.kinopoisk.dev/v1.4/movie/${id}`

	const url = new URL(baseUrl)

	if (SECRET_TOKEN) {
		url.searchParams.append('token', SECRET_TOKEN)
	}

	try {
		console.log(url.toString())
		const response = await fetch(url.toString(), {
			cache: 'default',
			next: { revalidate: 180 },
		})

		if (response.ok) {
			const data = await response.json()

			return data
		} else {
			console.log(response)
			return undefined
		}
	} catch (error) {
		console.log(error)
		return undefined
	}
}
