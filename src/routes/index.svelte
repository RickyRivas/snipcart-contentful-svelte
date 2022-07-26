<script context="module">
	const base = 'https://cdn.contentful.com/spaces';

	let space = import.meta.env.VITE_SPACE_ID;
	let accessToken = import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN;
	export async function load({ fetch }) {
		const response = await fetch(`${base}/${space}/entries?access_token=${accessToken}`).then(
			(res) => res.json()
		);

		return {
			props: {
				response
			}
		};
	}
</script>

<script>
	export let response;
	let products = [];
	response.items.map((item) => {
		const { title, price } = item.fields;
		const id = item.sys.id;

		const prod = {
			title,
			id,
			price
		};
		products = [...products, prod];
	});
</script>

Detailed product info
{#each products as product}
	<h1>{product.title}</h1>
	<a href={'/products/' + product.id}>View</a>
{/each}
