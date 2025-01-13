'use client'

import { iTodo, KinopoiskResponse } from '@/ApiReq/getMoviesUniversal/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { SkeletonBackground } from '../SkeletonBackground/SkeletonBackground'
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
	const [isLoadingCount, setIsLoadingCount] = useState<number>(0)

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

	console.log(isLoadingCount)
	console.log(itemsContainer)
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
							<Link
								href={`/movie/${el.id}`}
								key={el.id}
								className={styles.carouselItem}
							>
								<Image
									className={styles.entranceAnimation}
									src={
										el && el.poster
											? el.poster.url
											: 'https://cdn.pixabay.com/photo/2020/11/07/01/28/abstract-5719221_1280.jpg'
									}
									alt={el.name}
									fill
									sizes='100%'
									onLoad={() => {
										setIsLoadingCount(prevState => (prevState += 1))
									}}
								/>

								{isLoadingCount !== itemsContainer.length && (
									<SkeletonBackground />
								)}
							</Link>
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
