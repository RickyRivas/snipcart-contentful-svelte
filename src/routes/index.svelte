<script context="module">
	// let client = contentful.createClient({
	// 	space: import.meta.env.VITE_SPACE_ID,
	// 	accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN
	// });

	// export async function load() {
	// 	let products = [];
	// 	await client.getEntries().then((res) =>
	// 		res.items.forEach((item) => {
	// 			const { title, price } = item.fields;
	// 			const { id } = item.sys;
	// 			const product = {
	// 				title,
	// 				price,
	// 				id
	// 			};
	// 			products = [...products, product];
	// 		})
	// 	);
	// 	return {
	// 		props: {
	// 			products
	// 		}
	// 	};
	// }
</script>

<script>
	import { onMount } from 'svelte';
	onMount(() => {
		let client = contentful.createClient({
			space: import.meta.env.VITE_SPACE_ID,
			accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN
		});

		let products = [];

		async function load() {
			await client.getEntries().then((res) =>
				res.items.forEach((item) => {
					const { title, price } = item.fields;
					const { id } = item.sys;
					const product = {
						title,
						price,
						id
					};
					products.push(product);
				})
			);
			console.log(products);
		}
		load();
	});
</script>

<!-- {#each products as product}
	<h1>{product.title}</h1>
	<p>{product.price}</p>
	<a href={'/products/' + product.id}>View {product.title}</a>
{/each} -->
