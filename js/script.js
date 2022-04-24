var elInput = document.querySelector(".input");
var elButton = document.querySelector(".btn");
var elOutput = document.querySelector(".output");

var usd = 11340;

elButton.addEventListener("click", function(e) {
    e.preventDefault();
    var amount = elInput.value.trim();


    if (amount == ""){
        return
    }

    amount = Number(amount);

    if(isNaN(amount)){
        return
    }

    var result = amount * usd;

    elOutput.textContent = result.toFixed(2) + " so'm";
})
