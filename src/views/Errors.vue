<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Error -->
    <div>
      Modal opened:
      <span :class="[showModal ? 'text-success' : 'text-danger']">{{ showModal }}</span>
    </div>
    <d-btn @click.native="showModal=true;">Click Me</d-btn>
    <d-modal v-if="showModal" @close="showModal=false;">
      <d-modal-header>
        <d-modal-title>Header</d-modal-title>
      </d-modal-header>
      <d-modal-body>👋 Hello there!</d-modal-body>
    </d-modal>
    <div class="error">
      <div class="error__content">
        <h2>500</h2>
        <h3>Something went wrong!</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <d-button pill>&larr; Go Back</d-button>
      </div>
    </div>
  </d-container>
</template>
<script>
export default {
  data() {
    return {
      showModal: false
    };
  }
};
</script>
