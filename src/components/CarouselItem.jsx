import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import btnPlay from '../assets/static/btn-play.png';
import btnPlus from '../assets/static/btn-plus.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={cover}
      alt={title}
    />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src={btnPlay}
          alt='Play Icon'
        />
        <img
          className='carousel-item__details--img'
          src={btnPlus}
          alt='Plus Icon'
        />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} minutos`}</p>
    </div>
  </div>
);

export default CarouselItem;
