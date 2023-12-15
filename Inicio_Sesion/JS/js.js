// Obtener referencias a elementos HTML mediante su ID
const container = document.getElementById('container'); // Contenedor principal
const registerBtn = document.getElementById('register'); // Botón de registro
const loginBtn = document.getElementById('login'); // Botón de inicio de sesión

// Agregar un evento de clic al botón de registro
registerBtn.addEventListener('click', () => {
    // Cuando se hace clic en el botón de registro, se agrega la clase "active" al contenedor
    container.classList.add("active");
    document.body.classList.remove('body-login');
    document.body.classList.add('body-register');
});

// Agregar un evento de clic al botón de inicio de sesión
loginBtn.addEventListener('click', () => {
    // Cuando se hace clic en el botón de inicio de sesión, se quita la clase "active" del contenedor
    container.classList.remove("active");
    document.body.classList.remove('body-register');
    document.body.classList.add('body-login');
});
