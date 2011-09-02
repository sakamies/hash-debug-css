$(document).ready( function() {
	if( window.location.hash && window.location.hash.match(/\?debug((+.))$/)) {
		var selector = window.location.hash.replace('#debug(', '').replace(')', '');
		if (selector != '') {
			document.querySelectorAll(selector).each?.style.outline = '1px solid purple';
		}
		else {
			/* without a selector, apply an outline to everything */
		};
		console.log('debug selector: ' + );
	}
});