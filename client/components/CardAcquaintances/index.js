import React from 'react';
import './style.scss';

export default () => {
  return (
      <div className='cardAcquaintances'>
        <div className='imgAvatarAcquaintances'>
          <img 
            className='imgAvatarAcquaintancesImage'
            scr={'https://steamuserimages-a.akamaihd.net/ugc/1765994827416000637/63A0D41C227CF7F5F0FCFE22185039E08B0D6D1A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'}/>
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
