<template>
  <form class="flex flex-col gap-2" @submit.prevent="submit">
    <p class="font-bold">Editor</p>
    <label for="title">
      <input id="title" v-model="title" />
    </label>
    <label for="description">
      <input id="description" v-model="description" />
    </label>
    <input type="submit" />
  </form>
</template>

<script>
export default {
  name: "Edit",
  props: {
    item: {},
  },
  data() {
    return {
      title: this.item.title,
      description: this.item.description,
    };
  },
  methods: {
    submit() {
      this.$emit("edit-submit", {
        id: this.item.id,
        title: this.title,
        description: this.description,
      });
    },
  },
};
</script>

<style></style>
