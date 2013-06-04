$(function() {
    var extractToken = function(hash) {
            var match = hash.match(/access_token=(\w+)/);
            return !!match && match[1];
    };
	var beers = [];
    var token = extractToken(document.location.hash);
	var viewModel = {
		query: ko.observable('')
	};

	viewModel.beers = ko.dependentObservable(function() {
		var search = this.query().toLowerCase();
		// search from the WebAPI
		$.get('https://qa.api.tradestation.com/v2/data/symbols/suggest/' + search + '?$top=20&oauth_token=' + token, function(data) {
				beers = data;
		}, "json");

		return beers;
	}, viewModel);

	ko.applyBindings(viewModel);
});


$("#appendedInput").click(function () {
    $(".demo").remove();
});

$("#plusle").click(function () {
    $(".accordion").remove();
});