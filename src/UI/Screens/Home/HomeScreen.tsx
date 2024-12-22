import { iTodo } from '@/ApiReq/getMoviesUniversal/types'
import { Carousel } from '@/UI/Components/Carousel/Carousel'
import { MovieItemInfo } from '@/UI/Components/MovieItemInfo/MovieItemInfo'
import styles from './HomeScreen.module.scss'

interface iHomeScreenProps {
	mainPageMovies: iTodo[] | []
	carouselMovies: iTodo[] | []
}

export default function HomeScreen({
	mainPageMovies,
	carouselMovies,
}: iHomeScreenProps) {
	return (
		<div className={styles.homeWrapper}>
			<div className={styles.test}>
				<Carousel carouselMovies={carouselMovies}></Carousel>
			</div>

			<div className={styles.homeContentContainer}>
				<h1>250 лучших фильмов</h1>
				<div
					style={{ borderTop: '1px solid currentColor  ', width: '100%' }}
				></div>
				{mainPageMovies?.map(el => (
					<MovieItemInfo movieInfo={el} key={el.id} />
				))}
			</div>
		</div>
	)
}
