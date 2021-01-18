// class  Person {
//     constructor(name){
//         this.name = name
//     }
//     printNameArrow(){
//         setTimeout( () => {
//             console.log("arrow",this)
//         },1000)
//     }
//         printNameFunction(){
//             setTimeout( function() {
//                 console.log("function",this)
//             },2000)        
//     }
// }
// let person = new Person("Narek")
// person.printNameArrow()
// person.printNameFunction()

//____________________________________________________



// _______________________1___________________________________

// const video = {
//     title: "a",
//     play(){
//         console.log(this);
//     }
// };
// video.play();

//_______________________2____________________________________

// function playVideo(){
    //     console.log(this)
// }
// playVideo();

//_______________________3____________________________________

// contructor function

// function Video(title){
//     this.title = title;
//     console.log(this);
// }
// const video = new Video("a")

//_______________________4____________________________________

// const video = {
//     title: "heading",
//     tags: ["a","b","c"],
//     showTags() {
//         this.tags.forEach(function(tag){
//             console.log(this,tag)
//         },
//         // 2rd argumenty this-i jamanak kta video object-y ||||||||||| aranc dra kta window
//         )
//     }
// };
// video.showTags();

// const video = {
//     title: "heading",
//     tags: ["a","b","c"],
//     showTags() {
//         this.tags.forEach((tag) => {
//             console.log(this,tag)
//         })
//     }
// };
// video.showTags()

//_______________________5____________________________________

// const person = {
//     name: "Narek",
//     walk(){
//         console.log(this);
//     }
// }
// const walk = person.walk.bind(person)
// walk()