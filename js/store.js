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

function SetData(item)
{
item.HeadImage=item.Images!=null?item.Images[0]:'500x200.png';
var td=_.truncate(item.Description,100,'...');
item.HeadDescription=item.Description!=null?td:'';
}

function setPopularAppData(data)
{
	//http://placepu.gs/500/200

	data.forEach(function(s){
		SetData(s);
		
app.PopularTitles.push(s);			
		});
}
	

	if (localStorage.getItem("items"))
	{
		var items=JSON.parse(localStorage.getItem("items"));
		setPopularAppData(items);
	}
	else{
		var TitlesListFB = new Firebase(baseURL + 'Titles/List');
	var TitlesListData=[];

	var TitlesPopularFB = new Firebase(baseURL + 'Titles/Popular');
	
	TitlesListFB.on('value', function (snapshot) {
	TitlesListData=snapshot;
	});

	TitlesPopularFB.on('value', function (snapshot) {
		var items = snapshot.val()
		setPopularAppData(items);

		localStorage.setItem("items", JSON.stringify(app.PopularTitles));
		});

	}


	

})(window);
