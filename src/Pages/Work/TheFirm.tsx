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
				subtitle={`TBC.
            
TBC`}
			/>
		</PageGeneric>
	);
}
