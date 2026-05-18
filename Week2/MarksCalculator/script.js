function checkResult() {

    let total = 
        Number(document.getElementById("m1").value) +
        Number(document.getElementById("m2").value) +
        Number(document.getElementById("m3").value) +
        Number(document.getElementById("m4").value) +
        Number(document.getElementById("m5").value) +
        Number(document.getElementById("m6").value) +
        Number(document.getElementById("m7").value) +
        Number(document.getElementById("m8").value);

    let percent = total / 8;

    let result = "";

    if (percent >= 80) {
        result = "Distinction";
    } else if (percent >= 60) {
        result = "First Division";
    } else if (percent >= 40) {
        result = "Second Division";
    } else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Percentage: " + percent.toFixed(2) + "%<br>" +
        "Result: " + result;
}