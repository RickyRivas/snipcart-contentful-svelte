<script>
	export let response;
	console.log(response);
	let products = [];

	response.items.forEach((item) => {
		console.log(item);
		const { title, id, price } = item.fields;
		// const imageUrl = 'https:' + item.fields.image.fields.file.url;
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
	<a href="/">Go home</a>
	<img src={product.imageUrl} alt="" height="300" />
{/each}
