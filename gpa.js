async function fetchGPA() {
    const studentId = document.getElementById("studentId").value;
    const gpaResultElement = document.getElementById("gpaResult");
    const evalElement = document.getElementById("eval");

    if (!studentId) {
        gpaResultElement.innerHTML = "Vui lòng nhập mã sinh viên.";
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/getGPA?studentId=${studentId}`);
        if (!response.ok) {
            throw new Error("Không thể lấy dữ liệu GPA.");
        }

        const data = await response.json();
        const gpa = data.gpa;
        let academicPerformance;
        let academicEvaluation;

        if (gpa >= 3.5) {
            academicPerformance = "Xuất sắc";
            academicEvaluation = "Tốt nghiệp sớm đi em";
        } else if (gpa >= 3.0) {
            academicPerformance = "Giỏi";
            academicEvaluation = "Ok đấy";
        } else if (gpa >= 2.5) {
            academicPerformance = "Khá";
            academicEvaluation = "Tạm được";
        } else if (gpa >= 2.0) {
            academicPerformance = "Trung bình";
            academicEvaluation = "Cần cố gắng hơn nữa";
        } else {
            academicPerformance = "Yếu";
            academicEvaluation = "Học hành làm gì nữa";
        }

        gpaResultElement.innerHTML = `GPA: ${gpa} - Xếp loại: ${academicPerformance}`;

        if (evalElement) {
            evalElement.innerHTML = academicEvaluation;
        } else {
            console.error("Không tìm thấy phần tử có id 'eval'");
        }
    } catch (error) {
        gpaResultElement.innerHTML = error.message;
    }
}