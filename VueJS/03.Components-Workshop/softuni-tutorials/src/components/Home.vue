<template>
  <div>
    <AppContent>
      <template v-slot:nav>
        <ul>
          <li>
            <a href="#">JS Conditional Statements</a>
          </li>
          <li>
            <a href="#">JS Loops</a>
          </li>
          <li>
            <a href="#">JS Objects</a>
          </li>
        </ul>
      </template>
    </AppContent>
  </div>
</template>

<script>
import AppContent from "./shared/Content.vue";

export default {
  components: {
    AppContent
  }
};
</script>

<style scoped>
</style>