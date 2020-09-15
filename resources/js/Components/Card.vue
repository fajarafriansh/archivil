<template>
  <div class="bg-white rounded-xl border border-base-color4">
    <card-header>
      <template #title><slot name="title"></slot></template>
    </card-header>

    <div class="px-5 py-5">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  import CardHeader from './CardHeader'

  export default {
    components: {
      CardHeader,
    }
  }
</script>
