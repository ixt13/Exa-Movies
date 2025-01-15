import { create } from 'zustand'

interface iSearchForm {
	data: {
		genre: string | null
		movieType: number | null
		year: number | null
	}
	setGenre: (genre: string) => void
	setMovieType: (movieType: number) => void
	setYear: (year: number) => void
	reset: () => void
}

const countStore = create<iSearchForm>(set => ({
	data: {
		genre: null,
		movieType: null,
		year: null,
	},
	setGenre: genre => set(state => ({ data: { ...state.data, genre } })),
	setMovieType: movieType =>
		set(state => ({ data: { ...state.data, movieType } })),
	setYear: year => set(state => ({ data: { ...state.data, year } })),
	reset: () =>
		set(() => ({
			data: {
				genre: null,
				movieType: null,
				year: null,
			},
		})),
}))

export default countStore
