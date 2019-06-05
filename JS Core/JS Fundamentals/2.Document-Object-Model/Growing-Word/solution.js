function solve() {
   let clicks = 0;
   document.querySelectorAll('button')[0].addEventListener('click', () => {
      let pElement = document.querySelector('#exercise > p')

      if (clicks % 3 === 0) {
         pElement.style.color = 'blue';
      } else if (clicks % 3 === 1) {
         pElement.style.color = 'green';
      } else if (clicks % 3 === 2) {
         pElement.style.color = 'red';
      }
      
      clicks++;
      pElement.style.fontSize = `${clicks * 2}px`;
   });
}