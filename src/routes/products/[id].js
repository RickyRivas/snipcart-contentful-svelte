const base = 'https://cdn.contentful.com/spaces';

let space = import.meta.env.VITE_SPACE_ID;
let accessToken = import.meta.env.VITE_CONTENTFUL_PUBLIC_TOKEN;
let products = [];
export async function GET({}) {
	const response = await fetch(`${base}/${space}/entries?access_token=${accessToken}`).then((res) =>
		res.json()
	);

	return {
		body: {
			response
		}
	};
}
