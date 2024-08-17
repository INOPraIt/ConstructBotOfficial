import React from 'react'
import logo from '../../assets/img/logo.png';
import './style.scss';
import menu from '../../assets/img/icons/menuIcon.png';
import Links from '../Links';

export default () => {
	return (
		<div className='containerSidebar'>
			<div className='blockLogo'>
				<img src={logo} className='logoImg'/>
				<button className='menuBtn'>
					<img src={menu} className='iconMenuBtn'/>
				</button>
			</div>
			<div className='blockMainMenu'>
				<p className='headerMainMenu'>MainMenu</p>
				<Links />
			</div>
			<div className='blockExplore'>
				<p>Explore</p>
			</div>
		</div>
	)
}
