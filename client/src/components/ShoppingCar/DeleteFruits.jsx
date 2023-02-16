import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { frutasApi } from '../../services';

export const DeleteFruits = ({ fruits, setFruits }) => {
	const handleRemoveFruit = _id => {
		frutasApi
			.delete(`/frutas/${_id}`)
			.then(resp => {
				const updateFruits = fruits.filter(fruit => fruit._id !== _id);
				setFruits(updateFruits);
			})
			.catch(console.error);
	};
	return (
		<div>
			{fruits.map(({ _id, imgUrl, nombre, descripcion, precio, proveedor, stock }) => (
				<div key={_id} className='bg-[#262837] p-4 rounded-xl mb-4'>
					<div className='grid grid-cols-6 mb-4 text-sm'>
						{/* Product description */}
						<div className='flex items-center gap-3 col-span-2'>
							<img src={imgUrl} alt='Food' className='w-10 h-10 object-cover rounded-full' />
							<div>
								<h5 className='text-sm'>{nombre}</h5>
								<p className='text-xs text-gray-500'>{descripcion}</p>
							</div>
						</div>

						{/* Qty */}
						<div>Stock: {stock}</div>
						<div>{proveedor}</div>
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
	);
};
