function goDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
} 
function changeText() {
    document.getElementById("demo").innerHTML = "Nội dung đã được thay đổi!";
}

function toggleLight() {
  const bulb = document.getElementById("bulb");
  bulb.classList.toggle("on");
}

function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "Kết quả: " + sum;
}

function updateClock() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(updateClock, 1000);
}

updateClock();