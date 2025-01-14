import { getMoviesUniversal } from '@/ApiReq/getMoviesUniversal/getMoviesUniversal'
import { SearchPage } from '@/UI/Screens/SearchPage/SearchPage'

export default async function page() {
	const movies = getMoviesUniversal({ queryParamsProps: {} })
	return <SearchPage />
}
