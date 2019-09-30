function solve() {
	let titleElement = document.getElementById('createTitle');
	let title = titleElement.value;

	let textareaElement = document.getElementById('createContent');
	let text = textareaElement.value;

	let articlesList = document.getElementById('articles');

	if (title !== '' && text !== '') {
		let article = document.createElement('article');

		let h3Element = document.createElement('h3');
		h3Element.textContent = title;

		let pElement = document.createElement('p');
		pElement.textContent = text;

		article.appendChild(h3Element);
		article.appendChild(pElement);
		articlesList.appendChild(article);

		titleElement.value = '';
		textareaElement.value = '';
	}
}