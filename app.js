function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    var bmi = (weight / (height * height)) * 703;
  
    document.getElementById("result").value = bmi.toFixed(1);
  }
  