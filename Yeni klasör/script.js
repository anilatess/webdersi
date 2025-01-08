function login() {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    if (email === 'abc@gmail.com' && password === '1234') {

        window.location.href = 'admin.html';
    } else {
             alert('Invalid email or password!');
    }
}

