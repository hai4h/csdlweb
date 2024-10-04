function openTab(evt, tabNo) {
    var i, example, tablinks;

    // Hiển thị tất cả các phần tử có class="example" nếu là tab Home
    example = document.getElementsByClassName("example");
    for (i = 0; i < example.length; i++) {
        example[i].style.display = tabNo === 'home' ? "flex" : "none";
    }

    // Loại bỏ class "active" khỏi tất cả các tab
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Thêm class "active" vào tab hiện tại
    evt.currentTarget.className += " active";

    // Hiển thị tab được chọn nếu không phải là Home
    if (tabNo !== 'home') {
        document.getElementById(tabNo).style.display = "flex";
    }

    // Reset trạng thái trang nếu là tab Home
    if (tabNo === 'home') {
        resetPageState();
    }
}

function resetPageState() {
    // Reset nội dung động hoặc trạng thái ở đây
    document.getElementById("demo").innerHTML = "Nhấn nút để thay đổi nội dung này.";
    document.getElementById("bulb").classList.remove("on");
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
    // Thêm các hành động reset khác nếu cần
}

// Đặt tab Home là active mặc định khi trang tải
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
});