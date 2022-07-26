import contentful from 'contentful';
const { createClient } = contentful;

// import * as contentful from 'contentful';

let client = createClient({
	space: import.meta.env.VITE_SPACE_ID,
	accessToken: import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN
});

export async function GET({ params }) {
	let id = params.id;

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
		body: {
			product
		}
	};
}
