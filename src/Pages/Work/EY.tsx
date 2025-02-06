import PageGeneric from '../../Components/PageGeneric';
import { importAll } from '../../utils/import';
import WorkImages from './WorkImages';

const images = importAll(
	require.context('../../work/ey/img', false, /\.(png|jpe?g|svg)$/)
);

export default function EY() {
	return (
		<PageGeneric isProtected>
			<WorkImages
				images={images as string[]}
				title="Ernst & Young"
				subtitle={`React, TypeScript, Storybook.
					
Ernst & Young wanted a new app to manage R&D collaborative projects with external clients.
            
The app allows clients and EY staff to create workspaces, upload, comment on & review documents, manage users and permissions and featured a mobile chat.`}
			/>
		</PageGeneric>
	);
}
