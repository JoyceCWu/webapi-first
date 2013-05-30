// Testing JSon Data 

          $(function() {
		    var beers = [{"Symbol":"MSFT","SymbolRoot":"MSFT","Description":"Microsoft Corp","AssetType":"STOCK","Exchange":"NASDAQ","FractionalDisplay":false,"DisplayType":3,"Open":0,"OpenPriceDisplay":"0.00","High":0,"HighPriceDisplay":"0.00","Low":0,"LowPriceDisplay":"0.00","PreviousClose":34.88,"PreviousClosePriceDisplay":"34.88","Last":35.16,"LastPriceDisplay":"35.16","Ask":34.96,"AskPriceDisplay":"34.96","AskSize":12500,"Bid":34.95,"BidPriceDisplay":"34.95","BidSize":50100,"NetChange":0.28,"NetChangePct":0.802752293577981651376146789,"High52Week":35.2725,"High52WeekPriceDisplay":"35.27","Low52Week":26.26,"Low52WeekPriceDisplay":"26.26","Volume":32371572,"PreviousVolume":38419848,"Currency":"USD","CountryCode":"United States","StrikePrice":0,"StrikePriceDisplay":"0.00","NameExt":"","MinMove":1,"PointValue":1,"Close":35.16,"ClosePriceDisplay":"35.16","Error":null,"DailyOpenInterest":0,"IsDelayed":false},{"Symbol":"GOOG","SymbolRoot":"GOOG","Description":"Google Inc Cl A","AssetType":"STOCK","Exchange":"NASDAQ","FractionalDisplay":false,"DisplayType":3,"Open":869.92,"OpenPriceDisplay":"869.92","High":878.9,"HighPriceDisplay":"878.90","Low":866.41,"LowPriceDisplay":"866.41","PreviousClose":868.31,"PreviousClosePriceDisplay":"868.31","Last":874.85,"LastPriceDisplay":"874.85","Ask":875,"AskPriceDisplay":"875.00","AskSize":500,"Bid":874.81,"BidPriceDisplay":"874.81","BidSize":300,"NetChange":6.54,"NetChangePct":0.7531872257603851159148230471,"High52Week":920.6,"High52WeekPriceDisplay":"920.60","Low52Week":556.5201,"Low52WeekPriceDisplay":"556.52","Volume":1686006,"PreviousVolume":2014246,"Currency":"USD","CountryCode":"United States","StrikePrice":0,"StrikePriceDisplay":"0.00","NameExt":"","MinMove":1,"PointValue":1,"Close":874.85,"ClosePriceDisplay":"874.85","Error":null,"DailyOpenInterest":0,"IsDelayed":false}]


		    var counter 

			    var viewModel = {
			        query: ko.observable('')
			    };


			    viewModel.beers = ko.dependentObservable(function() {
			        var search = this.query().toLowerCase();
			        return ko.utils.arrayFilter(beers, function(beer) {
			            return beer.Symbol.toLowerCase().indexOf(search) >= 0;
			        });
			    }, viewModel);

			    ko.applyBindings(viewModel);

			    function createList(beers){
		    		// iterate over beers

			    }

		    	function create(beer){
		    		var model = {
	    				beer:beer,
	    				collapse: function(currentElement,uiob){
	    					$(".collapse").collapse()
	    						
	    				}

		    		}
	    			return model;

		    	}


/////////////////////////////////////////////////////////



                function AppViewMode1() {

                	 var stocks = [{"Symbol":"MSFT","SymbolRoot":"MSFT","Description":"Microsoft Corp","AssetType":"STOCK","Exchange":"NASDAQ","FractionalDisplay":false,"DisplayType":3,"Open":0,"OpenPriceDisplay":"0.00","High":0,"HighPriceDisplay":"0.00","Low":0,"LowPriceDisplay":"0.00","PreviousClose":34.88,"PreviousClosePriceDisplay":"34.88","Last":35.16,"LastPriceDisplay":"35.16","Ask":34.96,"AskPriceDisplay":"34.96","AskSize":12500,"Bid":34.95,"BidPriceDisplay":"34.95","BidSize":50100,"NetChange":0.28,"NetChangePct":0.802752293577981651376146789,"High52Week":35.2725,"High52WeekPriceDisplay":"35.27","Low52Week":26.26,"Low52WeekPriceDisplay":"26.26","Volume":32371572,"PreviousVolume":38419848,"Currency":"USD","CountryCode":"United States","StrikePrice":0,"StrikePriceDisplay":"0.00","NameExt":"","MinMove":1,"PointValue":1,"Close":35.16,"ClosePriceDisplay":"35.16","Error":null,"DailyOpenInterest":0,"IsDelayed":false},{"Symbol":"GOOG","SymbolRoot":"GOOG","Description":"Google Inc Cl A","AssetType":"STOCK","Exchange":"NASDAQ","FractionalDisplay":false,"DisplayType":3,"Open":869.92,"OpenPriceDisplay":"869.92","High":878.9,"HighPriceDisplay":"878.90","Low":866.41,"LowPriceDisplay":"866.41","PreviousClose":868.31,"PreviousClosePriceDisplay":"868.31","Last":874.85,"LastPriceDisplay":"874.85","Ask":875,"AskPriceDisplay":"875.00","AskSize":500,"Bid":874.81,"BidPriceDisplay":"874.81","BidSize":300,"NetChange":6.54,"NetChangePct":0.7531872257603851159148230471,"High52Week":920.6,"High52WeekPriceDisplay":"920.60","Low52Week":556.5201,"Low52WeekPriceDisplay":"556.52","Volume":1686006,"PreviousVolume":2014246,"Currency":"USD","CountryCode":"United States","StrikePrice":0,"StrikePriceDisplay":"0.00","NameExt":"","MinMove":1,"PointValue":1,"Close":874.85,"ClosePriceDisplay":"874.85","Error":null,"DailyOpenInterest":0,"IsDelayed":false}]
                
                // console.log(stocks[0].Symbol);

				 	this.Symbol = stocks[0].Symbol;
					this.Description = stocks[0].Description;
					this.Exchange = stocks[0].Exchange;
					this.NetChange = stocks[0].NetChange;
					this.LastPriceDisplay = stocks[0].LastPriceDisplay;
				}

				ko.applyBindings (new AppViewMode1());
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