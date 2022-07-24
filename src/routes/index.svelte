<script>
	import { onMount } from 'svelte';
	onMount(() => {
		const client = contentful.createClient({
			space: import.meta.env.VITE_SPACE_ID,
			accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN
		});

		console.log(client);
	});
</script>

<!-- 
{#each products as product}
	<h1>{product.title}</h1>
	<p>{product.price}</p>
	<a href={'/products/' + product.id}>View {product.title}</a>
{/each} -->
