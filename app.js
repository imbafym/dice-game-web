/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gamePlaying,finalScore;


init();

function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
finalScore =20;	
document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'FYM';
document.getElementById('name-1').textContent = 'WLY';	
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//document.querySelector('.dice').style.display = 'none';

//
//function btn(){
//
//}






document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
	//1. random number
	var dice = Math.floor(Math.random() * 6) + 1;
	var dice2 =  Math.floor(Math.random() * 6) + 1;
	//2. display the result
	var diceDom,dice2Dom;
	diceDom =  document.querySelector('#dice-1');
	diceDom.style.display='block';
	dice2Dom =  document.querySelector('#dice-2');
	dice2Dom.style.display='block';
	diceDom.src = 'dice-' + dice + '.png';
	dice2Dom.src = 'dice-' + dice2 + '.png';
	console.log(dice);
	console.log(dice2);	

	//3. Update
	if(!(dice === 6 && dice2 === 6) ){
	   roundScore += dice + dice2;
		
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	   }else{
		   nextPlayer();
	   }
//	else if(dice !== 1){
//		roundScore += dice;
//		document.querySelector('#current-' + activePlayer).textContent = roundScore;
//	}else{
//		//next Player
//		nextPlayer();
//	}
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying){
		
		//add current score to global score
	scores[activePlayer] += roundScore;	
		
	//Update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	
	var input = document.querySelector('.final-score').value;
	var winningScore;	
		
	//anything else is true, except null undefined "" are false 	
	if(input){
		winningScore = input;
	}else{
		winningScore = 100;
	}
		
		//Check if player won the game
	if(scores[activePlayer] >= winningScore){
		document.querySelector('#name-' + activePlayer).textContent = 'winner!';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+activePlayer +'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer +'-panel').classList.remove('active');
		gamePlaying=false;
	}else{
		nextPlayer();
	}
	
	
	//NextPlaer
		
		
		
		
	}
		
	
});


document.querySelector('.btn-new').addEventListener('click',init);
	


function nextPlayer(){
	if(activePlayer === 0 ){
			activePlayer = 1;
		}else{
			activePlayer = 0;
		}
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('#dice-1').style.display='none';
		document.querySelector('#dice-2').style.display='none';
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/














