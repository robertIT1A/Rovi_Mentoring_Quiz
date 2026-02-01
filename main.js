const startBtn = document.querySelector('.start');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.container');
const homeSection = document.querySelector('.home');
const questions = document.querySelectorAll('.question');
const doneBtn = document.getElementById('done');

let currentQuestionIndex = 0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = (e) => {
    e.preventDefault();
    homeSection.classList.add('hide');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizSection.classList.add('active');
    showQuestion(0);
};

// quiz 1 by 1
function showQuestion(index) {
    questions.forEach(q => q.classList.remove('active'));
    questions[index].classList.add('active');
    

    if (index === questions.length - 1) {
        doneBtn.style.display = "block";
    } else {
        doneBtn.style.display = "none";
    }
}

// Handle Multiple Choice Clicks
const choices = document.querySelectorAll('.choice');
choices.forEach(button => {
    button.addEventListener('click', () => {
        const isCorrect = button.getAttribute('data-correct') === "true";
        
        if (isCorrect) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        }, 800);
    });
});

// "Meron" or "Wala" Logic
const meronBtn = document.getElementById('Meron');
const walaBtn = document.getElementById('Wala');
const overlay = document.getElementById('overlay');
const animalImg = document.getElementById('animalImage');
const sadImg = document.getElementById('sadImage');

meronBtn.onclick = () => {
    overlay.style.display = "block";
    animalImg.style.display = "block";
};

walaBtn.onclick = () => {
    overlay.style.display = "block";
    sadImg.style.display = "block";
};

function hideImage() {
    overlay.style.display = "none";
    animalImg.style.display = "none";
    sadImg.style.display = "none";
}


overlay.onclick = hideImage;
animalImg.onclick = hideImage;
sadImg.onclick = hideImage;

doneBtn.onclick = () => {
    alert("Quiz Finished! Thank you for playing.");
    location.reload(); 
};


document.addEventListener('DOMContentLoaded', () => {

    const options = document.querySelectorAll('.choice');

    const submitBtn = document.getElementById('done');

    let score = 0;

    let answered = 0;

    const totalQuestions = 5;



    options.forEach(option => {

        option.addEventListener('click', () => {

            const question = option.closest('.question');

            const allOptionsInQuestion = question.querySelectorAll('.choice');

            allOptionsInQuestion.forEach(opt => opt.disabled = true);

            if (option.dataset.correct === 'true') {

                option.classList.add('correct');

                score++;

            } else {

                option.classList.add('incorrect');


                allOptionsInQuestion.forEach(opt => {

                    if (opt.dataset.correct === 'true') {

                        opt.classList.add('correct');

                    }

                });

            }

           

            answered++;

        

            if (answered === totalQuestions) {

                submitBtn.disabled = false;

            }

        });

    });



    submitBtn.addEventListener('click', () => {

        alert(`Quiz Complete! Your score is ${score} out of ${totalQuestions}.`);

        location.reload();

    });

});

