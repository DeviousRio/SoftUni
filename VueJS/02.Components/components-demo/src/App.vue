<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <!-- <Counter :counter="counter" /> -->
    <ProductList :products="products" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import Counter from "./components/Counter.vue";
import ProductList from "./components/ProductList";

export default {
  name: "App",
  data: function() {
    return {
      counter: 0,
      products: [
        { type: 'Spaghetti', price: 11, ingredients: [ 'Pasta', 'Meatballs', 'Sauce' ] },
        { type: 'Musaka', price: 10, ingredients: [ 'Potatoes', 'Mince', 'Eggs' ] },
        { type: 'Pancakes', price: 12, ingredients: [ 'Eggs', 'Flour', 'Milk' ] }
      ]
    };
  },
  components: {
    HelloWorld,
    // Counter,
    ProductList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin: 0;
  margin-top: 20px;
}

ul li {
  
}
</style>