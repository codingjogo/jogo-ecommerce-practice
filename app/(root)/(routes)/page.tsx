import React from "react";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { products } from "@/lib/data";

const HomePage = () => {
	const fetchProducts = products.map((p) => p);

	return (
		<section>
			<h1 className="text-4xl">Featured Products</h1>
			<Separator className="my-4" />
			<div className="grid grid-cols-3 gap-4">
				{fetchProducts.map((product) => (
					<Card key={product.product_id}>
						<Link href={`/product/${product.product_id}`}>
							<CardHeader>
								<CardTitle>{product.product_name}</CardTitle>
							</CardHeader>
							<CardContent>
								<h2>{product.discount_percentage}%</h2>
							</CardContent>
						</Link>
						<CardFooter>
							<Button>Add to Cart</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};

export default HomePage;
