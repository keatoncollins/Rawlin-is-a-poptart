var resetButton = document.querySelector(".resetBtn");
var generate = document.querySelector(".button1");
var div1 = document.querySelector("#slot1");
var div2 = document.querySelector("#slot2");
var div3 = document.querySelector("#slot3");
var slot1 = Math.floor(Math.random() *6);
var slot2 = Math.floor(Math.random() *6);
var slot3 = Math.floor(Math.random() *6);
var span = document.querySelector("#spanScore");
var payoutButton = document.querySelector(".payOut");
var highScore = prompt("What is your name?");
var score = parseInt(document.querySelector("#spanScore").innerHTML)/10;





generate.addEventListener("click" , function(){
	var score = document.querySelector("#spanScore").innerHTML;
	var slot1 = Math.floor(Math.random() *6);
	var slot2 = Math.floor(Math.random() *6);
	var slot3 = Math.floor(Math.random() *6);
	div1.innerHTML = convert(slot1);
	div2.innerHTML = convert(slot2);
	div3.innerHTML = convert(slot3);
	cherries(slot1, slot2, slot3);
	sevens(slot1, slot2, slot3);
	bar(slot1, slot2, slot3);
	barss(slot1, slot2, slot3);
	barsss(slot1, slot2, slot3);
	x(slot1, slot2, slot3);
});


resetButton.addEventListener("click" , function(){
	reset();
});

payoutButton.addEventListener("click" , function(){
	var score = parseInt(document.querySelector("#spanScore").innerHTML)/10;
	score = Math.round(score);
	alert("Congrats " + highScore + ", your pay out is " + score + ". Thank you for playing!");
		
reset();
});





function convert(num){
if(num === 0){
	return "<img src='cherry.jpeg' height='100' width='100'>";
}else if(num === 1 ){
	return "<img src='seven.jpeg' height='100' width='100'>"
}else if(num === 2){
	return "<img src='bar.jpg' height='100' width='100'>"

}else if(num === 3){
	return "<img src='2bars.jpg' height='100' width='100'>"
}
	else if(num === 4){
		return"<img src='2barss.png' height='100' width='100'>"
	}else if(num === 5){
		return"<img src='X.png' height='100' width='100'>"
	}else{
		return num;
	}
}

function reset() {
div1.innerHTML= "<img src='cherry.jpeg' height='100' width='100'>";
div2.innerHTML= "<img src='cherry.jpeg' height='100' width='100'>";
div3.innerHTML= "<img src='cherry.jpeg' height='100' width='100'>";
document.querySelector(".button1").disabled = false;
document.querySelector("#spanScore").innerHTML = 20;
};


function cherries(s1, s2, s3){
if(s1 == 0 && s2 != 0 && s3 != 0){

		changeScore(2);	
}

if(s2 == 0 && s1 != 0 && s3 != 0){
	
		changeScore(2);
	}

if(s3 ==0 && s1 != 0 && s2 != 0){
	
		changeScore(2);	
	}

	if(s1 == 0 && s2 == 0){
		
			changeScore(5);
		
	}
	 if(s2 == 0 && s3 == 0){
		
			changeScore(5);
		
	}
	 if(s1 == 0 && s3 == 0){
		
			changeScore(5);
		
	}
	if(s1 == 0 && s2 == 0 && s3 == 0){
			changeScore(10);
	}
}

function sevens(s1, s2, s3){
	if(s1 == 1 && s2 == 1 && s3 == 1){
		
			changeScore(80);
	}
}
function bar(s1, s2, s3){
	if(s1 == 2 && s2!=2 && s2 != 2){
		
			changeScore(2);	
	}
	 if(s2 ==2 && s3!=2 && s1 !=2){

			changeScore(2);
	}
	 if(s3==2 && s1 !=2 && s2 !=2){
		
			changeScore(2);
	}
	if(s1 == 2 && s2 == 2 && s3 == 2){
			changeScore(10);
	}
}

function barss(s1, s2, s3){
	if(s1 == 3 && s2 == 3 && s3 == 0){
		
			changeScore(25);
		
	}
}
function barsss(s1, s2, s3){
	if(s1 == 4 && s2 == 4 && s3 == 4){
		
			changeScore(40);
		
	
	}
}

function x(s1, s2, s3){
	if(s1 == 5){
	
			changeScore(-5);
	}
	 if(s2 == 5){
		
			changeScore(-5);
	}
	if(s3 ==5){
		
			changeScore(-5);
	}
	if(s1 ==5 && s2 ==5 && s3 ==5){
		document.querySelector(".button1").disabled = true;
		document.querySelector("#spanScore").innerHTML = 0;
		setTimeout(function( ){alert("You Lost, Try Again Next Time!"); }, 500);
	}
}




function changeScore(num){
var score = parseInt(document.querySelector("#spanScore").innerHTML);
score= score + num;
document.querySelector("#spanScore").innerHTML = score;
if(score <= 0 ){
	document.querySelector(".button1").disabled = true;
	setTimeout(function(){alert("You Lost, Try Again Next Time!"); }, 500);
	}
};

