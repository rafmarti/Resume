const coloredBar1 = document.querySelector('.color1');
const coloredBar2 = document.querySelector('.color2');
const coloredBar3 = document.querySelector('.color3');
const coloredBar4 = document.querySelector('.color4');
const limit = document.getElementById('Screen3')

window.addEventListener('scroll', () => {
    
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToTopViewport = limit.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50){
        coloredBar1.classList.add('active');
        coloredBar2.classList.add('active');
        coloredBar3.classList.add('active');
        coloredBar4.classList.add('active');
    }
})

document.getElementById('p1').onclick = function ()
{
    window.location.href = '../PalindromeChecker.html';
}
document.getElementById('p2').onclick = function ()
{
    window.location.href = '../CesarCipher.html';
}
document.getElementById('p3').onclick = function ()
{
    window.location.href = '../RockPaperScissors.html';
}
document.getElementById('p4').onclick = function ()
{
    window.location.href = '../RomanNumeral.html';
}

