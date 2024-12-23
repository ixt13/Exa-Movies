'use client'

import { KinopoiskResponse } from '@/ApiReq/getMoviesUniversal/types'
import mockImage from '@/assets/orig.jpg'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Carousel.module.scss'
import './SwiperStyles.css'
interface iCarousel {
	carouselMovies: KinopoiskResponse
}

export const Carousel = ({ carouselMovies }: iCarousel) => {
	return (
		<Swiper
			modules={[EffectCoverflow, Pagination, Navigation]}
			grabCursor
			loop
			className={styles.swiper}
			effect={'coverflow'}
			centeredSlides={true}
			slidesPerView={5}
			loopAdditionalSlides={5}
			initialSlide={0}
			coverflowEffect={{
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 2,
			}}
			spaceBetween={40}
			pagination={{
				clickable: true,
				el: `.${styles.customPagination}`,
			}}
		>
			{carouselMovies.docs
				? carouselMovies.docs.map(el => (
						<SwiperSlide key={el.id} className={styles.slide}>
							<Image
								src={el.poster?.previewUrl ? el.poster?.previewUrl : mockImage}
								alt={el.name}
								fill
								priority
								sizes='100%'
								placeholder={'empty'}
								onError={() => {
									console.log('Image failed to load')
								}}
							></Image>
						</SwiperSlide>
				  ))
				: ''}

			<div className={styles.customPagination} />
		</Swiper>
	)
}
