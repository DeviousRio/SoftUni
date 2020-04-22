<template>
  <form @submit.prevent="submitHandler">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
      <template v-if="$v.username.$error">
        <div v-if="!$v.username.required">Username is required</div>
        <div v-if="!$v.username.minLength">Username should be more than 3 symbols</div>
      </template>
    </div>
    <button>Register</button>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: ""
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("Form was sunbmitted!");
    }
  }
};
</script>

<style scoped>
</style>