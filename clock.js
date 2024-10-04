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

    // Cập nhật nội dung của đồng hồ
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    // Lấy các phần tử kim đồng hồ
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");

    // Tính toán góc quay của các kim đồng hồ
    const hourDeg = h * 30 + m * 0.5;
    const minuteDeg = m * 6;
    const secondDeg = s * 6;

    // Cập nhật vị trí của các kim đồng hồ
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    setTimeout(updateClock, 1000);
}

updateClock();