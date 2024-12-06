// Get references to elements
const mobileInput = document.getElementById("mobile");
const sendOtpButton = document.getElementById("send-otp-btn");

// Add event listener to the input field
mobileInput.addEventListener("input", () => {
    // Enable the button if the input field is not empty
    if (mobileInput.value.trim() !== "") {
        sendOtpButton.disabled = false;
    } else {
        sendOtpButton.disabled = true;
    }
});
