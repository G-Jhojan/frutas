import { RiDeleteBin6Line } from 'react-icons/ri';

export const SellFruits = ({ fruitsToSell, setFruitsToSell }) => {
	const handleAddQuantity = ({ value }, _id) => {
		const updateFruitsToSell = fruitsToSell.map(fruit => {
			if (fruit._id === _id) fruit = { ...fruit, cantidad: +value };

			return fruit;
		});

		setFruitsToSell(updateFruitsToSell);
	};

	const handleRemoveFruit = _id => {
		const removeFruitsToSell = fruitsToSell.filter(fruit => fruit._id !== _id);
		setFruitsToSell(removeFruitsToSell);
	};
	return (
		<>
			<div className='grid grid-cols-6 mb-3 p-4'>
				<h5 className='col-span-2 md:col-span-3'>Fruta</h5>
				<h5 className='col-span-2 md:col-span-1'>Cantidad</h5>
				<h5>Precio</h5>
				<h5>Quitar</h5>
			</div>

			{/* Products */}
			<div className='h-3/5 md:h-4/6 lg:h-3/5 overflow-y-auto'>
				{/* Product */}

				{fruitsToSell.map(({ _id, nombre, precio, imgUrl, descripcion }) => (
					<div key={_id} className='bg-[#262837] p-4 rounded-xl mb-4'>
						<div className='grid grid-cols-6 mb-4'>
							{/* Product description */}
							<div className='flex items-center gap-3 col-span-2 md:col-span-3'>
								<img src={imgUrl} alt='Food' className='w-10 h-10 object-cover rounded-full' />
								<div>
									<h5 className='text-sm'>{nombre}</h5>
									<p className='text-xs text-gray-500'>{descripcion}</p>
								</div>
							</div>

							{/* Qty */}
							<div>
								<input
									type='text'
									className='outline-none w-16 bg-[#1F1D2B] py-1 px-2 rounded-lg'
									placeholder='0'
									name='cantidad'
									onChange={({ target }) => handleAddQuantity(target, _id)}
								/>
							</div>
							{/* Price */}
							<div>
								<span>${precio}</span>
							</div>
							<div>
								<button
									onClick={() => handleRemoveFruit(_id)}
									className='border border-red-500 p-2 rounded-lg '
								>
									<RiDeleteBin6Line className='text-red-500 text-xl' />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
