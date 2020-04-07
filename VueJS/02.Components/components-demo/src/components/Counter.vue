<template>
    <button @click="counter++">Counter: {{counter}}</button>    
</template>

<script>
export default {
    name: 'Counter',
    data: function() {
        return {
            counter: 0
        }
    }
}
</script>

<style scoped>
    button {
        cursor: pointer;
    }
</style>