var finalScores,curScorePlayer1,curScorePlayer2,diceNumber,activePlayer,isPlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(isPlaying) {

        document.querySelector('.dice').style.display = 'block';
        diceNumber = Math.floor(Math.random()*6 + 1);


        if(diceNumber !== 1) {
            document.querySelector('.dice').src = 'dice-'+diceNumber+'.png';
            document.getElementById('current-'+ activePlayer).textContent = diceNumber;
            finalScores[activePlayer] += diceNumber;

        } else { // ===1
            finalScores[activePlayer] = 0;
            changePlayer();
        } 
    }
});

document.querySelector('.btn-hold').addEventListener('click',function() {

    if(isPlaying) {
        document.getElementById('score-'+ activePlayer).textContent = finalScores[activePlayer];

        if(finalScores[activePlayer] >= 20) {
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.getElementById('name-'+ activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
            isPlaying = false //stop playing
    
        } else {
            changePlayer();
        }
    } 
});

document.querySelector('.btn-new').addEventListener('click',init);

function changePlayer() {
    diceNumber = 0;
    document.getElementById('current-'+ activePlayer).textContent = '0';
    document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');


    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;

    document.querySelector('.player-'+ activePlayer+'-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

function init() {
    finalScores = [0,0];
    curScorePlayer1 = 0;
    curScorePlayer2 = 0;
    diceNumber = 0;
    activePlayer = 0; //palyer1 by default
    isPlaying = true;

    document.getElementById('score-0').textContent = finalScores[0];
    document.getElementById('score-1').textContent = finalScores[1];
    document.getElementById('current-0').textContent = curScorePlayer1;
    document.getElementById('current-1').textContent = curScorePlayer2;
    document.querySelector('.dice').style.display = 'none';

}