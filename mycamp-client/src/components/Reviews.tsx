"use client";

import { testimonials } from '@/assets/ts/constants';
import { Carousel } from 'primereact/carousel';
import { ICard_2 } from '@/interfaces/ICard_2';
import './styles/Reviews.scss';
import Card_2 from './Card_2';
import React from 'react';

const Reviews = () => {
	const responsiveOptions = [
		{
			breakpoint: '1400px',
			numVisible: 2,
			numScroll: 1
		},
		{
			breakpoint: '991px',
			numVisible: 2,
			numScroll: 1
		},
		{
			breakpoint: '750px',
			numVisible: 1,
			numScroll: 1
		}
	];
	const template: React.FC<ICard_2> = ({ fullname, src, message }) => {
		return <Card_2 className='w-[90%] m-auto' message={message} fullname={fullname} src={src}/>;
	}
	return (
		<div className='Reviews gap-[5rem] flex flex-col items-center'>
			<h1 className='text-white font-thin w-full text-center text-[length:--hero-title]'>
				<strong className="strong">Words</strong> from fellow <strong className="strong">campers</strong>
			</h1>

			<Carousel 
				numVisible={3} numScroll={1} 
				className='cards w-[75%] h-fit stroke-2 stroke-white' responsiveOptions={responsiveOptions}
				value={ testimonials } itemTemplate={ template } autoplayInterval={6000}/>
		</div>
	)
}

export default Reviews;