 $(document).ready(function(){
//  	$('h1').addClass('selected');   // ընտրում է դոկումենտում հանդիպած բոլոր էլեմենտները
//  	$('p:first').addClass('selected');   //  առաջին p-ն
// նոր $("p").last() || հնացած - $('p:last').addClass('selected');   //  վերջին p-ն
//  	$('p:odd').addClass('selected');   //  բոլոր կենտ p էլեմենտները
// նոր - $( "li" ).eq( 2 ) //|| հնացած - $('p:even').addClass('selected');//բոլոր զույգ p էլեմենտները
//  նոր վերջից - $( "li" ).eq( -2 )// || հնացած - $('p:eq(0)').addClass('selected');//առաջին p էլեմենտը
//  նոր - $( "li" ).eq( 3 ) || հնացած - $('p:eq(3)').addClass('selected');//4-րդ p էլեմենտը
//  	$('h3:has(span)').addClass('selected');//ընտրում է բոլոր այն հ3 էլեմենտները,որոնք պարունակում են span թեգ
//  	$('.block:parent').addClass('selected');
// 	 $('div:empty').addClass('selected');// ընտրում է բոլոր այն div-րը, որոնք դատարկ են
	 
 	$('a[href="https://google.com"]').addClass('selected');// ընտրում է բոլոր այն հղուները, որոնք ունեն նշված href-ը
	// $('a[href!="https://google.com"]').addClass('selected');   // ընտրում է բոլոր այն հղուները, որոնք չունեն նշված href-ը
	// $('a[href^="http"]').addClass('selected');   // ընտրում է բոլոր այն հղուները, որոնք սկսվում են նշված href-ով
	 $('a[href$=".ru"]').addClass('selected');   // ընտրում է բոլոր այն հղուները, որոնք վերջանում են նշված href-ով

	// $('h3.green').addClass('selected'); 
	 $('h3 ~ p').addClass('selected'); // ընտրում է բոլոր  այն p էլեմենտները, որոնք հանդիպում են հ3-ից հետո
	 $('h3 + p').addClass('selected'); // ընտրում է բոլոր  այն p էլեմենտները, որոնք ներդրված են  հ3-ից հետո
})
/*  id-ով սելեքտորնեերն ամենաարագն են */



