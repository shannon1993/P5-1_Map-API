// app.js


//**************  Model **************//
var locations = [
	{
		'name' 		: 'Space Needle',
		'address' 	: '400 Broad St,',
		'cityState'	: 'Seattle, WA'
	},
	{
		'name' 		: 'Pike Place Market',
		'address' 	: '',
		'cityState'	: 'Seattle, WA'
	},
	{
		'name' 		: 'Pioneer Square',
		'address' 	: '',
		'cityState'	: 'Seattle, WA'
	},
	{
		'name' 		: 'Kerry Park',
		'address' 	: '211 W Highland Dr,',
		'cityState'	: 'Seattle, WA'
	},
	{
		'name' 		: 'Future of Flight Aviation Center & Boeing Tour',
		'address' 	: '8415 Paine Field Blvd,',
		'cityState'	: 'Mukilteo, WA'
	}
];


//**************  ViewModel **************//

var ViewModel = function(initMap){
	// Use 'self' will always refer to the ViewModel
	var self = this;
	console.log('maps: ' + initMap);

	self.name = ko.observableArray(locations);
	self.filter = ko.observable('');

	// ko.computed: the value of 'this' refers to the computed observable...
	self.computedLocations = ko.computed(function(){
		var filterName = ko.utils.arrayFilter(self.name(), function(item){
			// true or false -> see if matching
			return item.name.toLowerCase().indexOf(self.filter().toLowerCase()) >= 0;
		});
		console.log(filterName);

		// change it will update / recreate marker on the google map
		initMap.geocodeAddress(filterName);

		// Update location list
		return filterName;
	});

	//console.log(locations[0].name);
	//console.log(self.computedLocations());

}



//ko.applyBindings(new ViewModel);

/**
* Called when google map gets loaded from index.html
* start google map, ViewModel
*/

var InitialApp = function(){
	/*
	var mapObj = initMap();
	console.log('InitialApp: ' + mapObj);
	// -> undefine why?

	console.log('InitialApp: ' + initMap);
	// -> works
	*/

	ko.applyBindings(new ViewModel(initMap));
};



// Questions for Jaili
// Ways to write functions
/*
var TestView = {

	init: function(){
		return locations[0].name;
	},

	doSomething: function(){
		return locations[1].name;
	},

	doSomethingElse: function(){
		return locations[0].address;
	}
}

TestView.init();	// locations[0].name;
*/



/*

function TestView(){

	function init(){
		return locations[0].name;
	},

	function doSomething(){
		return locations[1].name;
	},

	function doSomethingElse(){
		return locations[0].address;
	}
}
*/
