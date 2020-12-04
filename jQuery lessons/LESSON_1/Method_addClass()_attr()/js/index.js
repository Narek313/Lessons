// 1. addClass()
// 2. removeClass()
// 3. attr()

//առանց jQuery    նաև https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class
// let elem = document.querySelector(".msg")
// elem.className = "cool"
// elem.classList.remove("mystyle");



$(function(){
// Ավելացնենք <p>-ին 2 կլասս 'ferstClass' և 'secondClass'
	// console.log($('p').attr({class:"box", id:"j"}));

/*Ջնջել  բոլոր <p>-րի կլասսները, հետո ավելացնել
առաջինի համար- 'class-1',երկրորդի համար - 'class-2' և այլն  */
// function change(){
// $("p").addClass(function(i, old){
// 	if(i===4){
// 		$(this).removeClass(old);
// 		i++;
// 		return 'class-' + i;
// 	} else{
// 		return old
// 	}
//  });
// }
// $("#changeBtn").on('click', change);

/*---------------attr() methods-------------------*/
/*

attr ( name ) - Ստանում է ատրիբուտի արժեքը...
attr ( name, value ) - նշանակում է ատրիբուտի արժեք....
attr ( object ) - նշանակում է ատրիբուտի արժեք...
attr ( name, function() ) - նշանակում է ատրիբուտի արժեք...*/
//ստանում ենք attr ատրիբուտները և փոխում ենք այն
//  $("img").each(function(i,elem) {
// 	$(elem).attr({title:"Jquery Title for image",alt:"norAlt"});
// })
// });

// //jQuery removeClass() Method
// $("button").click(function(){
// $("p").removeClass("intro");
// });