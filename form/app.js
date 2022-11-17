// var getdata = document.getElementById("getdata")
// var Name = document.getElementById("First-Name").value

// function cellme() {
//     var get = Name.innerHTML
//     get = "First Name"
//     console.log("First Name", value)
//     getdata.innerHTML = get 
// }

function cellme() {
    var firstname = document.getElementById("Firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var wibsite = document.getElementById("Website").value;
    var message = document.getElementById("messsage").value;

    var data = document.getElementById("data").innerHTML = firstname;
    var data1 = document.getElementById("data1").innerHTML = lastname;
    var data2 = document.getElementById("data2").innerHTML = email;
    var data3 = document.getElementById("data3").innerHTML = wibsite;
    var data4 = document.getElementById("data4").innerHTML = message

    if (firstname === "" || lastname === "" || email === "" || wibsite === "" || message === "") {
        swal("sorr full fill")
    }

    console.log("First Name " ,data);
    console.log("Last Name ", data1);
    console.log("Email ", data2);
    console.log("wibsite ", data3);
    console.log("Message ", data4);


}




