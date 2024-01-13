import React from 'react';
import '../../assets/style/Pages/Login.scss';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div class="container">
      <div class="card">
      <p className='loginText'>Вход в систему</p>
        <form class="card-form">
          <div class="input">
            <input type="text" class="input-field" required />
            <label class="input-label">Электронная почта</label>
          </div>
          <div class="input">
            <input type="password" class="input-field" required />
            <label class="input-label">Пароль</label>
          </div>
          <div class="action"> 
            <button class="action-button">Войти</button>
          </div>
        </form>
        <div class="card-info">
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
