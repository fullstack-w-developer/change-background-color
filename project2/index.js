const color = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const btn1 = document.getElementById("btn1");
const result = document.getElementById("result");

btn1.addEventListener("click", function(){
    let sharp = "#";
    let i = 0;
    while (i < 6) {
        sharp += color[rand()]
        i++
    }
    document.body.style.background = sharp;
    result.innerText = sharp
})

function rand(){
    return Math.floor(Math.random() * color.length)
}