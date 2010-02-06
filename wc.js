function show(msg) {
    jetpack.notifications.show(msg);
}

function countWords() {
    var doc = jetpack.tabs.focused.contentDocument;
    doc = $(doc);
    var pivots = doc.find("body").text().split(/[\s\,\.]/);
    var count = 0;
    for (var i = 0; i < pivots.length; i++) {
        var word = pivots[i];
        if (/^\w+/i.test(word)) count++;
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
