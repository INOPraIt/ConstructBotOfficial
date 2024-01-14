import React from 'react';
import '../../assets/style/Pages/Login.scss';
import {Link} from 'react-router-dom';


export default () => {
  return (
    <div className="container">
      <div className="card">
      <p className='loginText'>Вход в систему</p>
        <form className="card-form">
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Электронная почта</label>
          </div>
          <div className="input">
            <input type="password" className="input-field" required />
            <label className="input-label">Пароль</label>
          </div>
          <div className="action"> 
            <button className="action-button">Войти</button>
          </div>
        </form>
        <div className="card-info">
          <p>
            У вас еще нет аккаунта?
            <Link to="/register">
              Регистрация
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
