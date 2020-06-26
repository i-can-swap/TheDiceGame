
var r1,r2;
var die = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
window.onload= function randomizer(){
	r1 = Math.floor(Math.random()*6)+1;
	 r2 = Math.floor(Math.random()*6)+1;
	
	 		document.querySelector(".img1").setAttribute("src",die[r1-1]);
	 
	 	

	 		document.querySelector(".img2").setAttribute("src",die[r2-1]);
	 
	 if(r1>r2){
	 	document.querySelector("h1").textContent="🚩 Player 1 Wins!";
	 }
	 else  if(r1<r2){
	 	document.querySelector("h1").textContent="Player 2 Wins! 🚩";
	 }
	 else{
	 	document.querySelector("h1").textContent="Draw!";
	 }
}

