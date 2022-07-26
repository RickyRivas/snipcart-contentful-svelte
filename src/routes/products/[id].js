const base = 'https://cdn.contentful.com/spaces';

let space = import.meta.env.VITE_SPACE_ID;
let accessToken = import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN;
export async function GET({ params }) {
	let id = params.id;

	const response = await fetch(
		` https://cdn.contentful.com/spaces/${space}/entries/${id}?access_token=${accessToken}`
	).then((res) => res.json());

	return {
		body: {
			response
		}
	};
}
