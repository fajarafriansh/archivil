<template>
  <div class="-my-2 py-2 overflow-x-auto sm:-mx-8 sm:px-8">
    <div class="align-middle inline-block min-w-full overflow-hidden">
      <table class="min-w-full">
        <thead>
          <slot name="thead"></slot>
        </thead>
        <tbody>
          <slot name="tbody"></slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>
