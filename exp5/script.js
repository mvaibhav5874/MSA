function checkAnswer() {
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');

    if (!answer1 || !answer2) {
        alert("Please answer both questions!");
        return;
    }

    let score = 0;
    if (answer1.value === "Paris") {
        score++;
    }
    if (answer2.value === "Mars") {
        score++;
    }

    alert(`You got ${score} out of 2 questions correct!`);
}