const questions = [
    /*1*/{
        question: "In Stranger Things, Eleven loves _________ waffles.",
        options: ["Nutella", "Eggo", "Cream", "Cheese"],
        answer: "Eggo"
    },
    /*2*/{
        question: "Who said, \"Winter is coming\"?",
        options: ["Daenerys Targaryen", "Jon Snow", "Ned Stark", "Elsa"],
        answer: "Ned Stark"
    },
    /*3*/{
        question: "In The Lion King, Timon and Pumbaa believe in living life by the phrase \"Hakuna ____\".",
        options: ["Matata", "Bachata", "Malasaña", "Mojito"],
        answer: "Matata"
    },
    /*4*/{
        question: "Who is the real villain in the \"Encantadia\" series?",
        options: ["Hagorn", "Avria", "Aljur Abrenica", "Thanos"],
        answer: "Aljur Abrenica"
    },
    /*5*/{
        question: "Who trained Harry Potter but also mastered the art of staring dramatically?",
        options: ["Dumbledore", "Severus Snape", "Voldemort", "Your professor who conducts a recitation"],
        answer: "Severus Snape"
    },
    /*6*/{
        question: "Who’s the Disney princess who didn’t lose her shoe but did lose her voice for a guy?",
        options: ["Your friend who always complains and cries about her boyfriend", "Belle", "Cinderella", "Ariel"],
        answer: "Ariel"
    },
    /*7*/{
        question: "Who is the actor behind Captain Jack Sparrow in Pirates of the Caribbean?",
        options: ["Johnny Depp", "Orlando Bloom", "Will Smith", "Robert Downey Jr."],
        answer: "Johnny Depp"
    },
    /*8*/{
        question: "In Frozen, Anna finishes Elsa’s sentence with: 'Do you wanna build a ________?",
        options: ["house", "future", "snowman", "sandcastle"],
        answer: "snowman"
    },
    /*9*/{
        question: "Who is the character in Batang Quiapo who can steal your wallet, but his heart gets snatched by Mokang?",
        options: ["Tanggol", "Ramon", "Lena", "Ang tropa mong “pa-bad boy” pero softie pala deep down"],
        answer: "Tanggol"
    },
    /*10*/{
        question: "What’s the real name of Black Panther?",
        options: ["Wakanda", "M’Baku", "T’Challa", "Simba"],
        answer: "T’Challa"
    },
    /*11*/{
        question: "Who in Guardians of the Galaxy is basically your \"pa-cool\" tito who cracks jokes even in serious situations?",
        options: ["Rocket", "Star-Lord", "Groot", "Drax"],
        answer: "Star-Lord"
    },
    /*12*/{
        question: "Who is the iconic horror movie character known for their sharp teeth and insatiable hunger for blood?",
        options: ["Dracula", "Frankenstein's Monster", "Wolfman", "Freddy Krueger"],
        answer: "Dracula"
    },
    /*13*/{
        question: "Which superhero’s \"alter ego\" is basically a billionaire playboy?",
        options: ["Bruce Wayne (Batman)", "Peter Parker (Spider-Man)", "Clark Kent (Superman)", "Tony Stark (Iron Man)"],
        answer: "Tony Stark (Iron Man)"
    },
    /*14*/{
        question: "Which actor portrayed the Joker in The Dark Knight (2008), earning a posthumous Oscar for the role?",
        options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
        answer: "Heath Ledger"
    },
    /*15*/{
        question: "Which character in The Hunger Games volunteers to take her sister’s place in the deadly arena?",
        options: ["Katniss Everdeen", "Prim Everdeen", "Peeta Mellark", "Gale Hawthorne"],
        answer: "Katniss Everdeen"
    },
    /*16*/{
        question: "Which X-Men character is known for his ability to heal rapidly and his claws made of adamantium?",
        options: ["Cyclops", "Wolverine", "Beast", "Storm"],
        answer: "Wolverine"
    },
    /*17*/{
        question: "Which actor starred in Train to Busan as the \"bad guy\" who, despite his rough exterior, showed us there’s more to his character than meets the eye?",
        options: ["Ma Dong-seok", "Gong Yoo", "Lee Jung-jae", "Park Seo-jun"],
        answer: "Ma Dong-seok"
    },
    /*18*/{
        question: "Which actor made \"Jose Rizal\" look incredibly cool and relevant in the film Jose Rizal?",
        options: ["Cesar Montano", "Piolo Pascual", "Dingdong Dantes", "Jericho Rosales"],
        answer: "Cesar Montano"
    },
    /*19*/{
        question: "What is the primary goal of the antagonist Hagorn in Encantadia?",
        options: ["To unite the kingdoms peacefully", "To become the ruler of all the kingdoms", "To find the hidden treasures of Encantadia", "To destroy all the diwatas"],
        answer: "To become the ruler of all the kingdoms"
    },
    /*20*/{
        question: "Which movie that was released in worldwide cinemas last November 27? (Clue: Nayeon sang the OST for its Korean version)",
        options: ["The Wicked", "Gladiator II", "Moana 2", "The Marvels"],
        answer: "Moana 2"
    }
];

let currentQuestionIndex = -1;
let score = 0;
const totalQuestions = 20;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultsContainer = document.getElementById('results-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = ''; 

    const titleLabel = document.querySelector('.title-label p');
    titleLabel.innerText = `Question ${currentQuestionIndex + 1} out of ${totalQuestions}`; 

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'box';   
        button.innerText = option;

        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreDisplay.innerText = `${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

restartButton.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    resultsContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    optionsContainer.style.display = 'block';
    nextButton.style.display = 'block';
    prevButton.style.display = 'block';
    loadQuestion();
});

loadQuestion();

function playSoundAndRedirect(event) {
    event.preventDefault();
    const audio = document.getElementById("audio");
    audio.play();
    audio.onended = () => {
        window.location.href = "questions.html";
    };
}

