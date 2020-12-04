$(document).ready(function(){
	// $('.block').children().addClass('selected'); // ընտրում է '.block' կլասով էլեմենտի բոլոր ժառանգնեռին
	// $('.green').closest('ul').addClass('selected'); // ընտրում է '.green' կլասով էլեմենտին ամենամոտիկ ul թեգը

	// // //methods parent-parents
	// $('.green').parent().addClass('selected'); // ընտրում է '.green' կլասով էլեմենտին առաջին ծնողներին
	// $('.green').parents().addClass('selected'); // ընտրում է '.green' կլասով էլեմենտին բոլոր ծնողներին

	// // //method find
	// $('.block').find('h4').addClass('selected'); //  ընտրում է  '.block' կլասով էլեմենտում առկա հ4 թեգերը
	// $('.block').find('p.inner').addClass('selected'); // ընտրում է '.block' կլասով էլեմենտում առկա '.inner' կլասով p թեգերը

	// // //method prev/next
	// $('h1').prev().addClass('selected'); // ընտրում է 'h1'ից  առաջ(previus) գտնվող էլեմենտները!
	// $('p').prev("h3").addClass('selected'); // ընտրում է միայն այն 'h3'-ը  որոնք գրված են p-ից առաջ!
	// $('h1').next().addClass('selected'); // ընտրում է 'h1'ից  հետո գտնվող էլեմենտը

	// //method siblings
	// $('#p1').siblings().addClass('selected'); // ընտրում է '#myid'-ի բոլոր հարեվաններին(գտնվում են նույն մակարդակի վրա)
	// $('#myid').siblings('.green').addClass('selected'); // ընտրում է '#myid'-ի բոլոր հարեվաններին, որոնք ունեն '.green' կլասը('.green'= filter)
	console.log($('.green').parent().addClass("skahjghg"));
})

