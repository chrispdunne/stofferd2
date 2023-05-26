import PageGeneric from '../../Components/PageGeneric';
import { importAll } from '../../utils/import';
import WorkImages from './WorkImages';

const images = importAll(
	require.context('../../work/sandp/img', false, /\.(png|jpe?g|svg)$/)
);

export default function SandP() {
	return (
		<PageGeneric>
			<WorkImages
				images={images as string[]}
				title="S&P Global"
				subtitle={`TBC.
            
TBC`}
			/>
		</PageGeneric>
	);
}
