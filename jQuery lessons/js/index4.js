$(function(){
	$("#mybtn").on('click', ()=>{
		$("#top-header").toggleClass('pinkColor');
	});

	$("#mybtn").on('dblclick', ()=>{
		$("#top-header").toggleClass('redColor');
	});

	$(".hoverMe").on('mouseover', function(){ //es6-i function-ov chi ashxati
		$(this).toggleClass('brownColor');
	})

	$("div").on('mouseup', ()=>{
		$("#hoverMe").toggleClass('moveColor');
	})

	// $('#hoverMe').mousemove(function(){
 	// alert('Вы двинули мышью! С вас 3 доллара за оказанные услуги ясновидения.');
	// });

	$("#inputName").on('focus', function(){
		$(this).toggleClass('focus');
	})

	/* երբ կորում է focus-ը աշխատում է blur-ը */
	$("#inputName").on('blur', function(){
		$(this).toggleClass('focus');
	})

	$("#inputName").on('change', function(){
		alert("hello");
	})

	// $("#inputName").on('change', function(){
	// 	console.log("ll");
	// 	$(".forText").append( $(this).val() );
	// })

//	/*ashxatum e amen tary sexmeluc*/
	$("#inputName").on('keyup', function(){
		$(".forText").text( $(this).val() );
	})

//	/*konkret klavish sexmeluc orinak 27 = 'Esc'*/
	$("#inputName").on('keyup', function(event){
		if (event.which == 27) {
			alert($(this).val());
		}
	})
})



/*
.click() - Устанавливает обработчик "клика" мышью по элементу, либо, запускает это событие.
.dblclick() - Устанавливает обработчик двойного "клика" мышью по элементу, либо, запускает это событие.
.hover() - Устанавливает обработчик двух событий: появления/исчезновения курсора над элементом.
.mousedown() - Устанавливает обработчик нажатия кнопки мыши, либо, запускает это событие.
.mouseup() - Устанавливает обработчик поднятия кнопки мыши, либо, запускает это событие.
.mouseenter() - Устанавливает обработчик появления курсора в области элемента, либо, запускает это событие. Появление этого события, отработано лучше, чем стандартного mouseover.
.mouseleave() - Устанавливает обработчик выхода курсора из области элемента, либо, запускает это событие. Появление этого события, отработано лучше, чем стандартного mouseout.
.mousemove() - Устанавливает обработчик движения курсора в области элемента, либо, запускает это событие.
.mouseout() - Устанавливает обработчик выхода курсора из области элемента, либо, запускает это событие.
.mouseover() - Устанавливает обработчик появления курсора в области элемента, либо, запускает это событие.
.toggle() - Поочередно выполняет одну из двух или более заданных функций, в ответ на "клик" по элементу.*/