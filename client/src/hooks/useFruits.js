import { useEffect, useState } from 'react';
import { frutasApi } from '../services';

const DEFAULT_COVER_IMG =
	'https://img.freepik.com/vector-gratis/coleccion-frutas-dibujadas-mano_23-2148950068.jpg';

const defaultPaymentData = {
	descuento: 0,
	total: 0,
};

export const useFruits = () => {
	const [fruits, setFruits] = useState([]);
	const [newFruit, setNewFruit] = useState(null);
	const [fruitsToSell, setFruitsToSell] = useState([]);
	const [showOrder, setShowOrder] = useState(false);
	const [showAddFruits, setShowAddFruits] = useState(true);
	const [showSellFruits, setShowSellFruits] = useState(false);
	const [showDeleteFruits, setShowDeleteFruits] = useState(false);
	const [paymentData, setPaymentData] = useState(defaultPaymentData);

	useEffect(() => {
		console.log('render effectfruits');
		frutasApi
			.get('/frutas')
			.then(({ data }) => data)
			.then(data => {
				const newFruits = data.map(fruit => ({ ...fruit, imgUrl: DEFAULT_COVER_IMG }));
				setFruits(newFruits);
			});
	}, [newFruit, fruitsToSell]);

	useEffect(() => {
		if (!fruitsToSell.length) return;

		const totalDiscount = fruitsToSell
			.map(({ precio, descuento, cantidad }) => {
				const applyDiscount = descuento / 100;
				const sutotal = precio * cantidad;
				const discountValue = sutotal * applyDiscount;

				return Math.round(discountValue * 100) / 100;
			})
			.reduce((acumulador, valorActual) => acumulador + valorActual);

		const subTotalPrice = fruitsToSell
			.map(({ precio, cantidad }) => Math.round(precio * cantidad * 100) / 100)
			.reduce((acumulador, precioActual) => acumulador + precioActual);

		setPaymentData({
			descuento: Math.round(totalDiscount * 100) / 100,
			total: Math.round((subTotalPrice - totalDiscount) * 100) / 100,
		});
	}, [fruitsToSell]);

	const toggleOrder = () => setShowOrder(!showOrder);

	const toggleAddFruits = () => {
		setShowAddFruits(true);
		setShowSellFruits(false);
		setShowDeleteFruits(false);
	};

	const toggleSellFruits = () => {
		setShowSellFruits(true);
		setShowAddFruits(false);
		setShowDeleteFruits(false);
	};
	const toggleDeleteFruits = () => {
		setShowDeleteFruits(true);
		setShowSellFruits(false);
		setShowAddFruits(false);
	};

	const handleNewFruit = e => {
		e.preventDefault();
		const { target } = e;
		const values = Object.values(target).slice(0, -3);
		const newFruit = values.reduce((fruit, { name, value }) => {
			fruit[name] = value;
			return fruit;
		}, {});

		frutasApi.post('/frutas', newFruit).then(({ data }) => setNewFruit(data));
	};

	return {
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
	};
};
