"use client";

import Marquee from "react-fast-marquee";
import React from 'react';

const Pics = () => {
	return (
		<div className='Pics flex flex-col gap-10 font-thin text-white text-center text-[length:--hero-title]'>
			<h1 className="w-full">
				<strong className="strong">Enjoy</strong> nature at the <strong className="strong">Fullest</strong>
			</h1> 
			<Marquee speed={12} className="flex flew-row h-fit">
				<div className="flex flex-col w-[20rem] h-[33rem]">
					<img className="w-full h-full flex-1" src="/stock/stock (10).jpg"/>
					<img className="w-full h-full flex-2" src="/stock/stock (2).jpg"/>
				</div>
				<div className="flex flex-col w-[20rem] h-[33rem]">
					<img className="w-full h-full flex-2" src="/stock/stock (4).jpg"/>
					<img className="w-full h-full flex-1" src="/stock/stock (5).jpg"/>
				</div>
				<div className="flex flex-col w-[20rem] h-[33rem]">
					<img className="w-full h-full flex-1" src="/stock/stock (11).jpg"/>
					<img className="w-full h-full flex-1" src="/stock/stock (3).jpg"/>
				</div>
				<div className="flex flex-col w-[20rem] h-[33rem]">
					<img className="w-full h-full flex-2" src="/stock/stock (9).jpg"/>
					<img className="w-full h-full flex-[1.5]" src="/stock/stock (7).jpg"/>
				</div>
				<div className="flex flex-col w-[20rem] h-[33rem]">
					<img className="w-full h-full flex-1" src="/stock/stock (12).jpg"/>
				</div>
			</Marquee>
		</div>
	)
}

export default Pics;