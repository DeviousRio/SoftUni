function solve() {
    let exerciseElement = document.getElementById('exercise');
    let buttons = Array.from(document.getElementsByTagName('button'));
    let resultElement = document.getElementById('result');

    let rightAnswers = ['2013', 'Pesho', 'Nakov'];
    let rightAnswersCounter = 0;
    let sectionCounter = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', event => {
            let parent = btn.parentNode;
            let inputElements = Array.from(parent.getElementsByTagName('input'));

            inputElements.forEach(inp => {
                if (inp.checked === true) {
                    sectionCounter++;
                    let answer = inp.value;

                    if (rightAnswers.includes(answer)) {
                        rightAnswersCounter++;
                    }

                    if (btn.textContent === 'Get the results') {
                        if (rightAnswersCounter === 3) {
                            resultElement.textContent = `You are recognized as top SoftUni fan!`;
                        } else {
                            resultElement.textContent = `You have ${rightAnswersCounter} right answers`;
                        }
                    } else {
                        exerciseElement.children[sectionCounter].style.display = 'block';
                    }
                }
            });
        });
    });
}