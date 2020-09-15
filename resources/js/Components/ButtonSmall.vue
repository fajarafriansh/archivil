<template>
  <button :type="type" class="inline-flex items-center px-4 py-2 bg-blue-color border border-transparent rounded-md font-semibold text-sm text-white leading-5 hover:opacity-85 active:opacity-85 focus:outline-none focus:border-blue-color focus:shadow-outline-blue transition ease-in-out duration-150">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button',
      },
    }
  }
</script>
