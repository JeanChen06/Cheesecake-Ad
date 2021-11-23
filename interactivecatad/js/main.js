/*
DM5212 Scripting 1 Assignment 1
Name:           Admin No:           Date: 
*/
var catup={
    y:200,
    duration:1
}

var catupdelay={
    y:200,
    delay: 2,
    duration:1
}

var rightfly={
    duration:1,
    delay:1.5,
    x:400
}

var yess1={
   duration:.5,
   x:80,
   delay:2
}
var noo1={
    duration:.5,
    x:-100,
    delay:2
}
var godown={
    y:200,
    duration: 1, 
    delay:1
}


var leftfly={
    duration:1,
    delay:2,
    x:-300
}
var snapy={
    duration:1,
    delay:2,
    y:-300,
    ease: "bounce.out"
}
var comeback={
    duration:.8,
    delay:1,
    x:-300
}

var catup1={
    y:200,
    duration:1,
    delay:2
}
var jumpdown={
    y:-500,
    duration:.5,
    delay:2,
    
}
var excited = {
    duration: 0.1,
    delay: 5.5,
    x: -20,
    y: -20, 
    yoyo:"true",
    repeat:-1
  };

  var noexcite={
        duration: 0.1,
        delay: 5.5,
        x: -20,
        y: -20, 
        yoyo:"false",
        repeat:-1
  }
  var linee3={
        opacity:0, 
        duration :1
}


var light={
    opacity:0,
    duration:0.5,
    yoyo:"true",
    repeat:-1
}

var light2={
    opacity:0,
    duration:0.7,
    yoyo:"true",
    repeat:-1,
}
//SCENE 1
$(function(){
    console.log("it works!");
    gsap.to(".sc",{opacity:"1"});
    gsap.to(".scene1", {display:"block"});
    gsap.from(".cat1", catup);
    gsap.from(".qn1", rightfly);
    gsap.to(".yes1", yess1);
    gsap.to(".no1", noo1);


//scene 3b
    $(".no3").click(function(){
        gsap.to(".scene3b",{display:"block", duration:3, delay:1});
        gsap.to(".cat3", godown);
        gsap.to(".yes3", {y:600, duration:1, delay:1});
        gsap.to(".no3", {y:600, duration:1, delay:1});
        gsap.to(".line3",{y:600, duration:1, delay:1});
        gsap.to(".lightning",  light);
        gsap.to(".lightning2", light2);
        gsap.from(".sadtalk", {opacity:0, duration:1, delay:1});
        gsap.from(".replay", {opacity:0, duration:1, delay:1});
        
        for (var i = 0; i < 300; i++)
        { // as long as i is below 22, it is true
            //( i ++ is the same as i= i+1 ) until it is over 22, it will stop
        
            var newEle = document.createElement('div'); // creates element div
            newEle.classList.add('bubbles'); // add class to previously added element (div)
        
            var bubbleNum =
                gsap.utils.random(["b1", "b2", "b3", "b4"]); //random
        
        
            newEle.classList.add(bubbleNum); // add into div (line 400)
        
        
            // start rising....
            falling(newEle);
        
            $('#bubbleX').append(newEle);
        }
        });

//WHEN PRESSED NO
//scene 1B 
$(".no1").click(function(){
    console.log("NO works");
    gsap.to(".cat1", {duration:".5", opacity:"0"});
    gsap.to(".scene1b", {display:"block"});
    // gsap.to(".cat1b", {duration:"1", delay:"1"});
    gsap.to(".qn1", {opacity:"0", duration:".5"});
    gsap.from(".cat1b",{opacity:"0", duration:"1.3", delay:"1"});
    gsap.to(".yes1, .no1",{ opacity:"0", duration:"0.1"} );
    gsap.from(".scold", snapy);
    gsap.from(".fine",{duration:"1", opacity:"0", delay:"1"} );
    //fine goes to scene 3

    //AKA scene 3
});
$(".fine").click(function(){
    console.log("fine is workin");
    gsap.to(".cat1b",godown);
    gsap.to(".fine", {opacity:"0", duration:".5"});
    gsap.to(".scold",{opacity:"0", duration:".5"});
    gsap.to(".scene3",{display:"block"});
    gsap.from(".cat3", catup1);
    gsap.from(".line3",{duration:"2", opacity:"0", delay:"3"});
    gsap.to(".yes3", yess1);
    gsap.to(".no3",noo1);
 
 });
//WHEN PRESSED YES
//SCENE 2
$(".yes1").click(function(){
    console.log("it works!");
    gsap.to(".cat1", godown );
    gsap.to(".yes1", {opacity:"0", duration:".5"});
    gsap.to(".no1", {opacity:"0", duration:".5"});
    gsap.to(".qn1", {opacity:"0", duration:"1", delay:"1"});
    
    gsap.to(".scene2", {display:"block"});
    gsap.from(".cat2",leftfly);
    gsap.from(".qn2",{duration:"1", opacity:"0", delay:"2"});
    gsap.from(".yes2, .no2",{duration:".5", opacity:"0", delay:"2"} );

});
//WHEN PRESSED NO
//SCENE 2B
$(".no2").click(function(){
    console.log("no2 works");
    gsap.to(".scene2b", {display:"block"});
    gsap.to(".cat2",comeback);
   gsap.to(".yes2, .no2", {opacity:"0", duration:".5"});
   gsap.to(".qn2",comeback);
   gsap.from(".cat2b", jumpdown);
   gsap.from(".scold2",{opacity:"0", delay:"1.7"});
   gsap.from(".finee",{opacity:"0", delay:"2"});
   //fine goes to scene3
})
//scene 3 from 2b
$(".finee").click(function(){
    console.log("fine is workin");
    gsap.to(".cat2b",{x:"300", duration:"1", delay:"1"});
    gsap.to(".finee", {opacity:"0", duration:".5"});
    gsap.to(".scold2",{opacity:"0", duration:".5"});
    gsap.to(".scene3",{display:"block"});
    gsap.from(".cat3", catup1);
    gsap.from(".line3",{duration:"2", opacity:"0", delay:"3"});
    gsap.to(".yes3", yess1);
    gsap.to(".no3",noo1);
 
 });
//Scene 3
$(".yes2").click(function(){
   console.log("yes2 is workin");
   gsap.to(".cat2",comeback);
   gsap.to(".yes2, .no2", {opacity:"0", duration:".5"});
   gsap.to(".qn2",comeback);

   gsap.to(".scene3",{display:"block"});
   gsap.from(".cat3", catup1);
   gsap.from(".line3",{duration:"1", opacity:"0", delay:"3"});
   gsap.to(".yes3", yess1);
   gsap.to(".no3",noo1);

});

//Scene 4
$(".yes3").click(function(){
    console.log("yes3 works too");
    gsap.to(".line3", linee3);
    gsap.to(".scene4",{display:"block"});
    gsap.to(".cat3", godown);
    


    gsap.to(".yes3", {opacity:0});
    gsap.to(".no3", {opacity:0});
    gsap.timeline()
    .from(".cake1", {xPercent:100, duration:.5, delay:1.5})
    .from(".cake2", {xPercent:100, duration:.5, delay:2})
    .from(".cake3", {xPercent:100, duration:.5, delay:3})
    .from(".cake4", {xPercent:100, duration:.5, delay:3.5})
    .from(".cake5", {xPercent:100, duration:.5, delay:4});
    gsap.from(".cat4",catupdelay);
    gsap.to(".cat4", excited);
    gsap.from(".brag", {opacity: 0, duration: 1,delay:3});
    gsap.from(".wow",{opacity:0, duration:1, delay:3});
});
//scene 5
$(".wow").click(function(){

    // gsap.timeline()
    // .from(".cat4", noexcite)
    gsap.to(".cat4",{duration:1, x:2000 });
    gsap.set(".cat4", {display:"none", delay:0.6});
    gsap.set(".brag", {display:"none", delay:0.6});
    gsap.set(".wow", {display:"none", delay:0.6});
     gsap.to(".ending1", {duration:1});
    gsap.to(".scene5", {display:"block"});
    gsap.to(".endpic", {opacity:1, duration:1 });
    gsap.from(".ending1",{opacity:0, duration:1, delay:1});
    gsap.from(".ending2",{opacity:0, duration:1, delay:1.5});
    gsap.from(".ending3",{opacity:0, duration:1, delay:2});
    gsap.from(".visit",{opacity:0, duration:1, delay:3});
    gsap.from(".replay2",{opacity:0, duration:1, delay:4});
    gsap.from(".cat5",{duration:1, x:-100, delay:1});
});



});

//when clicked no in scene3

// $(".replay2").click(function(){
//     console.log("replay2 works!");
//     gsap.to(".sc",{display:"block"});
//     gsap.to(".scene1", {display:"block"});
//     gsap.from(".cat1", catup);
//     gsap.from(".qn1", rightfly);
//     gsap.to(".yes1", yess1);
//     gsap.to(".no1", noo1);
// });
//function falling(element) {
//	var initProp = {
//		x: gsap.utils.random(-15, 310),
//		y: gsap.utils.random(560, -20), // init below
//		scale: gsap.utils.random(.5, 2),
//		opacity: gsap.utils.random(.5, 1)
//	};
//
//	gsap.set(element, initProp);
//
//	/* from exercise 1 */
//	var dropProp = {
//		duration: gsap.utils.random(4, 8), //2,
//		repeat: -1,
//		marginTop: "500px" // on top
//	}
//
//	var dropFloat = {
//		duration: gsap.utils.random(2, 4), // 2,
//		repeat: -1,
//		x: "+=800",
//		ease: "power2.inOut",
//		yoyo: true
//	}
//
//	var rotatePropX = {
//		duration: 1,
//		rotateX: gsap.utils.random(0, 180),
//		yoyo: true,
//		repeat: -1
//	}
//
//	var rotatePropY = {
//		duration: 2,
//		rotateY: gsap.utils.random(0, 180),
//		yoyo: true,
//		ease: Sine.easeInOut,
//		repeat: -1
//	}
//
//	var rotatePropZ = {
//		duration: 3,
//		rotateZ: gsap.utils.random(0, 180),
//		ease: Sine.easeInOut,
//		yoyo: true,
//		repeat: -1
//	}
//	gsap.to(element, dropProp).progress(
//		gsap.utils.random(0, 1.0)
//	);
//}





/* created by mr quah....*/
/* we create a tween for element */
function falling(element) {
	var initProp = {
		x: gsap.utils.random(-15, 310),
		marginTop: gsap.utils.random(560, -20), 
		scale: gsap.utils.random(.2, .4), // CHANGE SIZE FROM SMALLETS TO BIGGEST
		opacity: gsap.utils.random(.5, 1) //CHANGE OPACITY FROM LOWER TO HIGHEST
	};

	gsap.set(element, initProp);

	/* from exercise 1 */
	var dropProp = {
		duration: gsap.utils.random(1, 2), //CHANGE SPEED FROM HIGHEST SPEED TO LOWEST SPEED
		repeat: -1,
		marginTop: "500px" // on top
	}

	var dropFloat = {
		duration: gsap.utils.random(2, 4), // 2,
		repeat: -1,
		x: "+=800",
		ease: "power2.inOut",
		yoyo: true
	}

	var rotatePropX = {
		duration: 1,
		rotateX: gsap.utils.random(0, 180),
		yoyo: true,
		repeat: -1
	}

	var rotatePropY = {
		duration: 2,
		rotateY: gsap.utils.random(0, 180),
		yoyo: true,
		ease: Sine.easeInOut,
		repeat: -1
	}

	var rotatePropZ = {
		duration: 3,
		rotateZ: gsap.utils.random(0, 180),
		ease: Sine.easeInOut,
		yoyo: true,
		repeat: -1
	}
	gsap.to(element, dropProp).progress(
		gsap.utils.random(0, 1.0)
	);
//	gsap.to(element, dropFloat);
//	gsap.to(element, rotatePropX);
//	gsap.to(element, rotatePropY);
//	gsap.to(element, rotatePropZ);
}