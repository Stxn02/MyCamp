"use client";

import './styles/Header.scss';
import Hero from './Hero';
import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<div className='Header overflow-hidden relative shadow-2xl box-border p-[--padding] rounded-br-[10%] rounded-bl-[10%] w-full font-["Switzer-Variable"] flex flex-col'>
			<Nav/>
			<Hero/>
		</div>
	)
}

export default Header;