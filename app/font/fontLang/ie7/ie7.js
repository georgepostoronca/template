/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'langfont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-bash': '&#xe900;',
		'icon-basic': '&#xe901;',
		'icon-c': '&#xe902;',
		'icon-coffe-script': '&#xe903;',
		'icon-c-plus-plus': '&#xe904;',
		'icon-csharp': '&#xe905;',
		'icon-css': '&#xe906;',
		'icon-css3': '&#xe907;',
		'icon-dart': '&#xe908;',
		'icon-git': '&#xe909;',
		'icon-hasksel': '&#xe90a;',
		'icon-html': '&#xe90b;',
		'icon-html5': '&#xe90c;',
		'icon-java': '&#xe90d;',
		'icon-javascript': '&#xe90e;',
		'icon-jquery': '&#xe90f;',
		'icon-js2': '&#xe910;',
		'icon-linux': '&#xe911;',
		'icon-lua': '&#xe912;',
		'icon-mysql': '&#xe913;',
		'icon-node': '&#xe914;',
		'icon-objc': '&#xe915;',
		'icon-perl': '&#xe916;',
		'icon-php': '&#xe917;',
		'icon-php2': '&#xe918;',
		'icon-python': '&#xe919;',
		'icon-ruby': '&#xe91a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
