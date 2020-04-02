<template>
  <div>
    <h1>Fruits and Veggies</h1>
    <ul v-for="product in products" :key="product.id">
      <li :class="product.type == 'fruit' ? 'fruit' : 'vegetable'">
        <span>{{product.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Products",
  data: function() {
    return {
      products: [
        { id: 1, type: "fruit", name: "Grape" },
        { id: 2, type: "vegetable", name: "Cucumber" },
        { id: 3, type: "fruit", name: "Banana" },
        { id: 4, type: "vegetable", name: "Carrot" },
        { id: 5, type: "fruit", name: "Apple" },
        { id: 6, type: "vegetable", name: "Potato" }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}

ul li {
  width: 100px;
  list-style-type: none;
  margin: 16px auto;
  padding: 2px;
}

.fruit {
  background-color: skyblue;
  border: 2px solid red;
}

.vegetable {
  background-color: orange;
  border: 2px solid black;
}
</style>