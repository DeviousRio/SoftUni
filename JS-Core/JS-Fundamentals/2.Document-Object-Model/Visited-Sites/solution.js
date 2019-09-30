function solve() {
    Array.from(document.querySelectorAll('a')).forEach(a => {
        a.addEventListener('click', () => {
            let span = a.parentNode.children[1];
            let counter = +span.textContent.split(' ')[1] + 1;
            span.textContent = `Visited: ${counter} times`;
        });
    });
}