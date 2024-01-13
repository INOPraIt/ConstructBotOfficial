import React from 'react';
import '../style/Components/CardHeader.scss';
import plusOne from '../img/icon/plusOne.png';
import CardApplication from '../components/CardApplication';
import active from '../img/icon/status/active.png';
import noActive from '../img/icon/status/noActive.png';
import inProcess from '../img/icon/status/inProcess.png';

export default ({
  setHeaderCardSelect,
  headerCardSelect
}) => {

  let arrayNewImgSlide = [
    {
      id: 1,
      src: 'https://images.wallpaperscraft.ru/image/single/noutbuk_klavishi_svechenie_170138_1280x720.jpg'
    },
    {
      id: 2,
      src: 'https://images.wallpaperscraft.ru/image/single/zdanie_podsvetka_grani_891080_1280x720.jpg'
    },
    {
      id: 3,
      src: 'https://images.wallpaperscraft.ru/image/single/zdanie_parking_asfalt_1015861_1280x720.jpg'
    },
    {
      id: 4,
      src: 'https://images.wallpaperscraft.ru/image/single/zdanie_okna_lestnitsa_1104412_1280x720.jpg'
    },
  ];

  return (
    <div className={headerCardSelect ? "containerHeaderCard" : "containerHeaderCardActive"}>
      <div className='navbarCardHeader'>
        <p className='descriptionApllicationText'>Описание заявки:</p>
        <button
          className='btnOnePlusHeaderCard'
          onClick={() => setHeaderCardSelect(prev => !prev)}
        >
          <img
            className='plus'
            src={plusOne}
          />
        </button>
      </div>
      <div className='itemOneImgCard'>
        <swiper-container>
          {arrayNewImgSlide.map(k =>
            <swiper-slide>
              <div
                key={k.id}
                className='cardDivHeader'
              >
                <img 
                  className='cardHeader'
                  src={k.src}
                />
              </div>
            </swiper-slide>
          )}
        </swiper-container>
      </div>
      <div className='descriptionApplicationTextsOne'>
        <p className='headerApplicationNew'>Название:</p>
        <p>Подвальное помещение</p>
        <p className='descriptionTextApplicationNew'>Описание:</p>
        <p className='descriptionTextApplication'>
          Здравствуйте необходимо положить плитку 
          и частично обшить плитку гипсокартоном.
        </p>
        <p className='descriptionTextApplicationNew'>Номер для связи:</p>
        <p className='descriptionTextApplication'>
          +7(994) 540-87-54
        </p>
        <p className='descriptionTextApplicationNew'>Статус заявки</p>
        <div className='statusApplicationContainer'>
          <img 
            src={active}
            className='imgStatus'
          />
          <p className='descriptionTextApplication'>
            Активна
          </p>
        </div>
        <div>
          <button className='btnOneCheckApplication'>
            Откликнуться
          </button>
        </div>
      </div>
    </div>
  )
}

