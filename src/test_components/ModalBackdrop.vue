<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ModalBackdrop",
  props: {},
  emits: [ 'click' ],
  methods: {
    onClick(event: Event) {
      if (event.target === this.$refs.backdrop) {
        this.$emit('click')
      }
    },
  },
})
</script>

<template>
  <div class="modal-backdrop" @click="onClick" ref="backdrop">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(178, 186, 189, 0.8);
  overflow: hidden;
}
.modal-content {
  margin-top: auto;
  margin-bottom: auto;
  overflow-y: auto;
}
</style>
