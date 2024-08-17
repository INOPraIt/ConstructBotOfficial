import React from 'react';
import './style.scss';
import Sidebar from '../../components/Sidebar';

export default () => {
  return (
    <div className='containerHome'>
      <div className='sidebarHome'>
        <Sidebar />
      </div>
      <div className='blockCenterHome'>
        Center
      </div>
      <div className='blockGroupHome'>
        Group
      </div>
    </div>
  )
}
