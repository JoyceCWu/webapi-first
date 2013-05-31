// Testing JSon Data 

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
		
		// return ko.utils.arrayFilter(beers, function(beer) {
		// 	return beer.Name.toLowerCase().indexOf(search) >= 0;
		// });
	}, viewModel);

	ko.applyBindings(viewModel);

	// function createList(beers){
	// 	// iterate over beers

	// }

	// function create(beer){
	// 	var model = {
	// 		beer:beer,
	// 		collapse: function(currentElement,uiob){
	// 			$(".collapse").collapse()

	// 		}

	// 	}
	// 	return model;

	// }
});




// Testing Charting

$(function() {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function(data) {

        // create the chart
        $('#container-stock').highcharts('StockChart', {

            xAxis: {
                gapGridLineWidth: 0
            },
            
            rangeSelector : {
                buttons : [{
                    type : 'hour',
                    count : 1,
                    text : '1h'
                }, {
                    type : 'day',
                    count : 1,
                    text : '1D'
                }, {
                    type : 'all',
                    count : 1,
                    text : 'All'
                }],
                selected : 1,
                inputEnabled : false
            },
            
            series : [{
                name : 'AAPL',
                type: 'area',
                data : data,
                gapSize: 5,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor : {
                    linearGradient : {
                        x1: 0, 
                        y1: 0, 
                        x2: 0, 
                        y2: 1
                    },
                    stops : [[0, Highcharts.getOptions().colors[0]], [1, 'rgba(0,0,0,0)']]
                },
                threshold: null
            }]
        });
    });
});


// $('#demoing').click(function () {
//     console.log("boo");
//  $('demo').remove();
// });

$("#appendedInput").click(function () {
    console.log("as;ldfk");
 //   $("#remove").addClass("fadeOut");
    $(".demo").remove();
});

$("#plusle").click(function () {
    console.log("booooo");
    $(".accordion").remove();
});