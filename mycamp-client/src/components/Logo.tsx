"use client";

import { IBaseComponent } from '@/interfaces/IBaseComponent';
import React from 'react';

const Logo: React.FC<IBaseComponent> = ({ className }) => {
	return (
		<a href='/'
			className={`Logo ${className ?? ''} text-white font-thin`}
			style={{ textShadow: 'rgba(0, 0, 0, 0.300) 0.2rem 0.2rem 0.2rem' }}>
			My<strong className='font-bold'>Camp</strong>
		</a>
	)
}

export default Logo;