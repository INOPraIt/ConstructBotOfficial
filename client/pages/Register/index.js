import React from 'react';
import './style.scss';
import SliderRegister from '../../components/SliderRegister';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/user.actions';

export default connect((s) => ({
  user: s.user
}), {
  createUser
})(
  ({
    createUser
  }) => {

    const [fullname, setFullname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function registerUser() {
      createUser({
        fullname: fullname, 
        email: email, 
        password: password
      })
    }

    return (
      <div className='conatinerReg'>
        <div className='itemOne'>
          <div className='blockItemOne'>
            <div className='headerOne'>
              <motion.h1
                className='hOneHeaderOne'
                initial={{ y: 100, opacity: 0, duration: 10 }}
                animate={{ y: 0, opacity: 1, delay: 10 }}
                transition={{ duration: 0.5 }}
              >
                Welcome in to app InfinityX.<br />
                Share your emotions.
              </motion.h1>
              <p className='textIntro'>
                An application that can make your
                life brighter<br /> and more colorful.
                Share photos and short<br /> videos
                with friends and family.
              </p>
            </div>
            <div className='sliderContainer'>
              <SliderRegister />
            </div>
          </div>
        </div>
        <div className='itemTwo'>
          <h1 className='headerCreateAccount'>Get started</h1>
          <p className='textCreateAccount'>Create your accaunt now</p>
          <div className="col-3 input-effect">
            <input
              className="effect-18"
              type="text"
              placeholder=""
              onChange={(e) => { setFullname(e.target.value) }}
              value={fullname}
            />
            <label>Full name</label>
            <span className="focus-border"></span>
          </div>
          <div className="col-3 input-effect">
            <input
              className="effect-18"
              type="text"
              placeholder=""
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
            />
            <label>Email</label>
            <span className="focus-border"></span>
          </div>
          <div className="col-3 input-effect">
            <input
              className="effect-18"
              type="text"
              placeholder=""
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
            />
            <label>Password</label>
            <span className="focus-border"></span>
          </div>
          <button
            className='btnreg'
            onClick={registerUser}
          >
            Sign Up
          </button>
          <p className='noAccauntText'>
            Have an account? <Link className='linkSign' to='/'>Login</Link>
          </p>
        </div>
      </div>
    )
  }
);
