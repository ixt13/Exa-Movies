import { iMovieResponse } from '@/ApiReq/getMovieById/types'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'
import styles from './MoviePage.module.scss'

interface iMoviePageProps {
	movie: iMovieResponse | undefined
}

export default function MoviePage({ movie }: iMoviePageProps) {
	return (
		<div className={styles.wrapper}>
			<Image
				className={styles.backgroundImage}
				src={movie ? movie?.backdrop.url : mockImage}
				alt={movie ? movie.name : 'image poster'}
				fill
				sizes='100%'
			></Image>
			<div className={styles.topContainer}>
				<div className={styles.leftSide}>
					<div className={styles.movieName}>
						<h4>{movie ? movie.name : ''}</h4>
						<p>{movie ? movie.enName : ''}</p>
					</div>
					<div className={styles.image}>
						<Image
							src={movie ? movie.poster.url : mockImage}
							alt={movie ? movie.name : 'image poster'}
							fill
							sizes='100%'
							style={{ borderRadius: '4px' }}
						/>
					</div>

					<button className={styles.trailerButton}>{`Watch trailer`}</button>
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
