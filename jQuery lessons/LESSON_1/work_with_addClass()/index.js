// 1. attr()
// 2. removeClass()
// 3. toggleClass()
// 4. nextAll() 



$(function(){
//---------------------attr()-----------------------
//Կվերադարձնի առաջին  div-ի "class"-ը
// $("div").attr("class"); 
// //բոլոր div-ի "class"-ը կդառնան divEl
// $("div").attr("class", "divEl");
// //փոխում են "class"-ը և "title"-ը
// $("div").attr({ "class": "divEl", "title": "my Title name" });
// $(".rool").attr("title"); //Կվերադարձնի "title"-ը

// $("div").removeAttr("id"); // Ջնջում է բոլոր div-րի "id" ատրիբուտը

//---------------------removeClass()-----------------------
//  $("#content").removeClass()	// կջնջի content "id"-ով էլ-ի բոլոր կլասսները
//  $(".content").removeClass("clName1 clName2"); // կջնջի կոնկրետ կլասսները
// // //.removeClass(function(index, class))
// $("ul li").removeClass(function(index, c){
// 	if (index == 1) {
// 		return "stay"; //ջնջում ենք 2-րդ "li"-ի "stay"-ը կլասսը
// 	}else{
// 		return ""
// 	}
// })

// //-------------------- toggleClass() -----------------------
// // toggleClass(function (index, class), [switch] )
// // միայն ավելացնում կամ միայն ջնջում է կլասսները կախված [switch] արգումենտից (true/false)
// // content "id"-ով էլ-ի  oldName կլասից "switch" կեղնի newName-ի
// 	$("#btn").on("click",function() {
// 		console.log("ckick");
// 		$("#content").toggleClass("oldName newName"); 
// 		//false - մենակ կջնջի true - միայն կավելացնի
// 	})
	
// 	$("li.third-item").nextAll().addBack()
// 		.css("background-color", "red");
console.log($("p"));
$("p").addClass(function(i,old){ 
	$(this).removeClass(old); 
	i++; //1
	return 'class-' + i;// class-2
   });
});
