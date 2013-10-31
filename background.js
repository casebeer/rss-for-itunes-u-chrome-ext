(function (chrome) {
	var iTunesUBaseUrl = 'https://itunes.apple.com/us/course/';
	function checkUrl(tab) {
		if (typeof tab.id !== 'undefined' && 
			tab.url.indexOf(iTunesUBaseUrl) === 0) {
			chrome.pageAction.show(tab.id);
			chrome.pageAction.setPopup({
				'tabId': tab.id,
				'popup': 'popup.html#' + encodeURIComponent(tab.url)
			});
		}
	}
	// activate pageAction on all tabs on extension load
	chrome.tabs.query({}, function (tabs) {
		var i;
		for (i = 0; i < tabs.length; i++) {
			checkUrl(tabs[i]);
		}
	});
	// activate pageAction on any tab event
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		checkUrl(tab);
	});
}(chrome));
