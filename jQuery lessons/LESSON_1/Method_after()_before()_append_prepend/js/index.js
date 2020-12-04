// 1. after()
// 2. before()
// 3. prepend()
// 4. append()
// 5. prependTo()
// 6. appendTo()


$(document).ready(function(){
// տեղափոխել  <h1>-ը, id='general' էլեմենտից հետո.
// $('#general').after('<li>dsdas</li>');
// հակառակը ստանալու համար, այսինքն էլեմենտից առաջ
// բան գրելու համար օգտագործվում է before() մեթոդը

//ամեմ մի p-ից հետո ստեղծել '<div>' և նրա մեջ գրել p-ի կլասի անունը 
	// $('p').append(function() {
	// return '<div>' + this.className + '</div>';
	// });


//ամեն մի p-ից մեջ գրել p-ի կլասի անունը 
	// $('p').prepend(function () {
	// 	return this.className + " ";
	// });
	let newElem = document.createElement('div')
	newElem.textContent = "new text content"
	console.log('newElem', newElem)
	$(".dsa").prependTo($("#general")); // ".dsa" => "#general"
	$('.wrapper').after(newElem)        // Տեղադրել HTML-ում նոր տեղափոխել
	$(".wrapper").appendTo(newElem);   // ".wrapper" => newElem
})


