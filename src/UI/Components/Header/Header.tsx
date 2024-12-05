import { AnimeIcon } from '../Svg/AnimeIcon/AnimeIcon'
import { CartoonIcon } from '../Svg/CartoonIcon/CartoonIcon'
import { MovieIcon } from '../Svg/MovieIcon/MovieIcon'
import { SerialsIcon } from '../Svg/SerialsIcon/SerialsIcon'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Exa Movies</h1>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<p>Фильмы</p>
						<MovieIcon style={{ height: '20px', width: '20px' }} />
					</li>
					<li>
						<p>Сериалы</p>
						<SerialsIcon style={{ height: '20px', width: '20px' }} />
					</li>
					<li>
						<p>Мульфильмы</p>
						<CartoonIcon style={{ height: '22px', width: '22px' }} />
					</li>
					<li>
						<p>Аниме</p>
						<AnimeIcon style={{ height: '22px', width: '22px' }} />
					</li>
				</ul>
			</nav>
		</header>
	)
}
