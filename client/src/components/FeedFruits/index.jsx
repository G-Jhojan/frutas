import { FruitsCard } from '../FruitsCard';

export const FeedFruits = ({ fruits = [], setFruitsToSell }) => {
	return fruits.map(fruit => (
		<FruitsCard key={fruit._id} {...fruit} setFruitsToSell={setFruitsToSell} />
	));
};
