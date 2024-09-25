import React from "react";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { products } from "@/lib/data";

const ProductPage = ({
	params,
}: {
	params: {
		productId: string;
	};
}) => {
	const productId = params.productId;
	const product = products.filter(
		(p) => p.product_id === Number(productId)
	)[0];
	const { product_name, brand, category } = product;
	return (
		<section>
			<Card>
				<CardHeader>
					<CardTitle>{product_name}</CardTitle>
				</CardHeader>
				<CardContent>
					<h2>Brand: {brand}</h2>
          <h2>Category: {category}</h2>
				</CardContent>
			</Card>
		</section>
	);
};

export default ProductPage;
