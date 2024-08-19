import React from 'react';
import './style.scss';
import Sidebar from '../../components/Sidebar';
import smail from '../../assets/img/icons/HomeIcons/smail.png';
import galery from '../../assets/img/icons/HomeIcons/galery.png';
import menu from '../../assets/img/icons/HomeIcons/menuNewPost.png';
import like from '../../assets/img/icons/HomeIcons/heart.png';
import recover from '../../assets/img/icons/HomeIcons/recover.png';
import comments from '../../assets/img/icons/HomeIcons/comments.png';
import bookmark from '../../assets/img/icons/HomeIcons/bookmark.png';
import share from '../../assets/img/icons/HomeIcons/share.png';

export default () => {
  return (
    <div className='containerHome'>
      <div className='sidebarHome'>
        <Sidebar />
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
          <div className='itemPostDone'>
            <div className='avatarAndInfoItemPostDone'>
              <img className='avatarItemPostDone' src={'https://avatars.mds.yandex.net/i?id=67058ccdbd48b1323c8f249400a020af_l-10896002-images-thumbs&n=13'}/>
              <div className='infoItemPostDone'>
                <p className='namedAuthorItemPostDone'>Ray Hammond 2d</p>
                <p className='locationsAuthorItemPostDone'>New York, USA</p>
              </div>
            </div>
            <div className='textItemPostDone'>
              <p className='textPostItemPostDone'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum
              </p>
            </div>
            <div className='fotoPostDone'>
              <img className='igmOnePostDone' src={'https://avatars.mds.yandex.net/i?id=45c17a3abeee34635e6f0040ff9e4093_l-5127171-images-thumbs&n=13'}/>
              <img className='igmTwoPostDone' src={'https://payment.elitestudent.ru/images/seo/1/3.22/2.jpg'}/>
            </div>
            <hr className='lineStylePostDone'/>
            <div className='btnsItemPostDone'>
              <div className='btnsOneItemPostDone'>
                <img className='btnLikePostDone' src={like}/>
                <img className='btnLikePostDone' src={comments}/>
                <img className='btnLikePostDone' src={recover}/>
              </div>
              <div className='btnsTwoItemPostDone'>
                <img className='btnLikePostDone' src={share}/>
                <img className='btnLikePostDone' src={bookmark}/>
              </div>
            </div>
            <hr className='lineStylePostDoneTwo'/>
            <div className='addedComentsItemPostDone'>
              <div className='likesCommentRepostTextItemPostDone'>
                <p className='likes'>925 likes</p>
                <p className='comments'>23 Comments</p>
                <p className='reposts'>4 Reposts</p>
              </div>
            </div>
          </div>
        </div>
        <div className='itemRightHome'>
          <div className='itemUpcomingEvents'>
            <div className='upBlockUpcomingEvents'>
              <p className='headerUpcomingEvents'>Upcoming Events</p>
              <button className='btnPlus'>
                +
              </button>
            </div>
            <hr className='lineStyle'/>
          </div>
        </div>
      </div>
      <div className='blockGroupHome'>
        Group
      </div>
    </div>
  )
}
