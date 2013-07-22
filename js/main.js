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
		// $.get('http://il01qa-webapi03.qa.tradestation.com/v2/data/symbols/suggest/' + search + '?$top=20&oauth_token=' + token, function(data) {
		$.get('http://il01engv03.eng.tradestation.com/v2/data/symbols/suggest/' + search + '?$top=20&authorization=go', function(data) {
				var symbolNames = new Array();

				$.each(data, function(index,value) {
					symbolNames[index] = value.Name;

				});

				var symbolJoin = symbolNames.join();


				// get all the quotes of all matching symbols
				// $.get('http://il01qa-webapi03.qa.tradestation.com/v2/data/quote/' + symbolJoin +'?$select=Symbol,Exchange,AskPriceDisplay,HighPriceDisplay,High52WeekPriceDisplay,LastPriceDisplay,NetChangePct,BidPriceDisplay,LowPriceDisplay,Low52WeekPriceDisplay,ClosePriceDisplay,Volume&oauth_token=' + token).done(function(quoteData) {
				$.get('http://il01engv03.eng.tradestation.com/v2/data/quote/' + symbolJoin +'?$select=Symbol,Exchange,AskPriceDisplay,HighPriceDisplay,High52WeekPriceDisplay,LastPriceDisplay,NetChangePct,BidPriceDisplay,LowPriceDisplay,Low52WeekPriceDisplay,ClosePriceDisplay,Volume&authorization=go').done(function(quoteData) {
						//console.log(quoteData[0].High);
						//console.log(qd);



						//console.log(quoteData);
						// add id
					$.each(data, function(index, value) {
						value.id = "collapse" + index;

						value.Symbol = quoteData[index].Symbol;
						value.Exchange = quoteData[index].Exchange;
						value.AskPriceDisplay = quoteData[index].AskPriceDisplay;
						value.HighPriceDisplay = quoteData[index].HighPriceDisplay;
						value.High52WeekPriceDisplay = quoteData[index].High52WeekPriceDisplay;
						value.LastPriceDisplay = quoteData[index].LastPriceDisplay;
						value.NetChangePct = quoteData[index].NetChangePct.toFixed(2);
						value.BidPriceDisplay = quoteData[index].BidPriceDisplay;
						value.LowPriceDisplay = quoteData[index].LowPriceDisplay;
						value.Low52WeekPriceDisplay = quoteData[index].Low52WeekPriceDisplay;
						value.ClosePriceDisplay = quoteData[index].ClosePriceDisplay;
						value.Volume = quoteData[index].Volume;

						
					});
					
					beers = data
				});

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

var favoriteSymbols = JSON.parse(localStorage.getItem("favoriteSymbols"));

$(function() {
    $(document).on('click', '.saveToFavorites', function(){ 
        
        //console.log("Success!");

        var symbolToAdd = $(this).attr('value');
        var validToAdd = true;
        // var favoriteSymbols = JSON.parse(localStorage.getItem("favoriteSymbols"));
        if(favoriteSymbols == null)
        	favoriteSymbols = [];

        for(var i = 0; i < favoriteSymbols.length; i++) {
        	if(favoriteSymbols[i].symb == symbolToAdd) {
        		validToAdd = false;
        	}
        }

        if(validToAdd == true) {
        	favoriteSymbols.push({symb: symbolToAdd});
        }

        localStorage.setItem("favoriteSymbols", JSON.stringify(favoriteSymbols));

        console.log(favoriteSymbols);

        //return favoriteSymbols;\

        return favoriteSymbols;

    });	

});

$(function() {
	$(document).on('click','.removeFromFavorites', function() {
		
		var symbolToRemove = $(this).attr('value');
		// alert(symbolToRemove);

		// var favoriteSymbols = JSON.parse(localStorage.getItem("favoriteSymbols"));

		for(var i= 0; i < favoriteSymbols.length; i++) {
			// console.log(favoriteSymbols[i]);
			if(favoriteSymbols[i].symb == symbolToRemove) {
				favoriteSymbols.splice(i,1);
			}
		}

		localStorage.setItem("favoriteSymbols", JSON.stringify(favoriteSymbols));

		console.log(favoriteSymbols);

		
		// localStorage.clear();
		
		return favoriteSymbols;

	});
});