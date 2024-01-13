import React from 'react';
import '../style/Components/Navbar.scss';
import { Link } from 'react-router-dom';
import house from '../img/icon/house.png';
import info from '../img/icon/info.png';
import notif from '../img/icon/notification.png';
import exit from '../img/icon/exit.png';
import plus from '../img/icon/plusOne.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({ }) => {
  const [create, setCreate] = React.useState(false);
  const notify = () => toast.success('Заявка создана', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }
  );

  return (
    <div
      className={!create ? "navContainer" : "navContainerActice"}>
      <div className={!create ? "navItemOne" : "navItemOneActive"}>
        <Link to={'/'} className='link'>
          <img
            className='linkImg'
            src={house}
          />
        </Link>
        <Link to={'/info'} className='link'>
          <img
            className='linkImg'
            src={info}
          />
        </Link>
      </div>
      <div className={!create ? "navItemCenter" : "navItemCenterActive"}>
        <div className={!create ? "navItemCenters" : "navItemCenterActives"}>
          <div className={!create ? "welcome" : "welcomeActive"}>
            <p className='welcomeTextActive'>Добро пожаловать в<br />создание заявок</p>
          </div>
          <button
            className={!create ? "classNavItemCenter" : "classNavItemCentercActive"}
            onClick={() => setCreate(prev => !prev)}
          >
            <img
              className='linkdImg'
              src={plus}
            />
          </button>
        </div>

        <div className={!create ? "inputs" : "inputsActive"}>
          <div class="input">
            <input type="text" class="input-field" style={{ width: "85%", marginLeft: "6%", color: "white" }} required />
            <label class="input-label" style={{ width: "85%", marginLeft: "6%" }}>Название карточки</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" style={{ width: "85%", marginLeft: "6%", color: "white" }} required />
            <label class="input-label" style={{ width: "85%", marginLeft: "6%" }}>Цена</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" style={{ width: "85%", marginLeft: "6%", color: "white" }} required />
            <label class="input-label" style={{ width: "85%", marginLeft: "6%" }}>Ник в телеграм</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" style={{ width: "85%", marginLeft: "6%", color: "white" }} required />
            <label class="input-label" style={{ width: "85%", marginLeft: "6%" }}>Сложность</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" style={{ width: "85%", marginLeft: "6%", color: "white" }} required />
            <label class="input-label" style={{ width: "85%", marginLeft: "6%" }}>Статус</label>
          </div>
        </div>
        <div className={!create ? "btnSendApplication" : "btnSendApplicationActive"}>
          <button
            className='btnSendApplicationBTN'
            onClick={notify}
          >
            Создать заявку
          </button>
        </div>
      </div>

      <div className={!create ? "navItemTwo" : "navItemTwoActive"}>
        <Link to={'/notification'} className='link'>
          <img
            className='linkImg'
            src={notif}
          />
        </Link>
        <Link to={'/exit'} className='link'>
          <img
            className='linkImg'
            src={exit}
          />
        </Link>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
