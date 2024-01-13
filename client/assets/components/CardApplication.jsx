import React from 'react';
import { motion } from 'framer-motion';
import oneFace from '../img/1.png';
import twoFace from '../img/2.png';
import threeFace from '../img/3.png';
import HeaderCard from './HeaderCard';

export default ({
  named,
  price,
  tag,
  setHeaderCardSelect,
}) => {
  return (
    <div className='cardsContainer'>
      <div className='cardBorder'>
        <img
          src='https://images.wallpaperscraft.ru/image/single/dron_kamera_tehnologii_171576_1280x720.jpg'
          className='cardImg'
        />
        <div className='divItemCardOne'>
          <div className='itemPriceAndNamed'>
            <p className='cardNamed'>
              Вакансия: {named}
            </p>
            <p className='cardTag'>
              Tagname telegram: {tag}п
            </p>
            <div className='faceItem'>
              <div className='miniFaceOne'>
                <img
                  className='imgCardFace'
                  src={oneFace}
                />
              </div>
              <div className='miniFaceTwo'>
                <img
                  className='imgCardFace'
                  src={twoFace}
                />
              </div>
              <div className='miniFaceThree'>
                <img
                  className='imgCardFace'
                  src={threeFace}
                />
              </div>
              <div className='divItemNumberAndVacansy'>
                <p className='numberPeople'>865 исполнителей</p>
                <p className='seeThisIsVacnsy'>просмотрела эту<br />вакансию</p>
              </div>
              <button 
                onClick={() => setHeaderCardSelect(prev => !prev)}
                className='btnOpenToCard'>
                Открыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
