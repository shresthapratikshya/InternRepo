let oldAccounts = JSON.parse(localStorage.getItem("oldAccounts")) || [];
function authentication() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let account = { email, password };
    if (validation(account)) {
        console.log("Logged in");
        navigateToHome();
    } else {
        alert("Login failed");
    }
}

function validation(account) {
    let value = false;
    if (account.email == "" || account.password == "") {
        value = false;
        alert("Please enter correct email and password");
    } else if (account.email != null) {
        let accountsList = JSON.parse(localStorage.getItem("oldAccounts"));
        accountsList.forEach((element) => {
            if (account.email == element.email) {
                console.log("email matched");
                if (account.password == element.password) {
                    console.log("password matched");
                    value = true;
                } else {
                    value = false;
                }
            }
        });
    } else {
        value = false;
    }
    return value;
}

function navigateToHome() {
    window.location.href = '../createBlog.html';
}