'use client'
import { iTodo } from '@/ApiReq/getMoviesUniversal/types'
import Image from 'next/image'
import Link from 'next/link'

import styles from './CarouselItem.module.scss'

interface iCarouselItemdata {
	data: iTodo
}

export const CarouselItem = ({ data }: iCarouselItemdata) => {
	return (
		<Link
			href={`/movie/${data.id}`}
			key={data.id}
			className={styles.carouselItem}
		>
			<Image
				className={styles.entranceAnimation}
				src={
					data && data.poster
						? data.poster.url
						: 'https://cdn.pixabay.com/photo/2020/11/07/01/28/abstract-5719221_1280.jpg'
				}
				alt={data.name}
				fill
				quality={40}
				sizes='100%'
			/>
		</Link>
	)
}
