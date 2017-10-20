const React = require('react'); //eslint-disable-line no-unused-vars
const PropTypes = require('prop-types');
const deepEqual = require('deep-eql');

const defaultSampleWords = (
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada justo id lobortis bibendum. ' +
	'Integer faucibus a turpis cursus dapibus. Morbi justo massa, bibendum vitae turpis in, congue consequat erat. ' +
	'Nam nec ante ullamcorper, suscipit neque id, pretium felis. ' +
	'Phasellus eleifend maximus risus, at fermentum nisi vulputate sed. ' +
	'Praesent tristique, augue sed finibus porta, velit odio sodales quam, eu auctor nisi neque nec nunc. ' +
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, justo in porttitor tristique, ligula ' +
	'consequat ante, non lacinia orci tellus nec diam. Vestibulum eros ex, facilisis id risus vitae, auctor aliquet. ' +
	'Donec neque metus, bibendum vel velit quis, tempor pretium sem. ' +
	'Donec lectus dolor, tristique a lectus et, elementum luctus lacus. ' +
	'In hac habitasse platea dictumst. Praesent ligula justo, dapibus eu finibus semper, egestas quis ipsum. ' +
	'Praesent malesuada augue suscipit, aliquam purus in, mattis risus. Curabitur imperdiet fringilla ligula dictum. ' +
	'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sollicitudin, nisi eu bibendum rhoncus, ' +
	'tellus lectus vehicula ligula, sit amet mattis lectus mauris et tellus. Aenean sit amet faucibus est. ' +
	'Sed mollis dictum accumsan. Praesent vitae vulputate felis. Praesent bibendum faucibus mi. ' +
	'Nunc in ipsum non neque ornare porttitor. Proin et ligula lobortis, egestas mauris non, tempor libero. ' +
	'Phasellus ante tortor, pretium id elit ornare, vulputate viverra nunc. Vestibulum ante ipsum primis in faucibus ' +
	'luctus et ultrices posuere cubilia Curae; Donec quis bibendum neque. Proin eu congue libero, sed facilisis. ' +
	'Curabitur gravida arcu augue, nec suscipit nulla auctor ut. Curabitur imperdiet nec augue ut consequat. ' +
	'Cras placerat volutpat arcu et vestibulum. Vivamus ac dapibus nulla. Ut pretium quam vel feugiat consectetur. ' +
	'Etiam quis sapien commodo justo vehicula rhoncus nec ac nibh. Phasellus vehicula eu neque ac consectetur. ' +
	'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed cursus urna, ' +
	'sit amet malesuada nunc eleifend ac. Praesent efficitur tortor imperdiet, convallis turpis ut, eleifend lacus. ' +
	'Suspendisse potenti. Maecenas non rutrum risus. Sed vehicula ullamcorper odio, sed lobortis tellus interdum. ' +
	'Suspendisse ut iaculis metus. Nullam vitae mi felis. Maecenas metus leo, fermentum eget pellentesque ut, ' +
	'eget quam. Aliquam rhoncus vestibulum nunc, et sagittis felis. Duis auctor justo eget tellus sodales euismod.'
).split(' ');

/**
 * Lorem
 *
 * Simple lorem ipsum component for UI mocking.
 */
class Lorem extends React.Component {
	render() {
		const words = this.props.words || 300;
		const sampleWords = (() => {
			if (!this.props.sampleText) {
				return defaultSampleWords;
			}
			else {
				return this.props.sampleText.split(' ');
			}
		})();
		
		const text = (() => {
			let out = [];
			let wordsToAdd = words;
			while (wordsToAdd >= sampleWords.length) {
				out = out.concat(sampleWords);
				wordsToAdd -= sampleWords.length;
			}
			if (wordsToAdd > 0) {
				out = out.concat(sampleWords.slice(0, wordsToAdd));
			}
			out = out.join(' ');
			if (out.endsWith(',') || out.endsWith(';') || out.endsWith('.')) {
				out = out.substr(0, out.length-1);
			}
			return out + '.';
		})();
		
		return (
			<span>{text}</span>
		);
	}
	
	shouldComponentUpdate(nextProps) {
		try {
			return !deepEqual(this.props, nextProps);
		}
		catch (e) {
			console.warn(e);
			return true;
		}
	}
}

Lorem.propTypes = {
	words: PropTypes.number,
	sampleText: PropTypes.string,
};

module.exports = Lorem;
