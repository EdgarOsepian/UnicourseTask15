const userName = prompt("Enter username");
const password = prompt("Enter password)");

function checkAdmin(name, pass) {
    if (name == 'admin' && pass == 1234) {
        alert("Hello Admin");
    } else {
        alert("Hello guest");
    }
}

checkAdmin(userName, password);