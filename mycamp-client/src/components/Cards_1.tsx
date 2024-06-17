"use client";

import { IBaseComponent } from '@/interfaces/IBaseComponent';
import { Deer, Hiking, Fish, Sun } from '@/assets/svg';
import Card_1 from './Card_1';
import React from 'react';

const Cards_1: React.FC<IBaseComponent> = ({ className }) => {
	className = `Cards_1 ${className ?? ''}`;
	return (
		<div className={ className  }>
			<Card_1 title="Camping & Day use" Icon={ Sun }>
				Return to your favourite spot or discover a new one suited for you.
			</Card_1>
			<Card_1 title="Camping & Day use" Icon={ Deer }>
				Return to your favourite spot or discover a new one suited for you.
			</Card_1>
			<Card_1 title="Camping & Day use" Icon={ Fish }>
				Return to your favourite spot or discover a new one suited for you.
			</Card_1>
			<Card_1 title="Camping & Day use" Icon={ Hiking }>
				Return to your favourite spot or discover a new one suited for you.
			</Card_1>
		</div>
	);
}

export default Cards_1;