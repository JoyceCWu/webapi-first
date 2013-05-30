// Testing JSon Data 

$(function() {
	var beers = [];
	var viewModel = {
		query: ko.observable('')
	};

	viewModel.beers = ko.dependentObservable(function() {
		var search = this.query().toLowerCase();
		// search from the WebAPI
		$.get('https://qa.api.tradestation.com/v2/data/symbols/suggest/' + search + '?oauth_token=Q0FnZFdqRUFNZVB2bGRWaUR4bjF4ZUNOOE5OOU9XSElJdjJMUmpHd1lvQkZFODg3MVVCUTMrSHo3eC8zZk4vRElXSE82aDZ4RS9tL1E5VGplbVRpdDJJYXJOd2twWlJmNzZSRUZyTEFsSkxkUU5hWFc4NEdZc3M5eE5WMU4rT2tzQ1BFV3c1OUlNb1E0VSszQnNxVFJJcUlHQXJTTnExRHNKdmNuOERxRGMwem1ySHQzdEdpN2NnNkY3K3oxY1phWkkzUCtlbUdMWHV6dmwyaXZoOVdMeUVPK2hMcXlOWlc1TkE3eHp1M0h0MVNnT0RZZ2NaV1F0ZGh2NnNXdTR5RVZUUmlEdkI4M0NPOGlvNzFNZVFPMWJWWDVZbHlDbjVnMHlONVhMT2gwZ3JMdFY5UGVkWkJtMnB0ZldDeWs4d1cvUkgxMFJJWXhjZWxmUUc3WVFMNnVybm1velI3VWFMOWhWVml4ZWdBV2pVPQ%3d%3d', function(data) {
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