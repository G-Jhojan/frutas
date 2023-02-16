export const NewFruit = ({ handleNewFruit }) => {
	return (
		<form onSubmit={handleNewFruit} className='w-full p-8 flex flex-col gap-4'>
			<div className='bg-[#262837] w-full p-4 rounded-lg'>
				<label className='flex flex-col gap-3 '>
					Nombre
					<input
						type='text'
						name='nombre'
						className='outline-none bg-white text-black py-1 px-2 rounded-lg'
					/>
				</label>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='bg-[#262837] w-full p-4 rounded-lg'>
					<label className='flex flex-col gap-3 '>
						Precio
						<input
							type='text'
							name='precio'
							className='outline-none bg-white text-black py-1 px-2 rounded-lg'
						/>
					</label>
				</div>
				<div className='bg-[#262837] w-full p-4 rounded-lg'>
					<label className='flex flex-col gap-3 '>
						Stock
						<input
							type='text'
							name='stock'
							className='outline-none bg-white text-black py-1 px-2 rounded-lg'
						/>
					</label>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<div className='bg-[#262837] w-full p-4 rounded-lg col-span-1 md:col-span-2'>
					<label className='flex flex-col gap-3 '>
						Proveedor
						<input
							type='text'
							name='proveedor'
							className='outline-none bg-white text-black py-1 px-2 rounded-lg'
						/>
					</label>
				</div>
				<div className='bg-[#262837] w-full p-4 rounded-lg'>
					<label className='flex flex-col gap-3 '>
						Descuento
						<input
							type='text'
							name='descuento'
							className='outline-none bg-white text-black py-1 px-2 rounded-lg'
						/>
					</label>
				</div>
			</div>
			<div className='bg-[#262837] w-full p-4 rounded-lg'>
				<label className='flex flex-col gap-3 '>
					Descripcion
					<input
						type='text'
						name='descripcion'
						className='outline-none bg-white text-black py-1 px-2 rounded-lg'
					/>
				</label>
			</div>
			<div className='text-end'>
				<button
					type='submit'
					className='text-[#EC7C6A] border border-gray-500 py-2 px-4 rounded-xl'
				>
					Agregar producto
				</button>
			</div>
		</form>
	);
};
