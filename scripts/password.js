var password = document.querySelector('.password');

function showPassword() {
    document.querySelector(".show-password").addEventListener("click", function () {
        if(this.classList[2] == "fa-eye-slash") {
            this.classList.remove("fa-eye-slash")
            this.classList.add("fa-eye")
            password.type = "text"
        } else {
            this.classList.remove("fa-eye")
            this.classList.add("fa-eye-slash")
            password.type = "password"
        }
    })
}

showPassword()