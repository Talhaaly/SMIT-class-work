



// let now = new Date

// console.log(now.getTime())


// now.setDate ('10')
// console.log(now.getTime)

// var myName = "Talha";
// console.log(myName);
// console.log(typeof(myName));

// var myPhoneName = 123456789;
// var myName = "Talha Ali";

// console.log(isNaN(myPhoneName));
// console.log(isNaN(myName));

// if(isNaN(myPhoneName)){
//     alert("this is yes");
// }else{
//     alert("this is not");
// }

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));


// console.log(20 != 4);


// if(3 === "3"){
//     alert("This is Right");

// }else{
//     alert("This is Not Right");
// }







const cursor = document.querySelector(".cursor")
var timeout;

document.addEventListener("mousemove", (e) =>{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display =  'block';


    function mouseStopped () {
        cursor.style.display ="none";

    }

clearTimeout(timeout);
timeout = setTimeout(mouseStopped, 1000);

});

document.addEventListener("mouseout", () => {
    cursor.style.display ="none";  
});

























