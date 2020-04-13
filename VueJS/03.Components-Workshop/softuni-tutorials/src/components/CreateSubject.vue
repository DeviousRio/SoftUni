<template>
  <AppContent>
    <template v-slot:nav>
      <ul>
        <li
          v-for="(item, i) in subjects"
          :key="i"
          :class="{ active: i === selectedSubjectIndex }"
          @click="selectSubjectIndex(i)"
        >
          <a href="#">{{item.name}}</a>
        </li>
      </ul>
    </template>

    <template v-slot:info>
      <div class="form-group">
        <input placeholder="Technology subject..." type="text" id="subject" v-model="subject" />
      </div>

      <VueEditor v-model="htmlContent" />
      <select name="technologies" id="technologies" v-model="technologyId">
        <option :value="null" selected>Select a technology</option>
        <option v-for="item in technologies" :key="item.id" :value="item.id">{{item.name}}</option>
      </select>

      <button class="btn" @click="createSubjectHandler()">Create</button>
      <h3>Content preview</h3>
      <div class="content-preview"></div>
    </template>
  </AppContent>
</template>

<script>
import { VueEditor } from "vue2-editor";
import AppContent from "./shared/Content.vue";

export default {
  components: {
    AppContent,
    VueEditor
  },
  data() {
    return {
      selectedSubjectIndex: 0,
      htmlContent: "",
      technologyId: null,
      subject: ""
    };
  },
  props: {
    subjects: {
      type: Array,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectSubjectIndex(idx) {
      this.selectedSubjectIndex = idx;
    },
    createSubjectHandler() {
      const { technologyId, subject, htmlContent } = this.$data;
      this.$emit("create", { technologyId, subject, htmlContent });

      this.technologyId = null;
      this.subject = "";
      this.htmlContent = "";
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