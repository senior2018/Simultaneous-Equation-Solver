// script.js
function solveEquations() {
    // Get input values
    const a1 = parseFloat(document.getElementById('a1').value);
    const b1 = parseFloat(document.getElementById('b1').value);
    const c1 = parseFloat(document.getElementById('c1').value);
    const d1 = parseFloat(document.getElementById('d1').value);
    const a2 = parseFloat(document.getElementById('a2').value);
    const b2 = parseFloat(document.getElementById('b2').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const d2 = parseFloat(document.getElementById('d2').value);
    const a3 = parseFloat(document.getElementById('a3').value);
    const b3 = parseFloat(document.getElementById('b3').value);
    const c3 = parseFloat(document.getElementById('c3').value);
    const d3 = parseFloat(document.getElementById('d3').value);
  
    // Check if inputs are valid
    if (
      isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(d1) ||
      isNaN(a2) || isNaN(b2) || isNaN(c2) || isNaN(d2) ||
      isNaN(a3) || isNaN(b3) || isNaN(c3) || isNaN(d3)
    ) {
      document.getElementById('result').innerText = "Please enter valid coefficients.";
      return;
    }
  
    // Calculate the determinant of the coefficient matrix
    const determinant = a1 * (b2 * c3 - b3 * c2) -
                       b1 * (a2 * c3 - a3 * c2) +
                       c1 * (a2 * b3 - a3 * b2);
  
    if (determinant === 0) {
      document.getElementById('result').innerText = "The system has no unique solution (dependent or inconsistent).";
      return;
    }
  
    // Calculate determinants for x, y, z
    const detX = d1 * (b2 * c3 - b3 * c2) -
                 b1 * (d2 * c3 - d3 * c2) +
                 c1 * (d2 * b3 - d3 * b2);
  
    const detY = a1 * (d2 * c3 - d3 * c2) -
                 d1 * (a2 * c3 - a3 * c2) +
                 c1 * (a2 * d3 - a3 * d2);
  
    const detZ = a1 * (b2 * d3 - b3 * d2) -
                 b1 * (a2 * d3 - a3 * d2) +
                 d1 * (a2 * b3 - a3 * b2);
  
    // Calculate solutions
    const x = detX / determinant;
    const y = detY / determinant;
    const z = detZ / determinant;
  
    // Display results
    document.getElementById('result').innerHTML = `
      Solution:<br>
      x = ${x.toFixed(2)}<br>
      y = ${y.toFixed(2)}<br>
      z = ${z.toFixed(2)}
    `;
  }