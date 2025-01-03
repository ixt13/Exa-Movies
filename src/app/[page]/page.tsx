import { getMoviesUniversal } from '@/ApiReq/getMoviesUniversal/getMoviesUniversal'
import HomeScreen from '@/UI/Screens/Home/HomeScreen'

import { Suspense } from 'react'
import { PageProps } from './types'

export default async function Home({ params }: { params: Promise<PageProps> }) {
	const { page } = await params

	const currentYear = new Date().getFullYear() - 1

	const mainPageMovies = await getMoviesUniversal({
		queryParamsProps: { lists: ['top250'], page: page.toString() },
	})
	console.log(mainPageMovies)
	const carouselMovies = await getMoviesUniversal({
		queryParamsProps: {
			notNullFields: [
				'name',
				'premiere.world',
				'backdrop.url',
				'movieLength',
				'rating.kp',
				'rating.imdb',
			],
			type: 'movie',
			year: [currentYear.toString()],
			'rating.imdb': ['5.5-10'],
			'rating.kp': ['5.5-10'],
			limit: '39',
		},
	})
	console.log('render')
	return (
		<Suspense
			fallback={
				<div style={{ color: 'red', fontSize: '40px' }}>Loading...</div>
			}
		>
			<HomeScreen
				mainPageMovies={mainPageMovies}
				carouselMovies={carouselMovies}
			/>
		</Suspense>
	)
}
