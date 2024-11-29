import "../assets/css/services.css";

import { useMemo, useState } from "react";
import { products } from "../data/products";


export function Services() {
	const [searchQuery, setSearchQuery] = useState("");
	const [minPriceQuery, setMinPriceQuery] = useState(0);
	const [maxPriceQuery, setMaxPriceQuery] = useState(0);
	const [quantities, setQuantities] = useState({});

	const productsResult = useMemo(() => products.filter(product => {
		const searchMatch = searchQuery.length !== 0 ? product.name.toLowerCase().includes(searchQuery) : true;
		const minPriceMatch = product.price >= minPriceQuery;
		const maxPriceMatch = maxPriceQuery !== 0 ? product.price <= maxPriceQuery : true;
		return searchMatch && minPriceMatch && maxPriceMatch;
	}), [searchQuery, minPriceQuery, maxPriceQuery]);

	function calculateTotalCost(product) {
		const quantity =  quantities[product.id] ?? 1;
		const cost = quantity * product.price;
		return cost;
	}

	function handleProductQuantityChange(event, productId) {
		const element = event.target;
		const quantity = parseInt(element.value)
		setQuantities(x => ({ ...x, [productId]: quantity }));
	}

	function handleFilterChange(event) {
		const element = event.target;

		if (element.id === "search") {
			setSearchQuery(element.value.toLowerCase());
		}
		else if (element.id === "price-min") {
			const value = parseInt(element.value)
			setMinPriceQuery(value)
		}
		else if (element.id === "price-max") {
			const value = parseInt(element.value)
			setMaxPriceQuery(value)
		}
	}

	return (
		<div className="services-page">
			<h1 className="h1">Our Custom Printing Services</h1>
			<div className="product-filter">
				<div className="nowrap">
					<label htmlFor="search">Search</label>
					<input type="search" id="search" className="input-field" onChange={handleFilterChange} />
				</div>
				<div className="nowrap">
					<label htmlFor="price-min">Min price</label>
					<input type="number" id="price-min" className="input-field" onChange={handleFilterChange} min={0} />
				</div>
				<div className="nowrap">
					<label htmlFor="price-max">Max price</label>
					<input type="number" id="price-max" className="input-field" onChange={handleFilterChange} min={0} />
				</div>
			</div>

			<div className="products">
				{productsResult.map(product => (
					<div key={product.id} className="product">
						<img src="" alt="" className="product-image" />
						<h3 className="product-name">{product.name}</h3>
						<p className="product-description">{product.description}</p>
						<p className="product-price nowrap">Unit cost: ${product.price}</p>
						<div className="product-quantity-group nowrap">
							<label htmlFor="quantity">Quantity</label>
							<input type="number" id="quantity" className="input-field" defaultValue={1} onChange={e => handleProductQuantityChange(e, product.id)} min={1} />
						</div>
						<p className="product-total-price nowrap">Total cost: ${calculateTotalCost(product)}</p>
					</div>
				))}
			</div>
		</div>
	)
}