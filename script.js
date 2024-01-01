const input1Btn = document.querySelector("#input1-btn");

const displayText = () => {
    let inputText = document.querySelector("#input1-field").value;
    let textField = document.querySelector("#input1-text");

    textField.value = inputText;
}

input1Btn.addEventListener("click", displayText)
