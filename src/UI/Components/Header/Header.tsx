'use client'
import countStore from '@/zustand/countStore'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { HeaderPopup } from '../HeaderPopup/HeaderPopup'
import { AnimeIcon } from '../Svg/AnimeIcon/AnimeIcon'
import { CartoonIcon } from '../Svg/CartoonIcon/CartoonIcon'
import { MovieIcon } from '../Svg/MovieIcon/MovieIcon'
import { SerialsIcon } from '../Svg/SerialsIcon/SerialsIcon'
import styles from './Header.module.scss'

export const Header = () => {
	const { setGenre, setMovieType, setYear, data, reset } = countStore()
	const [isPopup, setIsPopup] = useState<boolean>(false)
	const isHoverRef = useRef({ isHover: false })
	const isTypeOfMovieRef = useRef(null)
	const handleMouseLeave = () => {
		// Задержка перед закрытием popup
		setTimeout(() => {
			if (!isHoverRef.current.isHover) {
				setIsPopup(false)
			}
		}, 50)
	}

	useEffect(() => {
		if (!isPopup && !isTypeOfMovieRef) {
			handleMouseLeave()
		}
		if (!isPopup) {
			reset()
		}
	}, [isPopup])

	useEffect(() => {})
	return (
		<header className={styles.header}>
			<Link href={'/home/1'} className={styles.title}>
				<h1>Exa Movies</h1>
			</Link>
			<nav className={styles.navigation}>
				<ul className={styles.navList} ref={isTypeOfMovieRef}>
					<li
						className={`${styles.navItem} ${
							data.movieType === 1 && styles.liSelected
						}`}
						onClick={() => {
							setIsPopup(true)
							setMovieType(1)
						}}
						onMouseLeave={handleMouseLeave}
					>
						<p>Фильмы</p>
						<MovieIcon style={{ height: '20px', width: '20px' }} />
					</li>
					<li
						className={`${styles.navItem} ${
							data.movieType === 2 && styles.liSelected
						}`}
						onClick={e => {
							setIsPopup(true)
							setMovieType(2)
						}}
						onMouseLeave={handleMouseLeave}
					>
						<p>Сериалы</p>
						<SerialsIcon style={{ height: '20px', width: '20px' }} />
					</li>
					<li
						className={`${styles.navItem} ${
							data.movieType === 3 && styles.liSelected
						}`}
						onClick={e => {
							setIsPopup(true)
							setMovieType(3)
						}}
						onMouseLeave={handleMouseLeave}
					>
						<p>Мульфильмы</p>
						<CartoonIcon style={{ height: '30px', width: '30px' }} />
					</li>
					<li
						className={`${styles.navItem} ${
							data.movieType === 4 && styles.liSelected
						}`}
						onClick={e => {
							setIsPopup(true)
							setMovieType(4)
						}}
						onMouseLeave={handleMouseLeave}
					>
						<p>Аниме</p>
						<AnimeIcon style={{ height: '22px', width: '20px' }} />
					</li>
				</ul>
			</nav>
			<HeaderPopup
				setIsPopup={setIsPopup}
				isHoverRef={isHoverRef}
				setGenre={setGenre}
				setYear={setYear}
				isPopup={isPopup}
			/>
		</header>
	)
}
