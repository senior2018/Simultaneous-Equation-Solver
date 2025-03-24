// script.js
function solveEquations() {
    // Get input values
    const a1 = parseFloat(document.getElementById('a1').value);
    const b1 = parseFloat(document.getElementById('b1').value);
    const c1 = parseFloat(document.getElementById('c1').value);
    const a2 = parseFloat(document.getElementById('a2').value);
    const b2 = parseFloat(document.getElementById('b2').value);
    const c2 = parseFloat(document.getElementById('c2').value);
  
    // Check if inputs are valid
    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(a2) || isNaN(b2) || isNaN(c2)) {
      document.getElementById('result').innerText = "Please enter valid coefficients.";
      return;
    }
  
    // Calculate determinant
    const determinant = a1 * b2 - a2 * b1;
  
    if (determinant === 0) {
      document.getElementById('result').innerText = "The equations have no unique solution (dependent or inconsistent).";
      return;
    }
  
    // Calculate solutions
    const x = (c1 * b2 - c2 * b1) / determinant;
    const y = (a1 * c2 - a2 * c1) / determinant;
  
    // Display results
    document.getElementById('result').innerHTML = `
      Solution:<br>
      x = ${x.toFixed(2)}<br>
      y = ${y.toFixed(2)}
    `;
  }