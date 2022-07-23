<script context="module">
	import contentful from 'contentful';
	const { createClient } = contentful;

	let client = createClient({
		space: import.meta.env.VITE_SPACE_ID,
		accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN
	});

	export async function load() {
		let products = [];
		await client.getEntries().then((res) =>
			res.items.forEach((item) => {
				const { title, price } = item.fields;
				const { id } = item.sys;
				const product = {
					title,
					price,
					id
				};
				products = [...products, product];
			})
		);
		return {
			props: {
				products
			}
		};
	}
</script>

<script>
	export let products;
</script>

{#each products as product}
	<h1>{product.title}</h1>
	<p>{product.price}</p>
	<a href={'/products/' + product.id}>View {product.title}</a>
{/each}
