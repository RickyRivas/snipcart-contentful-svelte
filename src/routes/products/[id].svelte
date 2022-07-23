<script context="module">
	import * as contentful from 'contentful';
	import createClient from 'contentful';

	let client = contentful.createClient({
		space: import.meta.env.VITE_SPACE_ID,
		accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN
	});

	export async function load({ params }) {
		let id = params.id;
		console.log(id);
		let product;
		await client.getEntry(id).then((res) => {
			const { title, id, price } = res.fields;
			const imageUrl = 'https:' + res.fields.image.fields.file.url;
			const prod = {
				title,
				id,
				price,
				imageUrl
			};
			product = prod;
		});
		return {
			props: {
				product
			}
		};
	}
</script>

<script>
	export let product;
</script>

Detailed product info
<h1>{product.title}</h1>
<a href="/">Go home</a>
<img src={product.imageUrl} alt="" height="300" />
