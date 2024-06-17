"use client";

import { ICard_2 } from '@/interfaces/ICard_2';
import "./styles/Card_2.scss";
import React from 'react';

const Card_2: React.FC<ICard_2> = ({ fullname, src, message, className  }) => {
	className = `Card_2 ${className ?? ''}`;
	return (
		<div className={`Card_2 shadow-2xl text-[length:--small-text] gap-7 flex box-border p-[16px] flex-col 
										justify-center text-[--color-bg-dark]  items-center w-[22rem] h-[30rem] rounded-xl ${ className }`}>
			<img className='w-[13rem] h-[13rem] border-[--color-bg-dark] border-4 rounded-full object-cover' src={ src } alt={ fullname }/>
			<div className='min-h-[7rem] text-white font-["Satoshi-Variable"] font-thin backdrop-blur-md box-border rounded-xl p-[16px] shadow-lg'>
				{ message }
			</div>
			<div className='font-bold text-[--main-color-4]'>
				{ fullname }
			</div>
		</div>
	);
}

export default Card_2;