import PageGeneric from '../../Components/PageGeneric';
import { importAll } from '../../utils/import';
import WorkImages from './WorkImages';

const images = importAll(
	require.context('../../work/sandp/img', false, /\.(png|jpe?g|svg)$/)
);

export default function SandP() {
	return (
		<PageGeneric isProtected>
			<WorkImages
				images={images as string[]}
				title="S&P Global"
				subtitle={`React, TypeScript, C#, Redux development for a financial platform that processes 10% of all EU trading volume. Mentoring and training developers. Converted codebase to TypeScript. Increased code coverage from < 2% to over 60%.'
`}
			/>
		</PageGeneric>
	);
}
