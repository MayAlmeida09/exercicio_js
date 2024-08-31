function validarFormulario() {

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    
    const messageElement = document.getElementById('message');
    
    if (campoB > campoA) {
        messageElement.textContent = 'O formulário é válido!';
        messageElement.className = 'message valid';
    } else {
        messageElement.textContent = 'O formulário é inválido. O número B deve ser maior que o número A.';
        messageElement.className = 'message invalid';
    }
}