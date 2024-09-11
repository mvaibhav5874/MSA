function checkAnswer() {
    // Get the selected answers
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');

    // Check if answers were selected
    if (!answer1 || !answer2) {
        alert("Please answer both questions!");
        return;
    }

    // Check if the answers are correct
    let score = 0;
    if (answer1.value === "Paris") {
        score++;
    }
    if (answer2.value === "Mars") {
        score++;
    }

    // Display the result
    alert(`You got ${score} out of 2 questions correct!`);
}