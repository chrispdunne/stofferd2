import classNames from 'classnames';
import { useCallback } from 'react';
import { Toggl } from './styles';

type Props = {
	className?: string;
	mobNavVis: boolean;
	setMobNavVis: (mnv: boolean) => void;
};

const Toggle = ({ className = '', mobNavVis, setMobNavVis }: Props) => {
	const onClick = useCallback(() => {
		setMobNavVis(!mobNavVis);
	}, [mobNavVis, setMobNavVis]);
	return (
		<Toggl
			className={classNames('mobile', className, { mobNavVis })}
			onClick={onClick}
		>
			<div className="piece1" style={{ background: '#fff' }} />
			<div className="piece2" style={{ background: '#fff' }} />
			<div className="piece3" style={{ background: '#fff' }} />
		</Toggl>
	);
};

export default Toggle;
