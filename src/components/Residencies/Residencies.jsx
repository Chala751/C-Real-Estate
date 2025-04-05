import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Residencies.css'

const residenciesData = [
    {
      id: 1,
      imageUrl: 'r1.jpg',
      cost: '$1,200,000',
      title: 'Luxury Villa',
      description: 'Beautiful villa with ocean view'
    },
    {
      id: 2,
      imageUrl: 'r2.jpg',
      cost: '$850,000',
      title: 'Penthouse',
      description: 'Luxury living at its finest'
    },
    {
      id: 3,
      imageUrl: 'r3.jpg',
      cost: '$950,000',
      title: 'Country House',
      description: 'Peaceful retreat in the countryside'
    },
    {
      id: 4,
      imageUrl: 'r4.jpg',
      cost: '$850,000',
      title: 'Penthouse',
      description: 'Luxury living at its finest'
    },
    {
      id: 5,
      imageUrl: 'r5.jpg',
      cost: '$250,000',
      title: 'Apartement',
      description: 'Luxury living at its finest'
    },
    {
        id: 6,
        imageUrl: 'r6.jpg',
        cost: '$350,000',
        title: 'Modern Apartetement',
        description: 'Luxury living at its finest'
      },
    ];

const Residencies = () => {
  return (
    <section className="residencies-wrapper">
    <div className="paddings innerWidth residencies-container">
      <div className="residencies-small-head">
        <p>Best Choise</p>
      </div>
      <div className="residencies-head">
        <h2>Our Residencies</h2>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {residenciesData.map((residency) => (
            <SwiperSlide key={residency.id}>
              <div className="residency-card">
                <img src={residency.imageUrl} alt={residency.title} />
                <div className="residency-details">
                  <div className="residency-cost">{residency.cost}</div>
                  <h3>{residency.title}</h3>
                  <p>{residency.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies
