'use client'
import { useState } from 'react'
import { HeaderPopup } from '../HeaderPopup/HeaderPopup'
import { AnimeIcon } from '../Svg/AnimeIcon/AnimeIcon'
import { CartoonIcon } from '../Svg/CartoonIcon/CartoonIcon'
import { MovieIcon } from '../Svg/MovieIcon/MovieIcon'
import { SerialsIcon } from '../Svg/SerialsIcon/SerialsIcon'
import styles from './Header.module.scss'

export const Header = () => {
	const [isPopup, setIsPopup] = useState<boolean>(false)
	const [isOverflow, setIsOverflow] = useState<boolean>(false)

	const handleTogglePopupVisability = () => {
		setIsPopup(prevState => !prevState)

		if (isPopup) {
			setIsOverflow(false)
		}
	}
	return (
		<header className={styles.header}>
			<div className={styles.title}>
				<h1>Exa Movies</h1>
			</div>

			<nav className={styles.navigation}>
				<ul>
					<li onClick={handleTogglePopupVisability}>
						<p>Фильмы</p>
						<MovieIcon style={{ height: '20px', width: '20px' }} />
					</li>
					<li>
						<p>Сериалы</p>
						<SerialsIcon style={{ height: '20px', width: '20px' }} />
					</li>
					<li>
						<p>Мульфильмы</p>
						<CartoonIcon style={{ height: '30px', width: '30px' }} />
					</li>
					<li>
						<p>Аниме</p>
						<AnimeIcon style={{ height: '22px', width: '20px' }} />
					</li>
				</ul>
			</nav>

			<HeaderPopup
				className={` ${styles.popup} ${
					isPopup ? styles.popupVisible : styles.popupHidden
				}  ${isOverflow ? styles.popupOverflowAuto : ''}`}
				setIsOverflow={setIsOverflow}
				isPopup={isPopup}
			/>
		</header>
	)
}
