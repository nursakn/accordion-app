<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      reactive: {
        currentItem: 0,
      },
    };
  },
  methods: {
    setIndex: function (index) {
      if (this.reactive.currentItem === index) {
        this.reactive.currentItem = 0;
      } else {
        this.reactive.currentItem = index;
      }
      return this.reactive.currentItem;
    },
  },
  provide() {
    return {
      setIndex: this.setIndex,
      reactiveIndex: this.reactive,
    };
  },
};
</script>

<style></style>
