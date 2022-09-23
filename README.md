# Vue Awaitable Modal

A simple, barebones modal library inspired by the modals in Angular Material. 

Bring your own components and styling, because this library doesn't provide those.

## How it works

The Right and Good way to invoke a modal is like this:

````typescript jsx
const showPrompt = async () => {
    const result = await modalService.showModal(MyModalComponent, { message: "Hello world" })
    // Do stuff with the result after the user is done interacting with the modal
}
````

Not like this, because it requires a bunch of unwanted supporting code in the parent 
component that's trying to show the modal. Plus we can only launch modals from templates. 
Yuck!

````vue
<template>
  <!--  We don't want this-->
  <MyModalComponent 
      v-if="showModal" 
      @dismiss="showModal = false"
      @confirm="onConfirmedInModal"
  />
</template>
````

## Getting started

### Place the modal root component

This is where the modals will be rendered in the DOM. It requires a modal service.

````vue
<!--App.vue-->
<script setup lang="ts">
import modalService, { ModalRoot } from "vue-awaitable-modal"
</script>

<template>
    <ModalRoot :modal-service="modalService"></ModalRoot>
    <router-view></router-view>
</template>
````

### Show a modal

When you want to show a modal, pass a component and its props to showModal. You decide what is returned from the modal.
````typescript jsx
const result = await modalService.showModal(MyModalComponent, { message: "Hello world" })
console.log(result.data)
````

The props will be passed into the component, along with a modal context.

The context is used to return a result to the calling component. This way you can determine
whether the user clicked OK, the action succeeded, etc.

````typescript jsx
// Inside the component being shown as a modal
props: {
    message: String,
    modalContext: Object as () => ModalContext
}

// When closing
this.modalContext.dismiss()
this.modalContext.close({ success: true })
````

### (Optional) Extend the modal service

Create a singleton modal service by extending the provided one.
Then you can add convenience methods to launch specific modals. 

**Be sure to pass this instance to the ``ModalRoot`` 
component instead of the default instance as shown above.**

```ts
// modalService.ts
import { ModalService as _ModalService } from 'vue-awaitable-modal'

class ModalService extends _ModalService {
  constructor() {
    super()
  }
  
  public async promptForConfirmation() {
      const result = await this.showModal(MyConfirmationDialogComponent, { text: "Do you like modals?" })
      return result as MyResultType
  }
}

export default new ModalService()
```

## Typescript

The library includes types, but there is currently no type inference for

* the return type (it's just ``unkown``)
* props being passed along with a component (they're just ``{ [name: string]: unkown }``)

