import React from 'react';
import { Link } from 'react-router-dom'
import { linksExloreArr } from '../Sidebar/linksArr';
import message from '../../assets/img/icons/SidebarIcons/UnActive/message.png';

export default () => {
  return (
    <div className='containerLink'>
      {linksExloreArr.map(k =>
        <Link className='links' to={k.link}>
          <div className='iconLink'>
            <img className='imgIcon' src={message} />
            <p className='textLinkMenu'>
              {k.text}
            </p>
          </div>
        </Link>
      )}
    </div>
  )
}
