import React from 'react';
import './style.scss';
import Sidebar from '../../components/Sidebar';
import CardPost from '../../components/CardPost';
import CardGroup from '../../components/CardGroup';
import CardAcquaintances from '../../components/CardAcquaintances';
export default () => {

  return (
    <div className='containerChat'>
      <div className='sidebarChat'>
        <Sidebar/>
      </div>
      <div className='centerBlockChat'>
        <button className="btnNewMessage">
          New Message
        </button>
        <div className="settingsChat">
          <p className="settingsChatText">Groups</p>
          <p className="settingsChatText">Drafts</p>
        </div>
      </div>
    </div>
  )
}
