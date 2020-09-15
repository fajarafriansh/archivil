<template>
  <button :type="type" class="inline-flex items-center px-5 py-2 bg-gray-color border border-transparent rounded-lg font-semibold text-base text-white tracking-tight hover:opacity-85 focus:outline-none focus:border-gray-color focus:shadow-outline-gray active:opacity-85 transition ease-in-out duration-150">
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
