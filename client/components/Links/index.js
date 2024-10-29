import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { linksArr } from '../Sidebar/linksArr';
import message from '../../assets/img/icons/SidebarIcons/UnActive/message.png'

export default () => {
  return (
    <div className='containerLink'>
      {linksArr.map(k =>
        <Link className='links' to={k.link}>
          <div className='iconLink'>
            <img className='imgIcon' src={linksArr.linkIconActive} />
            <p className='textLinkMenu'>
              {k.text}
            </p>
          </div>
        </Link>
      )}
    </div>
  )
}
