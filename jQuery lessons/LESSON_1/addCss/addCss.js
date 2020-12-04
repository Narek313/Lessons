// $(function(){
//ինչպես ստանալ css հատկության արժեք 
// let hatkutyun = $("li").css("background-color");
// console.log(hatkutyun);
// ինչպես տալ css հատկությանը արժեք 
// $("li").css('color','#dedede');
//px-ով տրվող արժեքները կարելի է փոխել +=/-= ձևով,օրինակ՝
// $("li").css('padding-left','+= 20');
// ինչպես տալ միքանի css հատկություն միանգամից
// հատկություն և արժեք պետք է գրել չակերտների մեջ,բաժանելով իրարից ։ -ով
//  $("li").css({
//  	'background-color':'red',
//  	'font-size': '24px'
//  });
// });

//19-rd toxum one  on-i poxaren, vor menak arajin angam ashxati!!!
$(function(){
	$("#btn").one("click", function(){
	let hatkutyun = $("li").css("background-color");
	console.log(hatkutyun);//rgb(255, 99, 71)-tomato
	let text = "add font-size and border:1px solid #fff";
		$('p').addClass("info").append('Color was: ' + hatkutyun + '<br />' +  text)
	$("li").css({
 	'font-size': '24px',
 	'border':'1px solid #fff'
 	});
})
 let d = $('#box');
 d.addClass('xxx')
	d.css('padding','+=20')
})