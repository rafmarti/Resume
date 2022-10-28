const romanNumbers = [["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",],
["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
["M","MM","MMM"]];
let regex = /^\d*$/;

function getMsg()
{
  var message = document.getElementById("inputBox").value;
  
  return message;
}

function convertToRoman(num) 
{
    let sNumber = num.toString();
    let aNumber = Array.from(sNumber, Number);
    let result = "";
    let g = 0
    for (let i = (aNumber.length - 1); i>=0; i--, g++)
    {
        if (aNumber[g] === 0)
        { 
        }
        else
        {
            result += (romanNumbers[i][aNumber[g]-1])
        }
    }
document.getElementById("result").textContent = result;
document.getElementById("result").style.color = "black";
return;
}



document.getElementById("convertButton").onclick = function()
{
    if(regex.test(getMsg()) == true)
    {
        convertToRoman(getMsg());
    }
    else
    {
        document.getElementById("result").textContent = "Invalid Number";
        document.getElementById("result").style.color = "red";
    }
};