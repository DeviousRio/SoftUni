<template>
  <div id="app">
    <button @click="selectedComponent='HelloWorld'">Render Hello World</button>
    <button @click="selectedComponent='ProductList'">Render Product List</button>

    <keep-alive>
      <component
        :is="selectedComponent"
        msg="Welcome to your Vue.js App"
        :products="products"
        :title="title"
        @onChangeTitle="title=$event"
      />
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProductList from "./components/ProductList";

export default {
  name: "App",
  data: function() {
    return {
      counter: 0,
      products: [
        {
          type: "Spaghetti",
          price: 11,
          ingredients: ["Pasta", "Meatballs", "Sauce"]
        },
        {
          type: "Musaka",
          price: 10,
          ingredients: ["Potatoes", "Mince", "Eggs"]
        },
        { type: "Pancakes", price: 12, ingredients: ["Eggs", "Flour", "Milk"] }
      ],
      title: "This is my product list!",
      selectedComponent: "HelloWorld"
    };
  },
  watch: {
    title(oldValue, newValue) {
      console.log([oldValue, newValue]);
    }
  },
  components: {
    HelloWorld,
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

button {
  margin: 5px;
  cursor: pointer;
}
</style>