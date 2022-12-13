// isi logic gamemu disini

document.querySelectorAll("#option a").forEach((anchor) => {
	anchor.onclick = (element) => {
		computerChoice(element);
	};
});
const computerChoice = (element) => {
	// Menangkap element pilihan komputer
	let computerChoice = document.querySelector("#result");

	let userChoice = element.target.innerText;

	let choices = ["Rock", "Paper", "Scissors"];

	computerChoice.innerHTML =
		choices[Math.round(Math.random() * choices.length)];
	computerChoice = computerChoice.innerHTML;
	// draw
	if (userChoice == computerChoice) {
		alert("Draw");
	}

	// user win
	if (userChoice == "Rock" && computerChoice == "Scissors") {
		alert("You Win");
	} else if (userChoice == "Paper" && computerChoice == "Rock") {
		alert("You Win");
	} else if (userChoice == "Scissors" && computerChoice == "Paper") {
		alert("You Win");
	}
	// user win
	if (userChoice == "Scissors" && computerChoice == "Rock") {
		alert("You Lose");
	} else if (userChoice == "Rock" && computerChoice == "Paper") {
		alert("You Lose");
	} else if (userChoice == "Paper" && computerChoice == "Scissors") {
		alert("You Lose");
	}
};
