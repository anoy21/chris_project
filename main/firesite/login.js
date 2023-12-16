document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('#login-form');
    const logoutLink = document.querySelector('#logout-link');
    const errorMessage = document.getElementById("error-message");

    // Xử lý thay đổi trạng thái xác thực
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("User logged in");
            console.log(user);
            setupUI(user);
            const uid = user.uid;
            console.log(uid);
        } else {
            console.log("User logged out");
            setupUI();
        }
    });

    // Xử lý sự kiện đăng nhập

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['pswd'].value;

        auth.signInWithEmailAndPassword(email, password)
            .then((cred) => {
                loginForm.reset();
                console.log(email);
                alert('Successful login!');
                window.location.href = "store/store.html";

            })
            .catch((error) => {
                const errorMessageText = error.message;
                errorMessage.textContent = errorMessageText;
                console.error(errorMessageText);
            });
    });

    // Xử lý sự kiện đăng xuất
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut();
    });
});