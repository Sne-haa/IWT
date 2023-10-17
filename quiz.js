const quizForm = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result");

const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Saturn", "Jupiter", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Saturn", "Jupiter", "Earth"],
        answer: "Mars"
    },
    {
        question: "What is the name of the first human to walk on the moon?",
        options: ["Neil Armstrong", "Buzz Aldrin", "John Glenn", "Alan Shepard"],
        answer: "Neil Armstrong"
    },
    {
        question: "How many moons does Earth have?",
        options: ["One", "Three", "Five", "Seven"],
        answer: "One"
    },
    {
        question: "Which planet is known as the 'evening star' or 'morning star'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
    },
    {
        question: "What is the largest volcano in our solar system?",
        options: ["Mount Everest", "Mauna Loa", "Olympus Mons", "Mount St. Helens"],
        answer: "Olympus Mons"
    },
    {
        question: "Which spacecraft was the first to land on Mars?",
        options: ["Apollo 11", "Voyager 1", "Curiosity", "Viking 1"],
        answer: "Viking 1"
    },
    {
        question: "What is the largest asteroid in our solar system?",
        options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
        answer: "Ceres"
    },
    {
        question: "How many planets are there in our solar system?",
        options: ["Six", "Seven", "Eight", "Nine"],
        answer: "Eight"
    },
    {
        question: "What is the name of the largest moon of Saturn?",
        options: ["Europa", "Titan", "Ganymede", "Callisto"],
        answer: "Titan"
    },
    {
        question: "Which planet is known as the 'Ice Giant'?",
        options: ["Uranus", "Neptune", "Pluto", "Eris"],
        answer: "Uranus"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Which planet has the Great Red Spot?",
        options: ["Mars", "Saturn", "Jupiter", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the closest galaxy to the Milky Way?",
        options: ["Andromeda", "Triangulum", "Orion", "Sombrero"],
        answer: "Andromeda"
    },
    {
        question: "Which mission was the first to land humans on the Moon?",
        options: ["Apollo 1", "Apollo 8", "Apollo 11", "Apollo 13"],
        answer: "Apollo 11"
    },
    {
        question: "What is the process by which a star shines due to nuclear reactions in its core?",
        options: ["Photosynthesis", "Fusion", "Fission", "Respiration"],
        answer: "Fusion"
    },
    {
        question: "Which planet has the highest recorded surface temperature?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the name of the largest moon of Earth?",
        options: ["Europa", "Titan", "Ganymede", "Moon"],
        answer: "Moon"
    },
    {
        question: "Which planet is known for its beautiful rings?",
        options: ["Mars", "Saturn", "Jupiter", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "What is the name of the first artificial satellite launched into space?",
        options: ["Explorer 1", "Sputnik 1", "Vostok 1", "Hubble Space Telescope"],
        answer: "Sputnik 1"
    },
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, optionIndex) => `
                <label>
                    <input type="radio" name="answer${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizForm.appendChild(questionDiv);
    });
}

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="answer${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === question.answer) {
                score++;
            }
        }
    });
    return score;
}

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const score = calculateScore();
    resultContainer.textContent = `Your score: ${score} out of ${questions.length}`;
});

buildQuiz();
