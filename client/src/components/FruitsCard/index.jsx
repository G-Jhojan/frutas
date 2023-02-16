import React from 'react';

export const FruitsCard = props => {
	const { _id, nombre, precio, stock, descuento, descripcion, imgUrl, setFruitsToSell } = props;
	const fruta = { _id, nombre, precio, stock, descuento, imgUrl, descripcion };
	const handleFruitsToSell = () => {
		setFruitsToSell(fruitsToSell => [...fruitsToSell, { ...fruta, cantidad: 0 }]);
	};
	return (
		<div
			onClick={handleFruitsToSell}
			className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'
		>
			<img
				src={imgUrl}
				alt='Fruta'
				className='w-32 h-32 object-cover rounded-full -mt-16 shadow-2xl'
			/>
			<p className='text-xl'>{nombre}</p>
			<span className='text-gray-400'>$ {precio}</span>
			<p className='text-gray-500'>{stock} disponibles</p>
			<p className='text-orange-500'>- {descuento}% descuento</p>
		</div>
	);
};
