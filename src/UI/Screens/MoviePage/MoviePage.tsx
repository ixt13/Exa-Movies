'use client'

import { iMovieResponse } from '@/ApiReq/getMovieById/types'

import Image from 'next/image'
import styles from './MoviePage.module.scss'
interface iMoviePageProps {
	movie: iMovieResponse | undefined
}

export default function MoviePage({ movie }: iMoviePageProps) {
	return (
		<div className={styles.wrapper}>
			{movie && movie.backdrop?.url && (
				<Image
					className={`${styles.backgroundImage} ${styles.entranceAnimationSecond}`}
					src={movie.backdrop.url}
					alt={movie?.name || 'image poster'}
					fill
					sizes='100%'
				/>
			)}

			<div className={styles.topContainer}>
				<div className={styles.leftSide}>
					<div className={styles.movieName}>
						<h4>{movie ? movie.name : ''}</h4>
						<p>{movie ? movie.enName : ''}</p>
					</div>
					<div className={styles.image}>
						{movie && movie.poster.url && (
							<Image
								className={styles.entranceAnimation}
								src={movie.poster.url}
								alt={movie ? movie.name : 'image poster'}
								fill
								sizes='100%'
								style={{ borderRadius: '4px' }}
							/>
						)}
					</div>
					<div>
						{movie?.videos?.trailers?.[0]?.url ? (
							<a
								className={styles.trailerButton}
								href={movie.videos.trailers[0].url}
								target='_blank'
								rel='noopener noreferrer'
							>
								Смотреть трейлер
							</a>
						) : (
							<div className={styles.epmtyTrailer}>Трейлера нет</div>
						)}
					</div>
				</div>
				<div className={styles.rightSide}>
					<div>
						{`Рейтинги: ${movie ? movie.rating.imdb + ` imdb` : ''},
							${movie ? movie.rating.kp + ` kp` : ''}`}
					</div>
					<div>
						Дата выхода:{' '}
						{movie && movie.createdAt
							? new Date(movie.createdAt).toLocaleDateString('ru-RU', {
									day: '2-digit',
									month: 'long',
									year: 'numeric',
							  })
							: ''}
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '4px',
						}}
					>
						{`Страна: `}
						{movie
							? movie.countries.map((el, index) => <p key={index}>{el.name}</p>)
							: ''}
					</div>

					<div>
						<p>{`Возраст: ${movie ? movie.ageRating + '+' : ''}`}</p>
					</div>
					<div>
						<p>{`Время: ${movie ? movie.movieLength + ` min` : ''}`}</p>
					</div>

					<div>
						В ролях актеры:{' '}
						{movie
							? movie.persons
									.filter((el, index) => index < 7) // Оставляем только первые 7 элементов
									.map((el, index) => (
										<span key={index}>
											{el.name}
											{index < Math.min(6, movie.persons.length - 1)
												? ', '
												: ''}
										</span>
									))
							: ''}
					</div>
				</div>
			</div>
			<div className={styles.botContainer}>
				<h3>Про что фильм «Movie Name»:</h3>
				<p>{movie ? movie.description : ''}</p>
			</div>
		</div>
	)
}
