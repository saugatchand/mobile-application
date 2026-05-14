let total = 10000;

function addMoney(){

    let amount = Number(document.getElementById("num").value);

    let pin = prompt("Enter PIN");

    if(pin == 1234){

        total = total + amount;

        document.getElementById("bal").innerHTML =
        "Balance : " + total;

        document.getElementById("text").innerHTML =
        "Money Deposited";
    }

    else{
        document.getElementById("text").innerHTML =
        "Wrong PIN";
    }
}

function removeMoney(){

    let amount = Number(document.getElementById("num").value);

    let pin = prompt("Enter PIN");

    if(pin == 1234){

        if(amount <= total){

            total = total - amount;

            document.getElementById("bal").innerHTML =
            "Balance : " + total;

            document.getElementById("text").innerHTML =
            "Money Withdrawn";
        }

        else{
            document.getElementById("text").innerHTML =
            "Low Balance";
        }
    }

    else{
        document.getElementById("text").innerHTML =
        "Wrong PIN";
    }
}