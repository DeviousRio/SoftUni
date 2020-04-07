<template>
    <button @click="counter++">Counter: {{counter}}</button>    
</template>

<script>
export default {
    name: 'Counter',
    props: {
        counter: Number
    }
}
</script>

<style scoped>
    button {
        cursor: pointer;
    }
</style>