<template>
  <div class="hello">
    <h3>Time is... ?</h3>
    <p>{{timestamp}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      timestamp: ""
    };
  },
  created() {
    setInterval(this.getCurrentDay, 1000);
  },
  methods: {
    getCurrentDay() {
      const today = new Date();
      const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + ' г.,';
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' ч.';
      const dateTime = date + ' ' + time;
      this.timestamp = dateTime;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
}
</style>
