const validateForm = () => {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var issue = document.getElementById("issue").value;
    var message= document.getElementById("message").value;
    
    if ((username == "") || (email == "") || (issue == "")) {
        alert("Los campos Nombre, Email o Asunto no pueden quedar vacios!");
    } else {
        console.log("Valores registrados: ");
        console.log('Nombre: ' + username);
        console.log('Email: ' + email);
        console.log('Asunto: ' + issue);
        console.log('Mensaje: ' + message);
    }
} 






