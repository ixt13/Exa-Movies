import { getMovieById } from '@/ApiReq/getMovieById/getMovieById'
import MoviePage from '@/UI/Screens/MoviePage/MoviePage'
interface iMoviePage {
	movieId: number
}
export default async function page({
	params,
}: {
	params: Promise<iMoviePage>
}) {
	const { movieId } = await params
	const movie = await getMovieById(movieId)
	return <MoviePage movie={movie} />
}
