import { Handler } from '@netlify/functions';

export const handler: Handler = async event => {
	const pwords = process.env.SITE_PASSWORDS?.toLowerCase();
	const body = JSON.parse(event.body ?? '');
	const match =
		pwords && pwords.split(' ').includes(body.typed.toLowerCase());

	return {
		statusCode: 200,
		body: String(match)
	};
};
