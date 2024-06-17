"use client";

import dynamic from 'next/dynamic';
import "./styles/Main.scss";
import React from 'react';

const PicsLazy = dynamic(() => import('./Pics'), {ssr: false});
const ReviewsLazy = dynamic(() => import('./Reviews'), {ssr: false});
const PoweredByLazy = dynamic(() => import('./PoweredBy'), {ssr: false});

const Main = () => {
	const gap = "20rem";
	return (
		<div className='Main'>
			<div className={`mt-[${gap}]`}><PicsLazy/></div>
			<div className={`mt-[${gap}]`}><ReviewsLazy/></div>
			<div className={`mt-[${gap}]`}><PoweredByLazy/></div>
		</div>
	)
}

export default Main;