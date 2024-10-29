import React from 'react'
import logo from '../../assets/img/logo.png';
import './style.scss';
import menu from '../../assets/img/icons/SidebarIcons/menuLogo.png';
import Links from '../Links';
import { linksArr } from './linksArr';
import LinksExplore from '../LinksExplore';

export default ({edditSpace, setEdditSpace}) => {
	return (
		<div className='containerSidebar'>
			<div className="logoSidebar">
				<img src={menu} className="menuLogoImage"/>
			</div>
			<div className='blockMainMenu'>
				<p className='headerMainMenu'>Main Menu</p>
				<Links />
			</div>
			<div className='blockExplore'>
				<p className='headerExplore'>Explore</p>
				<LinksExplore />
			</div>
			<div className='innovationBlock'>
				<p className='headerInnovation'>Innovation interface</p>
				<button 
					className='editingTheSpace'
					onClick={() => setEdditSpace(!edditSpace)}
					>
					Editing the space
				</button>
			</div>
		</div>
	)
}
