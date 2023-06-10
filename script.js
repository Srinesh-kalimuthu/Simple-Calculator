const resultInput = document.getElementById('result');
function handleButtonClick(value) {
    if (value === 'AC') {
        resultInput.value = '';
    } else if (value === 'DEL') {
        resultInput.value = resultInput.value.slice(0, -1);
    } else {
        resultInput.value += value;
    }
}
function handleEnterButton() {
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}