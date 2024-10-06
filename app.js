function goDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
} 

let originalText = "";
let isChanged = false;

function changeText() {
    const demoElement = document.getElementById("demo");
    
    if (!demoElement) {
        console.error("Không tìm thấy phần tử có id 'demo'");
        return;
    }
    
    if (!isChanged) {
        originalText = demoElement.innerHTML;
        demoElement.innerHTML = "Nội dung đã được thay đổi!";
        isChanged = true;
    } else {
        demoElement.innerHTML = originalText;
        isChanged = false;
    }
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

