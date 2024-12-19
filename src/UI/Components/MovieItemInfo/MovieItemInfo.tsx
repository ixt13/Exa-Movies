import { iTodo } from '@/app/types'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'
import { FC } from 'react'
import { RatingInfo } from '../KinopoiskRating/KinopoiskRating'
import styles from './MovieItemInfo.module.scss'

interface iMovieInfo {
	movieInfo: iTodo
	key: number
}
export const MovieItemInfo: FC<iMovieInfo> = ({ movieInfo, key }) => {
	return (
		<div key={key} className={styles.movieItemInfo}>
			<div className={styles.movieItemInfoContent}>
				<div className={styles.movieItemInfoContentLeft}>
					<div className={styles.image}>
						<Image
							src={movieInfo.backdrop?.url || mockImage}
							alt={movieInfo.id.toString()}
							fill
							style={{ objectFit: 'cover' }}
							sizes='100%'
						/>
					</div>

					<div className={styles.movieItemInfoContentTextContainer}>
						<h3>{movieInfo.name}</h3>
						<p className={styles.firstDescription}>2011, 1 ч 52 мин</p>
						<p className={styles.secondDescription}>
							Франция • драма  Режиссёр: Оливье Накаш В ролях: Франсуа Клюзе,
							Омар Си
						</p>
					</div>
				</div>

				<div className={styles.movieItemInfoRatings}>
					<RatingInfo icon='kinopoisk' rating={movieInfo.rating.kp} />
					<RatingInfo icon='imdb' rating={movieInfo.rating.imdb} />
				</div>
			</div>
			<div
				style={{ borderTop: '1px solid currentColor  ', width: '100%' }}
			></div>
		</div>
	)
}
