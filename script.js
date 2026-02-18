// Grab the input, button, and message area from the page.
let nameInput = document.getElementById("name-input");
let welcomeButton = document.getElementById("welcome-button");
let welcomeMessage = document.getElementById("welcome-message");

// When the button is clicked, show a welcome message under it.
welcomeButton.addEventListener("click", function () {
	// Get the text the user typed and remove extra spaces.
	let userName = nameInput.value.trim();

	// If the input is empty, use a friendly default name.
	if (userName === "") {
		userName = "friend";
	}

	// Combine strings with the name using concatenation.
	welcomeMessage.textContent = "Welcome, " + userName + "! You are awesome!";

	// Clear the input so it is ready for a new name.
	nameInput.value = "";
});