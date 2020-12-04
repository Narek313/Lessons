$(function () {
	
	let position = 0; 		// Նախնական դիրք
 	let slidesToShow = 3;   // Քանի էլեմենտ ցույց տալ
	let slidesToScroll = 3 ;// քանի էլեմենտ Scroll անել
	const container = $(".slider-container ");
	const track = $(".slider-track");
	const item = $(".slider-item");
	const btnPrev = $(".btn-prev");
	const btnNext = $(".btn-next");
	const itemCount = item.length; 	//Էլեմենտնեռր նախնական քանակ
	// ստանում ենքամեն մի էլեմենտի երկարությունը 
	const itemWidth = container.width() / slidesToShow;

	const movePosition = slidesToScroll  * itemWidth;

let images = [
	{ src: "https://images.unsplash.com/photo-1595745688820-1a8bca9dd00f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80"},
	{ src: "https://images.unsplash.com/photo-1595737082656-5564fd832613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" },
	{ src: "https://images.unsplash.com/photo-1595726065171-b22284a62f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
	{ src: "https://images.unsplash.com/photo-1595732301236-42a26208b2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
	{ src: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
	{ src: "https://images.unsplash.com/photo-1595704277873-94de82f4645d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
	{ src: "https://images.unsplash.com/photo-1595511369680-d728dc7f0be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" },
	{ src: "https://images.unsplash.com/photo-1595719078351-7e40283d20aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" },
	{ src: "https://images.unsplash.com/photo-1595613126309-feb300454881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
	{ src: "https://images.unsplash.com/photo-1595753097862-364502922b16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },	
]

	item.each(function (index, item) {
		$(item).css({
			minWidth: itemWidth,
			backgroundImage: `url(${images[index].src})`
		})
	})

	btnNext.on("click", function () {
		// ընդհանուր Էլեմենտնեռրի քանակից հանում ենք Scroll արաց Էլեմենտնեռրի քանակը
		// Ստանում ենք մնացած սայդների քանակը
		const mnacord = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= mnacord >= slidesToScroll ? movePosition : mnacord * itemWidth;
		setPosition();
		checkButtons();
	})

	btnPrev.on("click", function () {
		const mnacord = Math.abs(position) / itemWidth;
		position += mnacord >= slidesToScroll ? movePosition : mnacord * itemWidth;
		setPosition();
		checkButtons();
	})

	const setPosition = () => {
		track.css({
			transform: `translateX(${position}px)`
		})
	}
	const checkButtons = () => {
		btnPrev.prop('disabled', position === 0);
		 btnNext.prop('disabled',
			position <= -(itemCount - slidesToShow) * itemWidth)
	}
	checkButtons();
})
// link => https://www.youtube.com/watch?v=2Bo619QsSE4&t=104s