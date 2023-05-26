import { Handler } from '@netlify/functions';
import * as postmark from 'postmark';

const client = new postmark.ServerClient(
	process.env.POSTMARK_SERVER_API_TOKEN ?? ''
);

export const handler: Handler = async event => {
	const body = JSON.parse(event.body ?? '');

	const response = await client.sendEmail({
		From: 'hello@stofferd.com',
		To: 'hello@stofferd.com',
		Subject: `Message from ${body.name}`,
		TextBody: `Message from name: ${body.name},
         email: ${body.email}, 
         message: ${body.message} `,
		MessageStream: 'broadcast'
	});

	return {
		statusCode: 200,
		body: JSON.stringify(response)
	};
};
