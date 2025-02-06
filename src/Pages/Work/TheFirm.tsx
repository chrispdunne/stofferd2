import PageGeneric from '../../Components/PageGeneric';
import { importAll } from '../../utils/import';
import WorkImages from './WorkImages';

const images = importAll(
	require.context('../../work/firm/img', false, /\.(png|jpe?g|svg)$/)
);

export default function TheFirm() {
	return (
		<PageGeneric>
			<WorkImages
				images={images as string[]}
				title="The Firm"
				subtitle={`Full Stack Development using React, GraphQL, Apollo, Node, Express, Twilio.
					
The Firm wanted a new booking app to schedule large crews producing TV Shows & other events. I built the new app with a GraphQL backend & API and a React frontend. It features calendar booking for multiple people, text & email sending via Twilio and PostMark, live toast notifcations and user management. There is also a crew view for so crew members can log in to the web app and view their own personal bookings calendar.`}
			/>
		</PageGeneric>
	);
}
