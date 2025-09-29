// Setting Up Variables

const Base_Cost = 15000;
const Lagos = document.getElementById("Lagos");
const Ibadan = document.getElementById("Ibadan");
const Kwara = document.getElementById("Kwara");
const Sokoto = document.getElementById("Sokoto");
const Anambra = document.getElementById("Anambra");
const button = document.getElementById("Calc-btn");
const exp = document.getElementById("exp-delivery");


button.addEventListener("click", function () {
    const Destination_Zone = document.getElementById("destination-zone");
    const Selected_Destination_Zone = Destination_Zone.options[Destination_Zone.selectedIndex].id;
    const Package_Weight = parseInt(document.getElementById("Weight").value);
    let Total_Amount = Base_Cost;

    if (isNaN(Package_Weight) || Package_Weight < 0) {
        alert("Please input valid parameters");
        return;
    }
    if (Package_Weight > 50) {
        alert("Max weight is 50kg");
        return;
    }
    if (Selected_Destination_Zone === Lagos.id) {
        Total_Amount += 10000;
    }
    else if (Selected_Destination_Zone === Ibadan.id) {
        Total_Amount += 15000;
    }
    else if (Selected_Destination_Zone === Kwara.id) {
        Total_Amount += 20000;
    }
    else if (Selected_Destination_Zone === Sokoto.id) {
        Total_Amount += 25000;
    }
    else if (Selected_Destination_Zone === Anambra.id) {
        Total_Amount += 30000;
    }
    if (Package_Weight > 50) {
        Total_Amount += 10000;
    }
    else if (Package_Weight > 40) {
        Total_Amount += 8000
    }
    else if (Package_Weight > 30) {
        Total_Amount += 6000
    }
    else if (Package_Weight > 20) {
        Total_Amount += 5000;
    }
    else if (Package_Weight > 10) {
        Total_Amount += 2000;
    }
    else if (Package_Weight > 5) {
        Total_Amount += 1000;
    }


    if (exp.checked) {
        Total_Amount *= 1.5;
    }
    let result = document.getElementById("result")
    result.textContent = ("The amount to be paid for " + Package_Weight + "kg to zone " + Selected_Destination_Zone + " is N" + Total_Amount)
}) 
