function solveQuadraticEquation() {
    const a = parseFloat(document.getElementById("coef-a").value);
    const b = parseFloat(document.getElementById("coef-b").value);
    const c = parseFloat(document.getElementById("coef-c").value);
    const resultElement = document.getElementById("equation-result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.innerHTML = "Vui lòng nhập đầy đủ các hệ số a, b, c.";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                resultElement.innerHTML = "Phương trình vô số nghiệm.";
            } else {
                resultElement.innerHTML = "Phương trình vô nghiệm.";
            }
        } else {
            // Giải phương trình bậc 1: bx + c = 0
            const x = -c / b;
            resultElement.innerHTML = `Đây là phương trình bậc nhất. Nghiệm là: x = ${x.toFixed(2)}`;
        }
        return;
    }

    const discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
        resultElement.innerHTML = `Phương trình có hai nghiệm phân biệt:x₁ = ${x1.toFixed(2)}x₂ = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const x = -b / (2*a);
        resultElement.innerHTML = `Phương trình có nghiệm kép:x = ${x.toFixed(2)}`;
    } else {
        const realPart = -b / (2*a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2*a);
        resultElement.innerHTML = `Phương trình có hai nghiệm phức:
            x₁ = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i
            x₂ = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    }
}