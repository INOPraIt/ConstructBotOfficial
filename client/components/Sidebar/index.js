import React from 'react'
import logo from '../../assets/img/logo.png';
import './style.scss';
import menu from '../../assets/img/icons/menuIcon.png';
import Links from '../Links';
import { linksArr } from './linksArr';
import LinksExplore from '../LinksExplore';

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
				<p className='headerExplore'>Explore</p>
				<LinksExplore />
			</div>
			<div className='innovationBlock'>
				<p className='headerInnovation'>Innovation interface</p>
				<button className='editingTheSpace'>
					Editing the space
				</button>
			</div>
		</div>
	)
}
