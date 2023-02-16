import { useState } from 'react';
import { RiMenu3Fill, RiSearch2Line } from 'react-icons/ri';
import { FeedFruits } from './components/FeedFruits';
import { ShoppingCar } from './components/ShoppingCar';
import { useFruits } from './hooks/useFruits';

export const App = () => {
	const allFruitsMethodsVariables = useFruits();
	const { fruits, toggleOrder, setFruitsToSell } = allFruitsMethodsVariables;

	return (
		<div className='bg-[#262837] w-full min-h-screen'>
			{/* Carrito */}
			<ShoppingCar {...allFruitsMethodsVariables} />

			{/* Menu movil */}
			<nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-end rounded-tl-xl rounded-tr-xl'>
				<button className='text-white p-2' onClick={toggleOrder}>
					<RiMenu3Fill />
				</button>
			</nav>

			<main className='lg:pl-28 pb-10 lg:pr-[600px]'>
				<div className='md:p-8 p-4'>
					{/* Header */}
					<header>
						{/* Title and Search */}
						<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
							<div>
								<h1 className='text-2xl text-gray-300'>Fruteria, frutipan</h1>
							</div>
						</div>

						{/* Tabs */}
						<nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-10 border-b mb-6'></nav>
					</header>
					{/* Title content */}
					<div className='flex items-center justify-between mb-16'>
						<h2 className='text-xl text-gray-300'>Elija una fruta</h2>
					</div>

					{/* Content */}
					<div className='grid grid-cols-1 lg:grid-cols-3 p-8 gap-14'>
						{/* Fruits */}
						<FeedFruits fruits={fruits} setFruitsToSell={setFruitsToSell} />
					</div>
				</div>
			</main>
		</div>
	);
};
