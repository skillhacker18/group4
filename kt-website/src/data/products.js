const items = [
	{ name: 'Bottle', description: 'Custom printed bottle for any event.', price: 200, image: '/images/bottle.jpeg' },
	{ name: 'Umbrella', description: 'Custom printed umbrella for outdoor events.', price: 300, image: '/images/umbrella.jpeg' },
	{ name: 'T-shirt', description: 'Personalized T-shirt for your brand or event.', price: 300, image: '/images/tshirt.jpeg' },
	{ name: 'Book', description: 'Custom printed book with your design.', price: 150, image: '/images/book.jpeg' },
	{ name: 'Pen', description: 'Custom printed pen with your logo or message.', price: 100, image: '/images/pen.jpeg' },
	{ name: 'Cups', description: 'Custom printed cups for events or gifts.', price: 150, image: '/images/cups.jpeg' },
	{ name: 'Visors', description: 'Personalized visors for outdoor events.', price: 300, image: '/images/visors.jpeg' },
	{ name: 'Bags', description: 'Custom printed bags for branding or giveaways.', price: 200, image: '/images/bags.jpeg' },
	{ name: 'Thumbdrive', description: 'Custom printed thumb drives for promotions.', price: 100, image: '/images/thumbdrive.jpeg' },
	{ name: 'Phone Stand', description: 'Custom phone stand for business gifts or events.', price: 100, image: '/images/phonestand.jpeg' },
];

export const products = items.map((x, index) => ({ ...x, id: index + 1 }));
