import { ImdbIcon } from '../Svg/Imdbcon/ImdbIcon'
import { KinopoiskIcon } from '../Svg/KinopoiskIcon/KinopoiskIcon'

import styles from './RatingInfo.module.scss'

interface iRatingInfo {
	icon: 'kinopoisk' | 'imdb'
	rating: number
}
export const RatingInfo = ({ icon, rating }: iRatingInfo) => {
	return (
		<div className={styles.ratingInfo}>
			{icon === 'kinopoisk' ? (
				<KinopoiskIcon className={styles.ratingInfoIcon} />
			) : (
				<ImdbIcon className={styles.ratingInfoIcon} />
			)}

			<p>{rating > 0.1 ? rating.toFixed(1) : '--'}</p>
		</div>
	)
}
