
// function cellme() {
//     var plan1 = {
//         name: "AHmed karim",
//         price: 3.99,
//         space: 100,
//         transfer: 1000,
//         pages: 10,
//         discountMonths: [6, 7]
//     };
//     console.log(plan1)
//     document.getElementById("see").innerText = plan1.name
// }
// cellme();

// var obj ={
//     name:"rehan",
//     email:"@gmail.com",
//     phone:"12345"
// }

// var mobile = {
//     infinix: {
//         hot8: {
//             color: "red",
//             pix: "33px"
//         },
//         hot10: {
//             color: "blue",
//             pix: "34"
//         }
//     },
//     iphone:{
//         iphoneX:{

//         },

//     }
// }
// console.log(mobile.infinix.hot10.pix)


// var arr = ["rehan", "pasha"]
// console.log(typeof (arr))
var mobile= {
    infinix :{
        hot8 : {
            color: "Blue  Black",
            pix : "35 pix"
        },
        hot9 :{
            color: "Red Blue",
            pix : "40 pix"
        },
        hot10 : {
            color : "Black Red",
            pix : "45 pix"
        }
    },
    iphon: {
        iphonX :{
            color : "Gold Silver",
            pix : "50 pix"
        }, 
        iphonXS:{
            color : "Gold Green",
            pix : "60 pix"
        },

    },
    Realme :{
        realmeC25:{
            color: " Gray Blue",
            pix : "50"
        },
        realme5 :{
            color: "Purple Blue ",
            pix : "70"
        }
    }
}
delete mobile.Realme.realme5.color
console.log(mobile.Realme. realme5.pix)