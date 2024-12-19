import HomeScreen from '@/UI/Screens/Home/HomeScreen'
import { Suspense } from 'react'
import { iTodo, KinopoiskResponse } from './types'

export async function getMainPageMovies(
	queryParamsProps: Record<string, string> = {}
): Promise<iTodo[] | []> {
	const { SECRET_TOKEN } = process.env
	const baseUrl = 'https://api.kinopoisk.dev/v1.4/movie'

	const url = new URL(baseUrl)

	const queryParams = { ...queryParamsProps, token: SECRET_TOKEN }

	Object.entries(queryParams).forEach(([key, value]) => {
		if (value) {
			url.searchParams.append(key, value)
		}
	})

	try {
		const response = await fetch(url.toString(), {
			cache: 'default',
			next: { revalidate: 180 },
		})

		if (response.ok) {
			const data: KinopoiskResponse = await response.json()
			return data.docs
		} else {
			return []
		}
	} catch (error) {
		return []
	}
}

export default async function Home() {
	const movies = await getMainPageMovies({ lists: 'top250' })
	return (
		<Suspense
			fallback={
				<div style={{ color: 'red', fontSize: '40px' }}>Loading...</div>
			}
		>
			<HomeScreen movies={movies} />
		</Suspense>
	)
}
