document.getElementById("phoneInput").addEventListener("input", function () {
    const feedback = document.getElementById('phoneFeedback');
    const inputValue = document.getElementById("phoneInput");
    let phonePattern = /(\+91?)[\d]{10}/;
    feedback.textContent = "";

    if(!inputValue.test(phonePattern)) {
        inputValue.classList.add("sucess");
        feedback.textContent = "valid phone number.";
        feedback.style.color = "green";
    } else {
        inputValue.classList.add("error");
        feedback.textContent = "Invalid phone number";
        feedback.style.color = "red";
    }
});