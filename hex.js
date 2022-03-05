const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  var i=0;
  var colorCode = "#";
    while( i !=6){
    var randomElement =hex[getRandomNumber()];
    
    colorCode+=randomElement;
i++;
   }
    console.log(colorCode);
    document.body.style.backgroundColor = colorCode;
    color.textContent =colorCode;
});

function getRandomNumber() {
    return(  Math.floor(Math.random()*hex.length));
}