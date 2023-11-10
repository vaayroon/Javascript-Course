/* Creat a class for the keys */

class Key {
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}

const form = document.getElementsByTagName("form")[0];
const keysSelector = document.getElementById("keysSelector");

keysSelector.setAttribute("required", true);

/* Generat a funtion to create <option> nodes for door key selection: */
function createDoorKeyOption(key, { name, model, price }) {
    let option = document.createElement("option");
    option.value = key;
    option.innerHTML = name + " - " + model + " - " + price+"€";
    return option;
}

/* Iterate 20 times */
for (var i = 1; i < 21; i++) {
    /* Create a new key */
    let key = new Key(`Key${i}`, `Model${i}`, i * 10);
    /* Create a new <option> node */
    let option = createDoorKeyOption(i, key);
    /* Append the new <option> node to the <select> node */
    keysSelector.appendChild(option);
}

/* Create a button to submit the form */
let submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Purchase";
submitBtn.classList.add("btn", "btn-primary");
console.log("🚀 ~ file: soluton6a.js:36 ~ submitBtn:", keysSelector)
form.appendChild(submitBtn);