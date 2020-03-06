import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; //eslint-disable-line no-unused-vars

function FlexLayout(props) {
	const style = Object.assign({}, props.style, {
		flexDirection: props.direction || 'row',
		flexWrap: props.wrap || 'nowrap',
		position: 'relative',
		display: 'flex',
		height: '100%',
		width: '100%',
	});
	return (
		<div className={props.className} style={style}>
			{props.children}
		</div>
	);
}
FlexLayout.propTypes = {
	direction: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
	wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
};

function FlexChild(props) {
	const style = Object.assign({
		position: 'relative',
	}, props.style, {
		flexGrow: props.grow || 0,
		flexShrink: props.shrink || 0,
		width: props.width,
		height: props.height,
	});

	return (
		<div className={props.className} style={style}>
			{props.children}
		</div>
	);
}
FlexChild.propTypes = {
	grow: PropTypes.number,
	shrink: PropTypes.number,
	width: PropTypes.any,
	height: PropTypes.any,
};

export { FlexLayout, FlexChild };
