let alphabet = ["A", "B", "C" , "D" , "E", "F", "G", "H", "I", "J", "K",
 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function getMsg()
{
  var message = document.getElementById("inputBox").value;
  
  return message;
}

function rot13(str) 
{
  var Capitalize = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
  var aStr = Capitalize.split("");
  let result  = [];

  for (let i = 0; i < aStr.length; i++ )
  {
    let code = alphabet.indexOf(aStr[i]);
    if (code == -1)
    {
      result += aStr[i];
    }
    else
    {
    result += alphabet[(code + 13) % 26]; 
    }
  }

  document.getElementById("result").textContent = result;
}

  document.getElementById("convertButton").onclick = function(){rot13(getMsg())};


