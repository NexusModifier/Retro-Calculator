function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteLastChar() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function appendChar(char) {
    document.getElementById("result").value += char;
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
  }
  
  function calculateSqrt() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(eval(result));
  }
  
  function calculatePower() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(eval(result), 2);
  }
  
  function calculateSin() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = Math.sin(eval(result));
  }
  
  function calculateCos() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = Math.cos(eval(result));
  }
  
  function calculateTan() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = Math.tan(eval(result));
    }