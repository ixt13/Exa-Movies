'use client'

import { iTodo } from '@/ApiReq/getMoviesUniversal/types'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'

import Link from 'next/link'
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
		<Link href={`/movie/${movieInfo.id}`} className={styles.movieItemInfo}>
			<div className={styles.movieItemInfoContent}>
				<div className={styles.movieItemInfoContentLeft}>
					<div className={styles.image}>
						<Image
							className={styles.entranceAnimation}
							src={movieInfo.poster?.previewUrl || mockImage}
							alt={movieInfo.name || 'image poster'}
							fill
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
		</Link>
	)
}
