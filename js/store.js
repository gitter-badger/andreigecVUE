/*jshint unused:false */

(function (exports) {

	'use strict';

	var baseURL = 'https://intense-inferno-4020.firebaseio.com/Backgrounder/Website/';
// 	var refAuth={};
// ref.authWithCustomToken("3ntueFfhOYlbibLUAYtygmbBIFu4ROP7dLZnHHFI", function(error, authData) {
//   if (error) {
//     console.log("Authentication Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//     refAuth=authData;
//   }
// });

	//var TitlesListFB = new Firebase(baseURL + 'Titles/List');
	//var TitlesListData=[];

	var TitlesPopularFB = new Firebase(baseURL + 'Titles/Popular');
	
// 	TitlesListFB.on('value', function (snapshot) {
// TitlesListData=snapshot;
// });

	TitlesPopularFB.on('value', function (snapshot) {
		var item = snapshot.val()
		console.log('1');
		console.log(item);
		item.forEach(function(s){
app.PopularTitles.push(s);			
console.log('.');
		});
});


	

})(window);
