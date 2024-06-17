"use client";

import { IBaseComponent } from '@/interfaces/IBaseComponent';
import React from 'react';

const PoweredBy: React.FC<IBaseComponent> = ({ className  }) => {
	className = `PoweredBy ${className ?? ''}`;
	return (
		<div className={`PoweredBy w-[80%] m-auto flex flex-wrap justify-center gap-5 ${className ?? ''}`}>
			<h1 className='text-[length:--hero-title] text-center text-white font-thin'>
				<strong className="strong">Powered</strong> by
			</h1>
			<img className='object-contain w-[30rem]' src="/RecLogo_Rev.png" alt="Recreation.gov logo"/>
		</div>
	)
}

export default PoweredBy;