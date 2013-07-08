$(function() {
    var extractToken = function(hash) {
            var match = hash.match(/access_token=(\w+)/);
            return !!match && match[1];
    };
	var beers = [];
	// [{
	// 	"Name": "A",
	// 	"Description": "Agilent Technologies",
	// 	"id": "collapse" + 1
	// }, {
	// 	"Name": "B",
	// 	"Description": "Bgilent Technologies",
	// 	"id": "collapse" + 2
	// }];
    var token = extractToken(document.location.hash);
	var viewModel = {
		query: ko.observable('')
	};

	viewModel.beers = ko.dependentObservable(function() {
		var search = this.query().toLowerCase();
		// search from the WebAPI
		$.get('http://il01qa-webapi03.qa.tradestation.com/v2/data/symbols/suggest/' + search + '?$top=20&oauth_token=' + token, function(data) {
				// add id
				$.each(data, function(index, value) {
					value.id = "collapse" + index;
				});
				// return dataset
				beers = data
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

