function solve() {
   let inputElement = document.getElementById('num');
   let btnElement = document.querySelector(`#exercise > form > input[type="button"]`);
   btnElement.addEventListener('click', Calculate());
   
   function Calculate() {
      let result = document.getElementById('result');
      let inputValue = inputElement.value;

      let str = '';
      for (let i = 1; i <= inputValue; i++) {
         if (inputValue % i == 0) {
            str += `${i} `;
         }
      }

      str = str.trim();
      result.textContent = str;
   }
}