'use client'

import { iTodo, KinopoiskResponse } from '@/ApiReq/getMoviesUniversal/types'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ArrowIcon } from '../Svg/ArrowIcon/ArrowIcon'
import { DotIcon } from '../Svg/DotIcon/DotIcon'
import styles from './CustomCarousel.module.scss'

interface iCustomCarousel {
	carouselMovies: KinopoiskResponse
	scrollAmount: number
}

export const CustomCarousel = ({
	carouselMovies,
	scrollAmount,
}: iCustomCarousel) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [itemsContainer] = useState<iTodo[]>(carouselMovies.docs || [])
	const dotsLength = Math.max(
		Math.ceil(((carouselMovies.docs?.length ?? 0) - 8) / 3 + 1),
		1
	)

	const [scrollRange, setScrollRange] = useState<number>(0)

	const handleScroll = (direction?: 'right' | 'left', coords?: number) => {
		if (!containerRef.current) return

		const maxScroll = (dotsLength - 1) * scrollAmount
		let newScrollValue = scrollRange

		if (coords !== undefined) {
			newScrollValue = Math.min(Math.max(coords, 0), maxScroll)
		} else if (direction === 'left') {
			newScrollValue = Math.max(scrollRange - scrollAmount, 0)
		} else if (direction === 'right') {
			newScrollValue = Math.min(scrollRange + scrollAmount, maxScroll)
		}

		containerRef.current.scrollLeft = newScrollValue
		setScrollRange(newScrollValue)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.containerAndDots}>
				<div className={styles.containerAndButtons}>
					<button
						className={styles.button}
						onClick={() => handleScroll('left')}
					>
						<ArrowIcon />
					</button>
					<div ref={containerRef} className={styles.container}>
						{itemsContainer.map(el => (
							<div key={el.id} className={styles.carouselItem}>
								<Image
									src={el.poster ? el.poster.url : mockImage}
									alt={el.name}
									fill
									sizes='100%'
								/>
							</div>
						))}
					</div>
					<button
						className={styles.button}
						onClick={() => handleScroll('right')}
					>
						<ArrowIcon
							className={`${styles.arrowIcon} ${styles.translateDegree}`}
						/>
					</button>
				</div>

				<div className={styles.navDots}>
					{Array(dotsLength)
						.fill(null)
						.map((_, index) => (
							<span key={index}>
								<DotIcon
									onClick={() => handleScroll(undefined, index * scrollAmount)}
									className={`${styles.dotIcon} ${
										index === scrollRange / scrollAmount &&
										styles.dotIconSelected
									}`}
								/>
							</span>
						))}
				</div>
			</div>
		</div>
	)
}
