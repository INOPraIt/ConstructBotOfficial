import React from 'react';
import './style.scss';
import SliderRegister from '../../components/SliderRegister';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default () => {


  return (
    <div className='conatinerReg'>
      <div className='itemOne'>
        <div className='blockItemOne'>
          <div className='headerOne'>
            <motion.h1
              className='hOneHeaderOne'
              initial={{ y: 100, opacity: 0, duration: 10 }}
              animate={{ y: 0, opacity: 1,  delay: 10}}
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
        <div class="col-3 input-effect">
          <input class="effect-18" type="text" placeholder="" />
          <label>Full name</label>
          <span class="focus-border"></span>
        </div>
        <div class="col-3 input-effect">
          <input class="effect-18" type="text" placeholder="" />
          <label>Email</label>
          <span class="focus-border"></span>
        </div>
        <div class="col-3 input-effect">
          <input class="effect-18" type="text" placeholder="" />
          <label>Password</label>
          <span class="focus-border"></span>
        </div>
        <button className='btnreg'>Sign Up</button>
        <p className='noAccauntText'>
          Have an account? <Link className='linkSign' to='/'>Login</Link>
        </p>
      </div>

    </div>
  )
}
