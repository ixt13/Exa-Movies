import { KinopoiskResponse } from '@/ApiReq/getMoviesUniversal/types'
import { PaginationProvider } from '@/Providers/PaginationProvider/PaginationProvider'
import { CustomCarousel } from '@/UI/Components/CustomCarousel/CustomCarousel'
import { MovieItemInfo } from '@/UI/Components/MovieItemInfo/MovieItemInfo'
import styles from './HomeScreen.module.scss'

interface iHomeScreenProps {
	mainPageMovies: KinopoiskResponse
	carouselMovies: KinopoiskResponse
}

export default function HomeScreen({
	mainPageMovies,
	carouselMovies,
}: iHomeScreenProps) {
	return (
		<div className={styles.homeWrapper}>
			{/* <Carousel carouselMovies={carouselMovies}></Carousel> */}
			<p style={{ color: 'white' }}>Актуально</p>
			<CustomCarousel carouselMovies={carouselMovies} scrollAmount={140 * 3} />

			<div className={styles.homeContentContainer}>
				<h1>250 лучших фильмов</h1>
				<div
					style={{ borderTop: '1px solid currentColor  ', width: '100%' }}
				></div>
				{mainPageMovies.docs
					? mainPageMovies.docs.map(el => (
							<MovieItemInfo movieInfo={el} key={el.id} />
					  ))
					: ''}
				<PaginationProvider
					page={mainPageMovies.page || 1}
					pages={mainPageMovies.pages || 1}
				/>
			</div>
		</div>
	)
}
