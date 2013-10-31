(function () {
	var url = decodeURIComponent(window.location.hash.substring(1)),
		id = url.match(/\/id([0-9]+)/)[1],
		rssUrl = 'https://itunesu.itunes.apple.com/WebObjects/LZDirectory.woa/ra/directory/courses/' + id + '/feed',
		p = document.createElement('p'),
		a = document.createElement('a'),
		span = document.createElement('span');

	a.setAttribute('href', rssUrl);
	a.setAttribute('target', '_blank');
	a.setAttribute('class', 'rss');
	a.appendChild(document.createTextNode('iTunes U course RSS'));
	p.appendChild(a);

	document.body.appendChild(p);
}());
