document.addEventListener("DOMContentLoaded", function () {
    const translationQuestions = [
        {
            question: "What does 'bonjour' mean in English?",
            options: ["Goodbye", "Thank you", "Hello", "How are you?"],
            correctAnswer: "Hello"
        },
        {
            question: "Which of the following is the correct translation of 'merci beaucoup'?",
            options: ["Thank you very much", "Good morning", "Goodbye", "Please"],
            correctAnswer: "Thank you very much"
        },
        {
            question: "Translate 'je suis désolé' to English.",
            options: ["I am sorry", "I love you", "Excuse me", "Goodbye"],
            correctAnswer: "I am sorry"
        },
        {
            question: "What is the translation of 'grazie' in Italian?",
            options: ["Hello", "Thank you", "Sorry", "Please"],
            correctAnswer: "Thank you"
        },
        // Add more translation questions as needed
    ];

    const questionDisplay = document.getElementById("questionDisplay");
    const optionsDisplay = document.getElementById("optionsDisplay");
    const resultDisplay = document.getElementById("resultDisplay");

    function displayQuestion(questionObj) {
        questionDisplay.textContent = questionObj.question;
        optionsDisplay.innerHTML = "";

        questionObj.options.forEach((option, index) => {
            const radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = "options";
            radioBtn.value = option;
            radioBtn.id = "option" + index;

            const label = document.createElement("label");
            label.htmlFor = "option" + index;
            label.textContent = option;

            optionsDisplay.appendChild(radioBtn);
            optionsDisplay.appendChild(label);
            optionsDisplay.appendChild(document.createElement("br"));
        });
    }

    function checkAnswer() {
        const options = document.getElementsByName("options");
        let selectedAnswer = "";
        options.forEach(option => {
            if (option.checked) {
                selectedAnswer = option.value;
            }
        });

        if (selectedAnswer === "") {
            resultDisplay.textContent = "Please select an answer.";
            return;
        }

        const currentQuestion = translationQuestions.find(question => question.question === questionDisplay.textContent);
        if (selectedAnswer === currentQuestion.correctAnswer) {
            resultDisplay.textContent = "Correct!";
        } else {
            resultDisplay.textContent = "Incorrect. The correct answer is: " + currentQuestion.correctAnswer;
        }
    }

    const checkButton = document.getElementById("checkButton");
    checkButton.addEventListener("click", checkAnswer);

    function displayRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * translationQuestions.length);
        const randomQuestion = translationQuestions[randomIndex];
        displayQuestion(randomQuestion);
        resultDisplay.textContent = "";
    }

    displayRandomQuestion();
});

function displayQuestion(questionObj) {
    questionDisplay.textContent = questionObj.question;
    optionsDisplay.innerHTML = "";

    // Shuffle options array
    const shuffledOptions = shuffleArray(questionObj.options);

    shuffledOptions.forEach((option, index) => {
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "options";
        radioBtn.value = option;
        radioBtn.id = "option" + index;

        const label = document.createElement("label");
        label.htmlFor = "option" + index;
        label.textContent = option;

        optionsDisplay.appendChild(radioBtn);
        optionsDisplay.appendChild(label);
        optionsDisplay.appendChild(document.createElement("br"));
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
