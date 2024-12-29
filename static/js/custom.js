// assets/js/popup.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the Subscribe button in the navigation
    var subscribeButton = document.getElementById("subscribe-button");

    // Get the popup overlay
    var popupOverlay = document.getElementById("popup-overlay");

    // Get the "No thanks" link
    var noThanksLink = document.querySelector(".no-thanks");

    // Get the subscription input and button
    var emailInput = document.querySelector(".subscription input");
    var subscribeButtonInPopup = document.querySelector(".subscription button");

    // Get the response message element (add this to your HTML if it doesn't exist)
    var responseMessage = document.createElement("p");
    responseMessage.id = "response-message";
    responseMessage.style.display = "none";
    document.querySelector(".popup-content").appendChild(responseMessage);

    // Toggle the popup when the Subscribe button is clicked
    if (subscribeButton) {
        subscribeButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the link from navigating
            popupOverlay.style.display = "flex";
        });
    }

    // Close the popup when the "No thanks" link is clicked
    if (noThanksLink) {
        noThanksLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the link from navigating
            popupOverlay.style.display = "none";
        });
    }

    // Close the popup when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });

    // Handle subscription button click
    if (subscribeButtonInPopup) {
        subscribeButtonInPopup.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the button from submitting the form

            // Get the email input value
            var email = emailInput.value;

            // Validate the email
            if (!email || !email.includes("@")) {
                responseMessage.style.display = "block";
                responseMessage.textContent = "Oops! valid email required!";
                responseMessage.style.color = "red";
                return;
            }

            // Send the email to the API endpoint
            fetch('https://alandao.net/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
            .then(response => response.json())
            .then(data => {
                // Display the response message
                responseMessage.style.display = "block";
                responseMessage.textContent = data.message;
                responseMessage.style.color = "green";

                // Clear the input
                emailInput.value = "";

                // Optionally, close the popup after a few seconds
                setTimeout(() => {
                    popupOverlay.style.display = "none";
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
                responseMessage.style.display = "block";
                responseMessage.textContent = "Subscription server is temporarily down, so sorry!";
                responseMessage.style.color = "red";
            });
        });
    }

    // Check if the user has seen the popup before (first-time visitors)
    if (localStorage.getItem("seen_popup") !== "yes") {
        popupOverlay.style.display = "flex";
        localStorage.setItem("seen_popup", "yes");
    }
});
