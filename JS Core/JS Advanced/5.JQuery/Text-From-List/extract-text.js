function extractText() {
   // select all li items with id #items
   let items = $('ul#items li').toArray().map(li => li.textContent).join(', ');
   // select the result with id #result and add the text inside
   $('#result').text(items);
}
