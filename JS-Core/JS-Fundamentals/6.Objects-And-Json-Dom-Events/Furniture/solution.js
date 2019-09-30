function solve() {
  let totalPrice = 0;
  let arr = [];
  let decFactors = [];

  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    for (let furniture of furnitureList) {
      let div = document.createElement('div');
      div.setAttribute('class', 'furniture');

      let name = document.createElement('p');
      name.textContent = `Name: ${furniture.name}`;

      let img = document.createElement('img');
      img.setAttribute('src', furniture.img);

      let price = document.createElement('p');
      price.textContent = `Price: ${furniture.price}`;

      let decFactor = document.createElement('p');
      decFactor.textContent = `Decoration factor: ${furniture.decFactor}`;

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      div.appendChild(name);
      div.appendChild(img);
      div.appendChild(price);
      div.appendChild(decFactor);
      div.appendChild(checkbox);

      document.getElementById('furniture-list').appendChild(div);
    }
  });

  document.getElementsByTagName('button')[1].addEventListener('click', () => {
    let array = Array.from(document.getElementById('furniture-list').children);
    for (let furniture of array) {
      let isChecked = furniture.getElementsByTagName('input')[0].checked;
      if (isChecked) {
        let name = furniture.getElementsByTagName('p')[0].textContent.split(': ')[1];
        arr.push(name);

        let price = +furniture.getElementsByTagName('p')[1].textContent.split(': ')[1];
        totalPrice += price;

        let decFactor = +furniture.getElementsByTagName('p')[2].textContent.split(': ')[1];
        decFactors.push(decFactor);
      }
    }

    let textarea = document.getElementsByTagName('textarea')[1];
    textarea.value += `Bought furniture: ${arr.join(', ')}\n`;
    textarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    let averageDecFactor = decFactors.reduce((a,b) => a + b) / decFactors.length;
    textarea.value += `Average decoration factor: ${averageDecFactor}`;
  }); 
}