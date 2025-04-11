function closeForm() {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';
}

document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    alert('¡Registro exitoso!');
    closeForm();
}); 