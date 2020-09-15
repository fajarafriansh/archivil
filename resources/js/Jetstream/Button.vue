<template>
  <button :type="type" class="inline-flex items-center px-5 py-2 bg-blue-color border border-transparent rounded-lg font-semibold text-base text-white tracking-tight leading-6 hover:opacity-85 active:opacity-85 focus:outline-none focus:border-blue-color focus:shadow-outline-blue transition ease-in-out duration-150">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'submit',
      },
    }
  }
</script>
