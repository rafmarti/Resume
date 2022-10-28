let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let AIscore = 0;

function generateAiChoice()
{
  let AIindex = Math.floor(Math.random() * 3);
  return AIindex;
}

function compare(choiceOne, choiceTwo)
{
  if (choiceOne == choiceTwo)
  {
    return 5;
  }
  else if (choiceOne == 0 && choiceTwo == 1)
  {
    return 6;
  }
  else if (choiceOne == 1 && choiceTwo == 2)
  {
    return 6;
  }
  else if (choiceOne == 2 && choiceTwo == 0)
  {
    return 6;
  }
  else
  {
    return 7;
  }
}

function play(playerIndex)
{
  let AIindex = generateAiChoice();
  let playerSrc = '../images/' + choices[playerIndex] + '.png';
  let AISrc = '../images/' + choices[AIindex] + '.png';
  
  document.getElementById('playerChoice').src = playerSrc;
  document.getElementById('AIChoice').src = AISrc;

  if (compare(playerIndex, AIindex) == 6)
  {
    AIscore++;
    document.getElementById("AIscore").textContent = 'AI : ' + AIscore;
  }
  else if (compare(playerIndex, AIindex) == 7)
  {
    playerScore++;
    document.getElementById("playerscore").textContent = 'YOU : ' + playerScore;
  }
}

document.getElementById("rock").onclick = function ()
{
  play(0);
}
document.getElementById("paper").onclick = function ()
{
  play(1);
}
document.getElementById("scissors").onclick = function ()
{
  play(2);
}
