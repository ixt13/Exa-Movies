import { getMovieById } from '@/ApiReq/getMovieById/getMovieById'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'
import styles from './page.module.scss'
interface iMoviePage {
	movieId: number
}

export default async function MoviePage({
	params,
}: {
	params: Promise<iMoviePage>
}) {
	const { movieId } = await params

	const movie = await getMovieById(movieId)
	console.log(movie)
	return (
		<div className={styles.wrapper}>
			{' '}
			<Image
				className={styles.backgroundImage}
				src={movie ? movie?.backdrop.url : mockImage}
				alt={movie ? movie.name : ''}
				fill
				sizes='100%'
			></Image>
			<div className={styles.topContainer}>
				<div className={styles.leftSide}>
					<div className={styles.movieName}>
						<p>Base Name</p>
						<p>Alternative Name</p>
					</div>
					<div className={styles.image}>image</div>
					<button className={styles.trailerButton}>trailer Buuton</button>
				</div>
				<div className={styles.rightSide}>
					<div>
						{`Рейтинги: ${movie ? movie.rating.imdb : ''}
							${movie ? movie.rating.kp : ''}`}
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
						<p>{`Возраст: ${movie ? movie.ageRating : ''}`}</p>
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
		</div>
	)
}
