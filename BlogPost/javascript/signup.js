let oldAccounts = JSON.parse(localStorage.getItem("oldAccounts")) || [];
function createAccount() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let newAccount = { email, password, confirmPassword };
    if (validation(newAccount)) {
        localStorage.setItem("newAccount", JSON.stringify(newAccount));
        if (JSON.parse(localStorage.getItem("oldAccounts")) == null) {
            oldAccounts = [];
        }
        oldAccounts.push(newAccount);
        localStorage.setItem("oldAccounts", JSON.stringify(oldAccounts));
        navigateToLogin();
    } else {
        console.log("False attempt");
    }
}

function validation(newAccount) {
    let value = true;
    if (newAccount.email == "" || newAccount.password == "" || newAccount.confirmPassword == "") {
        value = false;
        alert("Please fill up all the fields");
    } else if (newAccount.password != newAccount.confirmPassword) {
        value = false;
        alert("Please enter correct password");
    } else if (newAccount.email != "") {
        let accountsList = JSON.parse(localStorage.getItem("oldAccounts"));
        accountsList.forEach((element) => {
            if (newAccount.email == element.email) {
                alert("Account already exist");
                value = false;
            }
        });
    }
    return value;
}

function navigateToLogin() {
    window.location.href = '../login.html';
}