<template>
    <div>
        <h3>This is my product list:</h3>
        <Product v-for="(p, i) in products" :key="i"
            :type="p.type"
            :price="p.price"
            :ingredients="p.ingredients"        
         />
    </div>
</template>

<script>
import Product from './Product';

export default {
    name: 'ProductList',
    props: {
        products: Array
    },
    components: {
        Product
    }
}
</script>

<style scoped>

</style>