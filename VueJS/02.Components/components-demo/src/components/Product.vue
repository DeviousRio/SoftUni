<template>
  <div>
    <slot name="type"></slot>
    <slot name="price"></slot>
    <slot name="ingredients"></slot>
  </div>
</template>

<script>
export default {
  name: "Product",
  // props: {
  //   type: String,
  //   price: Number,
  //   ingredients: Array
  // }
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