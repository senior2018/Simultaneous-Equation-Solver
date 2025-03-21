// Toggle between 2x2 and 3x3 equation input fields
function toggleEquationType() {
    let equationType = document.getElementById("equationType").value;
    document.getElementById("equation2x2").style.display = equationType === "2x2" ? "block" : "none";
    document.getElementById("equation3x3").style.display = equationType === "3x3" ? "block" : "none";
}

// Determinant function for 3x3 matrix
function determinant3x3(a, b, c, d, e, f, g, h, i) {
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

// Main function to solve the equations
function solveEquations() {
    let equationType = document.getElementById("equationType").value;
    
    if (equationType === "2x2") {
        let a = parseFloat(document.getElementById('a').value);
        let b = parseFloat(document.getElementById('b').value);
        let c = parseFloat(document.getElementById('c').value);
        let d = parseFloat(document.getElementById('d').value);
        let e = parseFloat(document.getElementById('e').value);
        let f = parseFloat(document.getElementById('f').value);

        let determinant = a * e - b * d;

        if (determinant === 0) {
            document.getElementById('result').innerHTML = "No unique solution";
        } else {
            let x = (c * e - b * f) / determinant;
            let y = (a * f - c * d) / determinant;
            document.getElementById('result').innerHTML = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
        }

    } else if (equationType === "3x3") {
        let a1 = parseFloat(document.getElementById('a1').value);
        let b1 = parseFloat(document.getElementById('b1').value);
        let c1 = parseFloat(document.getElementById('c1').value);
        let d1 = parseFloat(document.getElementById('d1').value);

        let a2 = parseFloat(document.getElementById('a2').value);
        let b2 = parseFloat(document.getElementById('b2').value);
        let c2 = parseFloat(document.getElementById('c2').value);
        let d2 = parseFloat(document.getElementById('d2').value);

        let a3 = parseFloat(document.getElementById('a3').value);
        let b3 = parseFloat(document.getElementById('b3').value);
        let c3 = parseFloat(document.getElementById('c3').value);
        let d3 = parseFloat(document.getElementById('d3').value);

        let D = determinant3x3(a1, b1, c1, a2, b2, c2, a3, b3, c3);

        if (D === 0) {
            document.getElementById('result').innerHTML = "No unique solution";
            return;
        }

        let Dx = determinant3x3(d1, b1, c1, d2, b2, c2, d3, b3, c3);
        let Dy = determinant3x3(a1, d1, c1, a2, d2, c2, a3, d3, c3);
        let Dz = determinant3x3(a1, b1, d1, a2, b2, d2, a3, b3, d3);

        let x = Dx / D;
        let y = Dy / D;
        let z = Dz / D;

        document.getElementById('result').innerHTML = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}, z = ${z.toFixed(2)}`;
    }
}
