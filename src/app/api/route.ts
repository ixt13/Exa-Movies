import { iParams } from '@/ApiReq/getMoviesUniversal/getMoviesUniversal'
import { NextResponse } from 'next/server'
import { URL } from 'url'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const { SECRET_TOKEN } = process.env
	const rawParams = Object.fromEntries(searchParams.entries())

	const params: iParams = {
		year: rawParams.year ? [rawParams.year] : undefined,
		typeNumber: [rawParams.movieType],
		'genres.name': [rawParams['genres.name'].toLowerCase()],
		token: SECRET_TOKEN,
	}

	const baseUrl = 'https://api.kinopoisk.dev/v1.4/movie'
	const url = new URL(baseUrl)

	Object.entries(params).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach(v => url.searchParams.append(key, v))
		} else if (value) {
			url.searchParams.append(key, value)
		}
	})

	const decodedUrl = decodeURIComponent(url.toString())

	const response = await fetch(decodedUrl)

	const data = await response.json()

	return NextResponse.json(data)
}
