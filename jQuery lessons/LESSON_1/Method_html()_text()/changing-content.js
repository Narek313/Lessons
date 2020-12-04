////////////////////////////////////////////////////////////////////////
//	այս օրինակում "кедровые" բառը պարունակող  <li> թեգի տեքստը փոխում ենք 'миндаль' բառով
//	html() մեթոդի միջոցով թարմացնում ենք բոլոր 'li.hot' էլեմենտները՝ բաղադրությունը դնելով <em> թեգի մեջ
//	ջնջում ենք նաև id="one" ունեցող <li> թեգը
// div-րին ավելացնում ենք նախորոք պատրաստաց կլասներ
////////////////////////////////////////////////////////////////////////
//ԱՌԱՋԱԴՐԱՆՔՆԵՐ
//  1.gtnel bolor datark divery ev meja avelacnel content ev class
//  2.h1 gtnel nranic araj avelacnel akcia bary
//  3. poxel li-i contenty /gtnel id-ov ev avelacnel atribut
//` 4. jnjel verji li-in
$(function() {
   $("li").html("Nor text bolor li-eri hamar");//jQuery object
   $('li:contains("кедровые")').text('миндаль');
   $('li.hot').html(function() {
  return '<em>' + $(this).text() + '</em>';
});
$('li#one').remove();

const arr = ['box', 'wrapper', 'main', 'box2', 'pool', 'footer' ];
    $('div:empty').addClass(function( i, old){
		return arr[i]
    })
})
