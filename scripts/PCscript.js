function getMsg()
{
  var message = document.getElementById("inputBox").value;
  
  return message;
}
function palindrome(str) 
{
    let arrayStr = str.split("");
    let result = "";
    let reverseResult = "";

    result = result.toUpperCase();

    for (let i = 0; i < arrayStr.length; i++)
    {
      if ((/[A-Za-z0-9]/).test(arrayStr[i]))
      {
        result += arrayStr[i];
      }
    }

    for (let j = result.length-1; j >= 0; j--)
    {
        reverseResult += result.charAt(j);
    }
    
    if (result == reverseResult)
    {
      return true;
    }
    else
    {
      return false;
    }
}

let a = 'TRUE'
let b = 'FALSE'


document.getElementById("checkButton").onclick = function()
{
    if ((getMsg() != '') && palindrome(getMsg()) == true)
    {
        document.getElementById("result").textContent = "It's a palindrome!";
        document.getElementById("result").style.color = 'rgb(140, 179, 105)';
    }
    else
    {
        document.getElementById("result").textContent = "It's not a palindrome";
        document.getElementById("result").style.color = 'rgb(243, 66, 19)';
    }
};

