import React from 'react';
import './style.scss';

export default () => {
  return (
      <div className='cardAcquaintances'>
        <div className='imgAvatarAcquaintances'>
          <img 
            className='imgAvatarAcquaintancesImage'
            scr={'https://i.pinimg.com/originals/af/39/53/af39535d8218bbcdd1ee52b6b7f803e5.jpg'}/>
        </div>
        <div>
          <p className='headerTextAcquaintancesCard'>Cris</p>
        </div>
        <div className='btnBlockAcquaintances'>
          <button className='btnSubmitAcquaintances'>
            Event
          </button>
        </div>
      </div>
  )
}
