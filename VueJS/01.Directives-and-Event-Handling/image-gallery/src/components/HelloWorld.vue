<template>
  <div class="hello">
    <h3 @mouseover="showDate" @mouseleave="removeDate">Hover me!</h3>
    <p v-show="active">{{timestamp}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      timestamp: "",
      active: false
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
    },
    showDate() {
      this.active = !this.active;
    },
    removeDate() {
      this.active = !this.active;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  cursor: pointer;
}

p {
  font-weight: bold;
}
</style>
