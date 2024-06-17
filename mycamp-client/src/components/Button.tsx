"use client";

import { IBaseComponent } from '@/interfaces/IBaseComponent';
import { IButton } from '@/interfaces/IButton';
import { Button as Variant} from './ui/button';
import React from 'react';

const Outline: React.FC<IBaseComponent> = ({ className, children }) => {
	return <Variant 
					className={`bg-[#f5f5f548] rounded-[2rem] text-white ${className}`} 
					variant="outline">{ children }</Variant>;
}
const Filled: React.FC<IBaseComponent> = ({ className, children }) => {
	return <Variant 
					className={`bg-gradient-to-tr from-[--color-main-1] to-[--color-main-2] 
											font-bold text-white hover:opacity-50 ${className}`} 
					variant="default">{ children }</Variant>;
}
const Rounded: React.FC<IBaseComponent> = ({ className, children }) => {
	return <Variant 
					className={`bg-white rounded-[4rem] text-[--color-bg-dark] 
											hover:bg-opacity-50 hover:bg-white ${className}`} 
					variant="default">{ children }</Variant>;
}
const Button: React.FC<IButton> = ({ className, variant, children }) => {
	className = `Button shadow-lg backdrop-blur-md transition-all ${className ?? ''}`;
	switch (variant) {
		case 'outline':
			return <Outline className={ className }>{ children }</Outline>;
		case 'filled':
			return <Filled className={ className }>{ children }</Filled>;
		case 'rounded':
			return <Rounded className={ className }>{ children }</Rounded>;
	}
}

export default Button;