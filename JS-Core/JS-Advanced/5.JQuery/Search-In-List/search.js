function search() {
   // Getting what we are searching
   let searchText = $('#searchText').val();
   // Checking for match
   let matchedElements = $(`#towns li:contains('${searchText}')`);
   //Removing the bold font weight after clicking another search
   $('#towns li').css('font-weight', '');
   // Changing the font weight to bold if we have match
   matchedElements.css('font-weight', 'bold');
   // Printing the result
   $('result').text(matchedElements.length + ' matches found.');
}