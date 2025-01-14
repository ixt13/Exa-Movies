'use client'

import countStore from '@/zustand/countStore'

export default function page() {
	const { data, setGenre, setMovieType, setYear } = countStore()
	return (
		<div>
			<div>{`${data.genre},${data.movieType},${data.year}`}</div>
			<button
				onClick={() => {
					setGenre('banan')
				}}
			>
				setGenre
			</button>
			<button
				onClick={() => {
					setMovieType(8)
				}}
			>
				setMovieType
			</button>
			<button
				onClick={() => {
					setYear(1997)
				}}
			>
				setYear
			</button>
		</div>
	)
}
