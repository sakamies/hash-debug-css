Hash debug css
=============

Add some debug styles to your html with a url hash of #debug

Usage
---

Include the js/hash-debug-css.js in your html document. Type something like the following to your address bar:

    url#debug(selector)
    
    tastycandy.com#debug(.candy)
    localhost.dev#debug(body p)

Any elements that match the selector will get an inline style of `outline: 1px solid purple`. The selector can be pretty much any valid css selector. An empty selector will use the selector `body *`. Using #debug will also add the class `debug` to the body element, so you can use your own css to apply debug styles.

Debug outlined elements will be logged to the console for reference.

Browser support
---

Only works in recent browsers for now. Uses `window.location.hash`, `classList` and `cssText`.