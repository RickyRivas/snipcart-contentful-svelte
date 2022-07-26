<script>
	export let response;
	let item = response;
	console.log(response);
	const { title, price } = item.fields;
	const id = item.sys.id;

	const prod = {
		title,
		id,
		price
	};
</script>

Detailed product info

<h1>{prod.title}</h1>
<a href="/">Go home</a>
<img src={prod.imageUrl} alt="" height="300" />
