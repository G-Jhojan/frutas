import { RiCloseLine } from 'react-icons/ri';
import { frutasApi } from '../../services';
import { DeleteFruits } from './DeleteFruits';
import { NewFruit } from './NewFruit';
import { SellFruits } from './SellFruits';

export const ShoppingCar = ({
	// variables
	fruits,
	showOrder,
	showAddFruits,
	showSellFruits,
	showDeleteFruits,
	fruitsToSell,
	paymentData,

	// functions
	toggleOrder,
	toggleAddFruits,
	toggleSellFruits,
	toggleDeleteFruits,
	handleNewFruit,
	setFruitsToSell,
	setPaymentData,
	setFruits,
}) => {
	const { descuento, total } = paymentData;

	const handlePaymentFruits = () => {
		const updateFruits = fruitsToSell.map(({ _id, cantidad, stock }) => ({
			_id,
			stock: stock - cantidad,
		}));

		const updateFruitsPromises = [];
		for (const fruit of updateFruits) {
			const fruitPromise = frutasApi.patch(`/frutas/${fruit._id}`, { stock: fruit.stock });
			updateFruitsPromises.push(fruitPromise);
		}

		Promise.all(updateFruitsPromises)
			.then(values => {
				setFruitsToSell([]);
				setPaymentData({
					descuento: 0,
					total: 0,
				});
			})
			.catch(console.log);
	};
	return (
		<div
			className={`lg:col-span-2 bg-[#1F1D2B] fixed w-full h-full lg:right-0 lg:w-[600px] top-0 transition-all z-50 ${
				showOrder ? 'right-0' : '-right-full'
			}`}
		>
			{/* Orders */}
			<div className='relative text-gray-300 p-8 h-full'>
				<RiCloseLine
					className='lg:hidden absolute text-xl right-4 top-4 p-3 box-content bg-[#262837] rounded-full'
					onClick={toggleOrder}
				/>
				<h1 className='text-2xl mb-4 font-semibold'>Frutas</h1>

				{/* Orders button */}
				<div className='flex items-center gap-4 flex-wrap mb-8'>
					<button
						className='text-[#EC7C6A] border border-gray-500 py-2 px-4 rounded-xl'
						onClick={toggleAddFruits}
					>
						Agregar
					</button>
					<button
						className='text-[#EC7C6A] border border-gray-500 py-2 px-4 rounded-xl'
						onClick={toggleSellFruits}
					>
						Vender
					</button>
					<button
						className='text-[#EC7C6A] border border-gray-500 py-2 px-4 rounded-xl'
						onClick={toggleDeleteFruits}
					>
						Borrar
					</button>
				</div>

				{/* Card */}
				<div className='h-full'>
					{/* CRUD */}
					{showAddFruits ? (
						<NewFruit handleNewFruit={handleNewFruit} />
					) : showSellFruits ? (
						<SellFruits fruitsToSell={fruitsToSell} setFruitsToSell={setFruitsToSell} />
					) : showDeleteFruits ? (
						<DeleteFruits fruits={fruits} setFruits={setFruits} />
					) : (
						''
					)}
				</div>

				{/* Submit payment */}
				<div
					className={`absolute bottom-0 right-0 bg-[#262837] p-4 w-full lg:h-48 ${
						!showSellFruits ? 'hidden' : ''
					}`}
				>
					<div className='flex items-center justify-between mb-4'>
						<span className='text-gray-400'>Descuento</span>
						<span>${descuento}</span>
					</div>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Total</span>
						<span>${total}</span>
					</div>
					<div>
						<button
							onClick={handlePaymentFruits}
							className='bg-[#EC7C6A] w-full py-2 px-4 rounded-lg font-semibold'
						>
							Continuar con el pago
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
