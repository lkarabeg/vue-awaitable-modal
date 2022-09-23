<script setup lang="ts">
import { computed, onBeforeMount, shallowRef } from 'vue'
import { ModalService, ShowModalEvent } from "@/vue-awaitable-modal/modalService"

export interface ModalRootProps {
  modalService: ModalService
}
const props = defineProps<ModalRootProps>()

let showModalEvent = shallowRef<ShowModalEvent>()

const modalProps = computed(() => {
  if (showModalEvent.value === undefined) {
    return { }
  } else {
    return {
      ...showModalEvent.value.props,
      modalContext: showModalEvent.value.modalContext,
    }
  }
})

onBeforeMount(() => {
  props.modalService.onShowModal(event => {
    showModalEvent.value = event
    event.modalContext.onClose(() => {
      showModalEvent.value = undefined
    })
  })
})
</script>

<template>
  <component
      v-if="showModalEvent !== undefined"
      :is="showModalEvent.component"
      v-bind="modalProps"
  />
</template>

<style scoped lang="scss">
</style>
