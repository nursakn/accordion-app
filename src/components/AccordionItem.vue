<template>
  <article>
    <button
      @click="toggle"
      class="flex justify-between w-full bg-blue-400 text-left p-2"
    >
      <h3>
        <slot name="title" />
      </h3>
      <div class="flex gap-2">
        <button @click.stop="onDelete()">Delete</button>
        <button @click.stop="onEdit()">Edit</button>
        <span v-if="isOpen">-</span>
        <span v-else>+</span>
      </div>
    </button>
    <Transition name="fadeHeight">
      <div class="bg-gray-300" v-if="isOpen">
        <p class="w-full">
          <slot name="description" />
        </p>
      </div>
    </Transition>
  </article>
</template>

<script>
export default {
  inject: ["setIndex", "reactiveIndex"],
  name: "AccordionItem",
  props: {
    index: Number,
    editable: Boolean,
  },
  methods: {
    toggle() {
      this.setIndex(this.index);
    },
    onDelete() {
      this.$emit("delete", this.index);
    },
    onEdit() {
      this.$emit("edit", this.index);
    },
  },
  computed: {
    isOpen: function () {
      return this.reactiveIndex.currentItem === this.index;
    },
  },
};
</script>

<style>
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.5s;
  max-height: 200px;
  opacity: 1;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
