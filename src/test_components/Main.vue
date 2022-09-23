<script setup lang="ts">
import TestModal from "@/test_components/TestModal.vue"
import ModalRoot from "@/vue-awaitable-modal/ModalRoot.vue"
import { modalServiceInstance } from "@/vue-awaitable-modal/modalService"
import { ref } from "vue"

const lastResult = ref<any>(undefined)

const launchModal = async () => {
  const result = await modalServiceInstance.showModal(TestModal, {
    text: "Hello world!"
  })

  lastResult.value = result
}

const launchOtherModal = async () => {
  const result = await modalServiceInstance.showModal(TestModal, {
    text: "Hello world 2!"
  })
  lastResult.value = result
}

</script>

<template>
  <ModalRoot :modal-service="modalServiceInstance"></ModalRoot>
  <button @click="launchModal">Launch</button>
  <button @click="launchOtherModal">Launch other</button>
  <div>
    <span>Last result:</span>
    <span>{{lastResult}}</span>
  </div>

</template>

<style scoped lang="scss">

</style>
