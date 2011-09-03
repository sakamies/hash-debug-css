window.onload = function(){ //using onload because we want images to be loaded when checking layout
	if(window.location.hash.match(/^#debug$/)) {
		document.body.classList.add('debug');
	}
	else if(window.location.hash.indexOf('#debug(') !== -1 && window.location.hash.indexOf(')') > 6) {
		document.body.classList.add('debug');
		var selector = window.location.hash
						.replace('#debug', '')
						.replace('(', '')
						.replace(')', '')
						.replace(/%2A/g, '*')
						.replace(/%23/g, '#')
						//attribute selectors
						.replace(/%5B/g, '[')
						.replace(/%3D/g, '=')
						.replace(/%7E/g, '~')
						.replace(/%22/g, '"')
						.replace(/%27/g, "'")
						.replace(/%5D/g, ']')
						//combinators
						.replace(/%20/g, ' ')
						.replace(/%2B/g, '+')
						.replace(/%3E/g, '>')
						.replace(/%3E/g, '>')
						;
		if (!selector) { selector = "body *"};

		try {
			var elements = document.querySelectorAll(selector);
			var element;
			// -> https://developer.mozilla.org/En/DOM/NodeList#Example
			for (element = 0; element < elements.length; ++element) {
				elements[element].style.cssText += 'outline: 1px solid #FF00FF;';
				console.log(elements[element]);
			}
			console.log('#debug css outlines added');
			console.log('selector: ' + selector);
		}
		catch(error) {
			console.error('#debug css outlines not added');
			if (error.code == 12) {
				console.error('Invalid selector: ' + selector);
			}
			else {
				console.error(error);
			}
		}
	}
};