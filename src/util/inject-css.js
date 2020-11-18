const injectedCss = {};

/**
 * Inject some CSS directly as a <style> tag in the header.
 * @param id unique identifier of the code to inject, to prevent injecting it multiple times
 * @param css the css to inject
 */
export default function injectCss(id, css) {
	if (typeof(window) !== 'undefined') {
		const window = global;
		const document = window.document;
		if (!injectedCss[id]) {
			injectedCss[id] = true;
			const styleCode = document.createElement('STYLE');
			styleCode.appendChild(document.createTextNode(css));
			document.head.appendChild(styleCode);
		}
	}
}
