import React from 'react'; //eslint-disable-line no-unused-vars
import { getIEVersion } from '../../util/get-ie-version';
const ieVersion = getIEVersion();
const isIE9 = 0 < ieVersion && ieVersion <= 9;

const commonStyle = {
	position: 'absolute', width: '100%', height: '100%', left: 0, top: 0,
};
const parentStyle = Object.assign({}, commonStyle, isIE9 ? {
	display: 'table',
} : {
	display: 'flex', alignItems: 'center',
});

const childStyle = isIE9 ? {
	display: 'table-cell', verticalAlign: 'middle', width: '100%',
} : { width: '100%' };

const VCenter = (props) => {
	return (
		<div style={parentStyle}>
			<div style={childStyle}>
				{props.children}
			</div>
		</div>
	);
};

export default VCenter;

