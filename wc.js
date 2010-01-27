function show(msg) {
    jetpack.notifications.show(msg);
}

function countWords() {
    var doc = jetpack.tabs.focused.contentDocument;
    doc = $(doc);
    var pivots = doc
        .find("body")
        .text()
        .replace(/^\s+|\s$/gi, "")
        .replace(/<.*?>/gi, "")
        .split(" ")
    var count = 0;
    for (var word in pivots) {
        var stripped = word.replace(/^\s+|\s$/gi);
        if (/\w+/i.test(stripped))
            count++;
    }
    return count;
}

jetpack.statusBar.append({
	html: "<b>WC</b>",
	width: 45,
	onReady: function(widget) {
			$(widget).click(function() {
				show(countWords());
			})
		}
});
