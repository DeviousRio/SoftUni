<template>
  <div>
    <AppContent>
      <template v-slot:nav>
        <ul>
          <li v-for="(item, i) in subjects" :key="i" :class="{ active: i === selectedSubjectIndex }" @click="selectSubjectIndex(i)">
            <a href="#">{{item.name}}</a>
          </li>
        </ul>
      </template>

      <template v-slot:info>
        {{selectedSubject.content}}
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
  data() {
    return {
      selectedSubjectIndex: 0
    }
  },
  props: {
    subjects: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectSubjectIndex(idx) {
      this.selectedSubjectIndex = idx;
    }
  },
  computed: {
    selectedSubject() {
      return this.subjects[this.selectedSubjectIndex];
    }
  }
};
</script>

<style scoped>
</style>