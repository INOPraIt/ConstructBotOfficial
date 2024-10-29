import React from 'react';
import './style.scss';
import Sidebar from '../../components/Sidebar';
import smail from '../../assets/img/icons/HomeIcons/smail.png';
import galery from '../../assets/img/icons/HomeIcons/galery.png';
import menu from '../../assets/img/icons/HomeIcons/menuNewPost.png';
import minus from '../../assets/img/icons/HomeIcons/minus.png';
import CardPost from '../../components/CardPost';
import CardGroup from '../../components/CardGroup';
import CardAcquaintances from '../../components/CardAcquaintances';

export default () => {
  const posts = [
    { id: 1, number: 'one' },
    { id: 2, number: 'two' },
    { id: 3, number: 'three' },
    { id: 4, number: 'four' },
  ]

  const [edditSpace, setEdditSpace] = React.useState(false);
  const [deletedBlock, setDeletedBlock] = React.useState(false);

  return (
    <div className='containerHome'>
      <div className='sidebarHome'>
        <Sidebar
          setEdditSpace={setEdditSpace}
          edditSpace={edditSpace}
        />
      </div>
      <div className='blockCenterHome'>
        <div className='itemLeftHome'>
          <div className='itemNewPost'>
            <img className='avatarItemNewPost' src={'https://avatars.mds.yandex.net/i?id=67058ccdbd48b1323c8f249400a020af_l-10896002-images-thumbs&n=13'} />
            <input className='inpItemNewPost' placeholder='Wat`s New?' />
            <button className='btnSmail'>
              <img className='imgSmailBtn' src={smail} />
            </button>
            <button className='btnSmail'>
              <img className='imgSmailBtn' src={galery} />
            </button>
            <button className='btnSmail'>
              <img className='imgSmailBtn' src={menu} />
            </button>
          </div>
          {posts.map(v =>
            <CardPost />
          )}
        </div>
        <div className='itemRightHome'>
          <div className={!deletedBlock ? "itemUpcomingEventsBlock" : "itemUpcomingEventsBlockActive"}>
            <div className={!edditSpace ? "itemUpcomingEvents" : "itemUpcomingEventsActive"}>
              <div className='upBlockUpcomingEvents'>
                <button
                  className='activeButton'
                  onClick={() => setDeletedBlock(!deletedBlock)}
                >
                  <img
                    className='crossIconActiveButton'
                    src={minus}
                  />
                </button>
                <p className='headerUpcomingEvents'>Acquaintances</p>
              </div>
              <hr className='lineStyle' />
              <div className='containerCardAcquaintances'>
                <CardAcquaintances />
                <CardAcquaintances />
                <CardAcquaintances />
              </div>
            </div>
          </div>
          <div className='itemVisit'>
            <div className='headerItemVisit'>
              <p className='headerItemVisitText'>Don't forget to visit</p>
              <hr className='lineStyleItemVisit' />
              <img
                className='integrationImage'
                src={'https://avatars.mds.yandex.net/i?id=dce0aa850adf7285f01157bf473eb123_l-5009205-images-thumbs&n=13'}
              />
              <a
                className='linkVisitIntegration'
                href="http://nike.com/"
              >
                Visit integration
              </a>
            </div>
          </div> 
        </div>
      </div>
      <div className='blockGroupHome'>
        <div className='cardGroupContainer'>
          <CardGroup />
          <CardGroup />
          <CardGroup />
          <CardGroup />
          <CardGroup />
          <CardGroup />
        </div>
      </div>
    </div>
  )
}
