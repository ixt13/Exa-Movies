import { iTodo } from '@/app/types'

import { MovieItemInfo } from '@/UI/Components/MovieItemInfo/MovieItemInfo'
import styles from './HomeScreen.module.scss'

interface iHomeScreenProps {
	movies: iTodo[] | []
}

export default function HomeScreen({ movies }: iHomeScreenProps) {
	if (movies.length <= 0) {
		return
	}
	return (
		<div className={styles.homeWrapper}>
			<h1>250 лучших фильмов</h1>
			<div
				style={{ borderTop: '1px solid currentColor  ', width: '100%' }}
			></div>
			{movies?.map((el, index) => (
				<MovieItemInfo movieInfo={el} key={el.id} />
			))}
		</div>
	)
}
