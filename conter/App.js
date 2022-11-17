
var conter = 0
function plus() {
    var plus = document.getElementById("plus")
    plus = conter++

    var data = document.getElementById("data").innerHTML = conter
    // data.innerHTML = value
    console.log(data);

}

function cellme(){
    var mainas = document.getElementById("mainais")
    mainas = conter--
    var data1 =document.getElementById("data").innerHTML = conter
    console.log(data1)
   
}

function Ahmed(){
    var clear = document.getElementById("clear")
    clear = conter = 0
    var data2 = document.getElementById("data").innerHTML = conter
    console.log(data2)
    // console.log("Ahmed")

}