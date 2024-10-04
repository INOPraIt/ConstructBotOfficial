import React from 'react';
import './style.scss';

export default () => {
  return (
      <div className='cardGroup'>
        <div className='imgAvatarGroup'>
          <img 
            className='imgAvatarGroupImage'
            scr={'https://steamuserimages-a.akamaihd.net/ugc/1765994827416000637/63A0D41C227CF7F5F0FCFE22185039E08B0D6D1A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'}/>
        </div>
        
        <div>
          <p className='headerTextGropCard'>Car group</p>
          <p className='descriptionGroupCard'>Is simply dummy text</p>
        </div>
        <div className='btnBlockGroup'>
          <button className='btnSubmitGroup'>
            Submit
          </button>
        </div>
      </div>
  )
}
