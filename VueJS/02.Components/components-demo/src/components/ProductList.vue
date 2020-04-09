<template>
    <div>
        {{title}}
        <input type="text" :value="title" @input="changeTitle" />

        <h3>This is my product list:</h3>

        <Product v-for="(p, i) in products" :key="i">
            <h2 slot="type">Type: {{p.type}}</h2>
            <h3 slot="price">Price: {{p.price}}</h3>
            <ul slot="ingredients">
                <li v-for="(ing, i2) in p.ingredients" :key="i2">{{ing}}</li>
            </ul>
        </Product>
    </div>
</template>

<script>
import Product from './Product';

export default {
    name: 'ProductList',
    props: {
        type: Array,
        validator(arr) {
            // Check all properties
            return arr.every(p => typeof p.type === 'string'
            && typeof p.price === 'number'
            && Array.isArray(p.ingredients))
        }
    },
    data: function() {
        return {

        }
    },
    methods: {
        changeTitle(e) {
            const value = e.target.value;
            this.$emit('onChangeTitle', value);
        }
    },
    components: {
        Product
    }
}
</script>

<style scoped>

</style>