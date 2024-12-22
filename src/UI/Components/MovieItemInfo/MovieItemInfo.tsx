import { iTodo } from '@/ApiReq/getMoviesUniversal/types'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'
import { FC } from 'react'
import { RatingInfo } from '../RatingInfo/RatingInfo'
import styles from './MovieItemInfo.module.scss'

interface iMovieInfo {
	movieInfo: iTodo
}

export const MovieItemInfo: FC<iMovieInfo> = ({ movieInfo }) => {
	const minutesConverter = (mins: number): string =>
		`${Math.floor(mins / 60)} ч ${mins % 60} мин`

	return (
		<div className={styles.movieItemInfo}>
			<div className={styles.movieItemInfoContent}>
				<div className={styles.movieItemInfoContentLeft}>
					<div className={styles.image}>
						<Image
							src={movieInfo.poster?.url || mockImage}
							alt={movieInfo.id.toString()}
							fill
							style={{ objectFit: 'cover' }}
							sizes='100%'
						/>
					</div>

					<div className={styles.movieItemInfoContentTextContainer}>
						<h3>{movieInfo.name}</h3>
						<p className={styles.firstDescription}>
							{(movieInfo.year, minutesConverter(movieInfo.movieLength))}
						</p>
						<div className={styles.secondDescription}>
							{movieInfo.countries.length
								? movieInfo.countries.map(object => object.name).join(', ')
								: ''}
						</div>
					</div>
				</div>

				<div className={styles.movieItemInfoRatings}>
					<RatingInfo icon='kinopoisk' rating={movieInfo.rating.kp} />
					<RatingInfo icon='imdb' rating={movieInfo.rating.imdb} />
				</div>
			</div>
			<div
				style={{
					borderTop: '1px solid currentColor  ',
					width: '100%',
					position: 'relative',
				}}
			></div>
		</div>
	)
}
