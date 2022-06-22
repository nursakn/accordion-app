<template>
  <section>
    <Accordion>
      <AccordionItem :index="1">
        <template v-slot:title> Блок 1 </template>
        <template v-slot:description>Описание</template>
      </AccordionItem>
      <AccordionItem :index="2">
        <template v-slot:title> Блок 2 </template>
        <template v-slot:description>Описание</template>
      </AccordionItem>
      <AccordionItem :index="3">
        <template v-slot:title> Блок 3 </template>
        <template v-slot:description>Описание</template>
      </AccordionItem>
    </Accordion>
  </section>
</template>

<script>
import Accordion from "../components/Accordion.vue";
import AccordionItem from "../components/AccordionItem.vue";
export default {
  name: "Simple",
  components: { Accordion, AccordionItem },
};
</script>

<style></style>
