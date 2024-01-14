import React from 'react';
import '../../assets/style/Pages/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/user.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default connect((s) => ({

}), {
  createUser
})(
  ({
    createUser
  }) => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [repass, setRepass] = React.useState('');
 

    const notify = () => toast.success('Пароли не совподают', {
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

    function onRepass() {
      if (pass === repass) {
        createUser({ email, password: pass })
      } else {
        notify()
      }
    }

    function onSubmit() {
      e => e.preventDefault()
    }

    return (
      <div className="container">
        <div className="card">
          <p className='loginText'>Вход в систему</p>
          <form className="card-form" onSubmit={onSubmit()}>
            <div className="input">
              <input
                type="text"
                className="input-field"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <label className="input-label">Электронная почта</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                required
                onChange={e => setPass(e.target.value)}
              />
              <label className="input-label">Пароль</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                required
                onChange={e => setRepass(e.target.value)}
              />
              <label className="input-label">Повторите пароль</label>
            </div>
            <div className="action">
              <button
                className="action-button"
                onClick={() => onRepass()}
              >
                Регистрация
              </button>
            </div>
          </form>
          <div className="card-info">
            <p>
              У вас уже есть аккаунта?
              <Link to="/login">
                Вход
              </Link>
            </p>
          </div>
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
)