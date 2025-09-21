 
import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';
const SingleCarousel = ({ data, type , typetwo}) => {
  const [slide, setSlide] = useState(0);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const scrollTimeout = useRef(null);
  const ref = useRef(null);

  const manualScroll = (e) => {
    if (isProgrammaticScroll || scrollTimeout.current) return;
    scrollTimeout.current = setTimeout(() => {
      const scrollLeft = e.target.scrollLeft;
      const slideWidth = e.target.clientWidth;
      const index = Math.round(scrollLeft / slideWidth);
      setSlide(index);
      scrollTimeout.current = null;
    }, 50);
  };

  const next = () => setSlide(slide === data.length - 1 ? 0 : slide + 1);
  const prev = () => setSlide(slide === 0 ? data.length - 1 : slide - 1);

  const scrollToSlide = (index) => {
    if (ref.current) {
      setIsProgrammaticScroll(true);
      ref.current.scrollTo({
        left: index * ref.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToSlide(slide);
  }, [slide]);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [slide]);

  useEffect(() => {
    const resetFlag = () => setIsProgrammaticScroll(false);
    if (ref.current) ref.current.addEventListener('scrollend', resetFlag);
    return () => {
      if (ref.current) ref.current.removeEventListener('scrollend', resetFlag);
    };
  }, []);

  return (
    <div className={`carousel-head ${typetwo}`}>
      <div className='carousel-sbhead'>
        <button className='left_btn' onClick={prev}>
          <span className='left_arrow'></span>
        </button>
        <button className='right_btn' onClick={next}>
          <span className='right_arrow'></span>
        </button>
        <div className='carousel'>
          <div className={`carousel-track ${type}`} ref={ref} onScroll={manualScroll}>
            {data.map((item, idx) => (
              <img src={item.src} alt={item.alt} key={idx} className='slide' />
            ))}
          </div>
        </div>
      </div>
      <span className={`indicators ${type}`}>
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`indicator ${slide === idx ? 'active' : 'indicator_notactive'}`}
          />
        ))}
      </span>
    </div>
  );
};
export const Carousel = ({ data, datatwo, datathree, datafour }) => {
  return (
    <div className='carousel-container carouselTab-container'>
      <div className='carousel-subcontainer carouselTab-subcontainer'>
        
              <SingleCarousel data={data} type='carousel-img' typetwo='carousel-headimg'/>
              <SingleCarousel data={datatwo} type='carouselTab-img' typetwo='carouselTabhead-img'/>
              <SingleCarousel data={datathree} type='carouselLab-img' typetwo='carouselLabhead-img'/>
              <SingleCarousel data={datafour} type='carouselLarge-img' typetwo='carouselLargehead-img'/>
      </div>
    </div>
  );
};

