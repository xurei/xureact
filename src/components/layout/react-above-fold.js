const React = require('react'); //eslint-disable-line no-unused-vars
const PropTypes = require('prop-types');
const deepEqual = require('deep-eql');
import Styled from 'styled-components';

/**
 * Full width div with height above the fold. Resizes automatically on page resize
 */
class AboveFold extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		minHeight: PropTypes.number,
		marginTop: PropTypes.number,
		marginBottom: PropTypes.number,
	};
	
	render() {
		return (
			<div className={this.props.className}>
				{this.props.children}
			</div>
		);
	}
	
	shouldComponentUpdate(nextProps) {
		return !deepEqual(this.props, nextProps);
	}
}

const defaultHeights = {
	minHeight: 180,
	marginTop: 0,
	marginBottom: 250,
};

//language=SCSS
export default Styled(AboveFold)`
& {
	transition: height linear 0.1s;
	
	${props => {
		const propHeights = Object.assign({}, defaultHeights, {
			minHeight: props.minHeight || defaultHeights.minHeight,
			marginTop: props.marginTop || defaultHeights.marginTop,
			marginBottom: props.marginBottom || defaultHeights.marginBottom,
		});
		
		const heights = [];
		heights[0] = propHeights.minHeight;
		for (let i=propHeights.minHeight + propHeights.marginTop + propHeights.marginBottom; i < 1080; i+=10) {
			heights[i] = Math.max(propHeights.minHeight, i - propHeights.marginTop - propHeights.marginBottom);
		}
		return Object.keys(heights).map(height => {
			return `
			@media(min-height: ${height}px) {
				height: ${heights[height]}px;
			}
		`;
		}).join('\n');
	}}
}
`;
