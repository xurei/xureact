import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; //eslint-disable-line no-unused-vars
import deepEqual from 'deep-eql';
import injectCss from '../../util/inject-css';

/**
 * An uncontrolled checkbox with all the required logic but no rendering.
 * A renderer prop is provided to implement the rendering itself as a pure component.
 */
class Checkbox extends React.Component {
	static propTypes = {
		id: PropTypes.string,
		className: PropTypes.string,
		name: PropTypes.string,
		checked: PropTypes.bool.isRequired,
		disabled: PropTypes.bool,
		tabindex: PropTypes.number,
		onClick: PropTypes.func.isRequired,

		// The pure component used to render the various states of the checkbox. A default renderer is provided (see DefaultCheckboxRenderer)
		renderer: PropTypes.oneOfType([
			PropTypes.instanceOf(React.Component),
			PropTypes.func,
		]).isRequired,
	};

	state = {
		focus: false,
		hover: false,
	};

	static styles = {
		mainDiv: { display: 'inline-block', verticalAlign: 'middle' },
		checkboxWrapper: { display: 'inline-block', position: 'relative' },
		input: {
			//visibility: 'hidden',
			opacity: 0,
			position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
		},
	};

	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	render() {
		const props = this.props;
		let Renderer = props.renderer;
		if (typeof(Renderer) === 'undefined') {
			console.warn('No renderer set for Checkbox. Set the renderer to DefaultCheckboxRenderer for the default behavior.');
			Renderer = DefaultCheckboxRenderer;
		}
		return (
			<div className={props.className} style={Checkbox.styles.mainDiv}>
				<span className="xureact-checkbox__wrapper" tabIndex={props.tabindex} style={Checkbox.styles.checkboxWrapper}
					onClick={props.disabled ? null : props.onClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
					<input type="checkbox" checked={props.checked} style={Checkbox.styles.input}
						readOnly={true}
						tabIndex={props.tabindex}
						onFocus={this.handleFocus} onBlur={this.handleBlur}>
					</input>
					<Renderer checked={props.checked} disabled={props.disabled} hover={this.state.hover} focus={this.state.focus}/>
				</span></div>
		);
	}

	handleBlur(/*e*/) {
		this.setState(s => ({
			...s,
			focus: false,
		}));
	}

	handleFocus(/*e*/) {
		this.setState(s => ({
			...s,
			focus: true,
		}));
	}

	handleMouseEnter(/*e*/) {
		this.setState(s => ({
			...s,
			hover: true,
		}));
	}

	handleMouseLeave(/*e*/) {
		this.setState(s => ({
			...s,
			hover: false,
		}));
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !deepEqual(this.props, nextProps) || !deepEqual(this.state, nextState);
	}
}

class DefaultCheckboxRenderer extends React.Component {
	static propTypes = {
		checked: PropTypes.bool.isRequired,
		//hover: PropTypes.bool.isRequired,
		focus: PropTypes.bool.isRequired,
		disabled: PropTypes.bool,
	};

	static styles = {
		box: { position: 'relative', top: '-1px', left: '1px' },
	}

	componentDidMount() {
		injectCss('xureact-checkbox__default-renderer',
			//language=CSS
			`
				.xureact-checkbox__default-renderer {
					display: inline-block;
					width: 22px;
					height: 22px;
					background: #fff;
					text-align: center;
					border-radius: 4px;
					cursor: pointer;
					border: solid 1px #ddd;
					font-size: 20px;
					line-height: 22px;
					position: relative;
					top: 1px;
					user-select: none;
				}
				.xureact-checkbox__default-renderer > span {
					opacity: 0.0;
				}

				.xureact-checkbox__default-renderer-checked {
					background: #285dfc;
					border-color: #285dfc;
					color: #fff;
				}
				.xureact-checkbox__default-renderer-checked > span {
					opacity: 1.0;
				}

				.xureact-checkbox__default-renderer-checked-disabled {
					background: #aaa;
					border-color: #aaa;
					color: #fff;
					font-size: 20px;
					line-height: 20px;
					cursor: default;
				}

				.xureact-checkbox__default-renderer:hover, .xureact-checkbox__default-renderer-focus {
					border-color: #285dfc;
				}
				.xureact-checkbox__default-renderer:hover > span, .xureact-checkbox__default-renderer-focus > span {
					opacity: 0.62;
				}

				.xureact-checkbox__default-renderer-checked:hover, .xureact-checkbox__default-renderer-checked.xureact-checkbox__default-renderer-focus {
					border-color: #FFF;
				}
			`);
	}

	render() {
		const props = this.props;
		const subclass = `xureact-checkbox__default-renderer${props.checked ? '-checked' : ''}${props.disabled ? '-disabled' : ''}`;
		const focusclass = `xureact-checkbox__default-renderer${props.focus ? '-focus' : ''}`;

		return (
			<div className={`xureact-checkbox__default-renderer ${subclass} ${focusclass}`}>
				<span style={DefaultCheckboxRenderer.styles.box}>✓</span>
			</div>
		);
	}
}

export default Checkbox;
export { DefaultCheckboxRenderer };
