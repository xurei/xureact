/// Returns 0 if not IE, or the number if IE
export function getIEVersion() {
	const global = global || window; //eslint-disable-line no-undef
	if (global.navigator) {
		const ua = global.navigator.userAgent;
		const msie = ua.indexOf('MSIE ');

		if (msie > 0 || !!global.navigator.userAgent.match(/Trident.*rv:11\./))
		{
			return (parseInt(ua.substring(msie + 5, ua.indexOf('.', msie))));
		}
		else
		{
			return 0;
		}
	}
	else {
		return 0;
	}
}
