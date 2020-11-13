//1
function generatorRandom(){
  return Math.floor(Math.random() * 6 + 1);
}

//2
 let startButton = document.getElementById("start");
 let dice1 = document.getElementById("dice_A");
 let dice2 = document.getElementById("dice_B");
 
 //3
 startButton.onclick = () =>{
   //4 Call Random Function
   let randomNum1 = generatorRandom();
   let randomNum2 = generatorRandom();
    //5
    dice1.src = "images/dice"+ randomNum1 + ".png"
    dice2.src = "images/dice"+ randomNum2 + ".png"

    //6 TEST PASSED

    //7
     if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="Play 1 Wins"
    document.getElementById("player_1").style.color="red"
    document.getElementById("player_2").style.color=""

  }
  //8
  else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML="Play 2 Wins"    // //10 TEST PASSED
    document.getElementById("player_2").style.color="red"    //11 CHALLENGE
    document.getElementById("player_1").style.color=""
  }
  //9
  else{
    document.querySelector("h1").innerHTML="DRAW"             //10 TEST PASSED
    document.getElementById("player_1").style.color="red"   //11 CHALLENGE
    document.getElementById("player_2").style.color="red"
  }


 }
 
 
  