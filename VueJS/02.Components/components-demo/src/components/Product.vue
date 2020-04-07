<template>
  <div>
    <span>{{type}}</span>
    <span>{{price}}</span>

    <ul>
      <li v-for="(ing, i) in ingredients" :key="i">{{ing}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    type: String,
    price: Number,
    ingredients: Array
  }
};
</script>

<style scoped>
    div {
        margin-top: 20px;
    }

    span {
        display: block;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    ul li {
        list-style-type: none;
    }
</style>