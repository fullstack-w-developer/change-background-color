const btn1 = document.getElementById("btn1")


btn1.onclick = ()=>{
    let color1 = "rgb("+ rand(0,255) + "," + rand(0,255) + "," + rand(0,255) + ")";
    document.body.style.background = color1
}

//create random number
function rand(start,end){
    return Math.floor(Math.random() * end,start)
}