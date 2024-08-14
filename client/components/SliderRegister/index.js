import React from 'react';
import './style.scss';

export default () => {

  return (
    <div>
      <swiper-container
        space-between="10"
        slides-per-view="1"
        loop="true"
        style={{ marginLeft: '100px', width: '600px', marginTop: '100px', height: '300px', borderRadius: '10px' }}
      >
        <swiper-slide style={{ height: '500px' }}>
          <div className='blockSlide'>
            <p className='textOne'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style={{ height: '500px' }}>
          <div className='blockSlide'>
            <p className='textOne'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style={{ height: '500px' }}>
          <div className='blockSlide'>
            <p className='textOne'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </swiper-slide>

      </swiper-container>
    </div>
  )
}
