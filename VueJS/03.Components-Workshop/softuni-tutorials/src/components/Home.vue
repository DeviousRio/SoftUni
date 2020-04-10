<template>
  <div>
    <AppContent>
      <template v-slot:nav>
        <ul>
          <li v-for="(item, i) in subjects" :key="i">
            <a href="#">{{item.name}}</a>
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
  },
  props: {
    subjects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>