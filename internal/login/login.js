let form = document.forms['login_form'];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let phone_number = form.phone_number.value;
    let otp_input = form.otp;
    let otp = form.otp.value;
    let login_btn = form['login-btn'];

    setTimeout(function() {
        otp_input.removeAttribute('readonly');
        login_btn.removeAttribute('disabled');
        otp_input.focus();
    }, 2000);

    console.log("Phone Number: ", phone_number);
    console.log("OTP: ", otp);
})