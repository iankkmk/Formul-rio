function validaEmail(event) {
    const inputEmail = event.target;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(inputEmail.value)) {
        inputEmail.style.color = "green";
    } else {
        inputEmail.style.color = "red";
    }
}

function validaCPF(event) {
    const inputCPF = event.target;
    let formattedCPF = inputCPF.value.replace(/\D/g, '')
                                     .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    console.log(formattedCPF);
    inputCPF.value = !formattedCPF[2] ? 
        formattedCPF[1] : 
        formattedCPF[1] + '.' + formattedCPF[2] + (formattedCPF[3] ? '.' + formattedCPF[3] : '') + (formattedCPF[4] ? '-' + formattedCPF[4] : '');
}

function validaTelefone(event) {
    const inputPhone = event.target;
    let formattedPhone = inputPhone.value.replace(/\D/g, '')
                                         .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    console.log(formattedPhone);
    inputPhone.value = !formattedPhone[2] ? 
        formattedPhone[1] : 
        '(' + formattedPhone[1] + ') ' + formattedPhone[2] + (formattedPhone[3] ? '-' + formattedPhone[3] : '');
}

function validaRenda(event) {
    const inputRenda = event.target;
    // Remove todos os caracteres não numéricos
    let formattedRenda = inputRenda.value.replace(/[^0-9,]/g, '')
                                         .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    console.log(formattedRenda);
    // Adiciona a vírgula para os centavos
    inputRenda.value = formattedRenda ? 
        formattedRenda.replace(/(\d+)([,.])(\d{0,2})/, '$1,$3') : '';
}

function validaForm(event) {
    const form = event.target;
    const addressField = form.querySelector('#address');
    const rendaField = form.querySelector('input[type="text"][placeholder="Digite sua renda"]');

    // Verifica se o endereço está preenchido
    if (!addressField.value.trim()) {
        alert('O campo de endereço é obrigatório.');
        addressField.focus();
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Verifica se a renda está preenchida
    if (!rendaField.value.trim()) {
        alert('O campo de renda é obrigatório.');
        rendaField.focus();
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    console.log('Formulário válido.');
}
