document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum1 = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum1;
    alert(sum1)
})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum2 = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum2;
    alert(sum2)
})
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum3 = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum3;
    alert(sum3)
})
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum4 = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum4;
    alert(sum4)
})

function myalert(){
    alert("Hello Fang")
}

const img = document.createElement("img")

img.src = "img/me.jpg";
img.style.width = "200px";

document.getElementById("mydiv").appendChild(img);

function calculateBMI(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height / 100 * height / 100);
    document.getElementById("result").innerHTML = "แสดงผล BMI : " + bmi.toFixed(2);
}