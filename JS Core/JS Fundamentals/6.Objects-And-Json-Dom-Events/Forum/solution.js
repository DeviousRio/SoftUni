function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
        event.preventDefault();
        let user = {
            username: document.getElementsByClassName('user-info')[0].children[1].value,
            email: document.getElementsByClassName('user-info')[0].children[5].value,
            topics: Array.from(document.getElementsByClassName('topics')[0].children).filter(el => el.checked).map(el => el.value)
        };

        let tr = document.createElement('tr');
        let tdUsername = document.createElement('td');
        tdUsername.textContent = user.username;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        let tdTopics = document.createElement('td');
        tdTopics.textContent = user.topics.join(' ');

        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        document.getElementsByTagName('tbody')[0].appendChild(tr);
    });

    document.getElementsByTagName('button')[1].addEventListener('click', () => {
        let str = document.getElementsByTagName('input')[7].value;
        let arr = Array.from(document.querySelectorAll('table tbody tr td'));

        for (let el of arr) {
            el.parentNode.style.visibility = 'hidden';
        }

        for (let el of arr) {
            if (el.textContent.includes(str)) {
                el.parentNode.style.visibility = 'visible';
            }
        }
    });
}