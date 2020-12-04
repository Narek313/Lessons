$(function () {
	let $p = $('p');

	// Կլոնավորում նեք p-ն և ավելացնում ենք h2-ից հետո.
	let $clonedQuote = $p.clone();
	$p.remove();
	$clonedQuote.insertBefore('h2'); //insertAfter()-կլոնը տեղադրում է 'h2'-ից հետո*/

	// ջնջում ենք #one id-ով էլեմենտը և ավելացնում ենք ցուցակի վերջից.
	//detach() մեթոդը նույնպես ջնջում է էլեմենտը remove() մեթոդի նման, բայց պահում է այն հիշողության մեջ
	// դրա շնորհիվ ջնջված էլեմենտները կարող են կրկին հայտնվել էջի վրա
	 let $moveItem = $('#one').detach();
	 $moveItem.appendTo('ul'); //.appendTo() մեթոդը ՏԵՂԱՓՈԽՈՒՄ է բոլոր էլեմենտները իր մեջ նշված էլեմենտնի(երի) վերջը 

	//------------ unwrap() | empty() | filter() ----------------
	//unwrap() - ջնջում է Ընտրած էլ-ի ծնողնին 'ul'-ը կմնա առանց div
	//  $('ul').unwrap(); 
	// //Կմաքրի someBox կլասով Էլ-ը իրենց մեջի բաղադրությունից
	  // $("ul").empty();	
	// // filter()
	 $('.box').filter('   [title!="my Title"]  ');

	//----------------- width() | height() ----------------------------
	let $mydivHeight = $('#page').height();
	$('ul').append("<p>Height: " + $mydivHeight + "px</p>");
	let $myBodyWidth = $('body').width();
	$('ul').append("<p>body width: " + $myBodyWidth + "px</p>");
});




// {
// 	author: "sebastian",
// 		src: `https://images.unsplash.com/photo-1586591468541-f97cb6f9b973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80`
// },