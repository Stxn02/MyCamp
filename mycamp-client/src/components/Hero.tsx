"use client";

import { IBaseComponent } from '@/interfaces/IBaseComponent';
import Button from './Button';
import './styles/Hero.scss';
import React from 'react';

const Strong: React.FC<IBaseComponent> = ({ children }) => {
	return <strong className='font-bold'>{children}</strong>;
}
const Hero: React.FC<IBaseComponent> = ({ className }) => {
	const signUp = <a target='_blank' href="/signUp">Get Started</a>;
	return (
		<div className={`Hero text-center gap-[5rem] py-[10rem] flex flex-col items-center justify-center text-white ${className ?? ''}`}>
			<div className="gap-5 items-center flex flex-col">
				<h1 className='font-thin text-[length:--hero-title]'>
					<Strong>Stars</Strong> above, <Strong>Peace</Strong> below
				</h1>
				<h2>Book unique camping experiences on over 150 American campgrounds</h2>
			</div>
			<Button className='w-[10rem]' variant="filled" >{ signUp }</Button>
		</div>
	)
}

export default Hero;