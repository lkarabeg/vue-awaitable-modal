<script setup lang="ts">

import ModalBackdrop from "@/test_components/ModalBackdrop.vue"
import { defineProps } from "vue"
import { ModalContext } from "@/vue-awaitable-modal/modalContext"

export interface TestModalProps {
  text: string
  modalContext: ModalContext
}

const props = defineProps<TestModalProps>()
</script>

<template>
  <ModalBackdrop @click="props.modalContext.dismiss()">
    <div class="test-modal">
      <div>{{props.text}}</div>
      <div>TestModal works!</div>
      <button @click="props.modalContext.close({success: true})">Confirm</button>
      <button @click="props.modalContext.dismiss">Cancel</button>
    </div>
  </ModalBackdrop>
</template>

<style scoped lang="scss">
.test-modal {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
</style>
