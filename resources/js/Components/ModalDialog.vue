<template>
  <modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
    <div class="px-4 py-4 border-b border-base-color4">
      <div class="text-xl text-base-color1 font-semibold leading-8">
        <slot name="title">
        </slot>
      </div>
    </div>

    <div class="px-4 py-4">
      <slot name="content">
      </slot>
    </div>

    <div class="flex items-center justify-end px-4 py-4 border-t border-base-color4 space-x-2">
      <slot name="footer">
      </slot>
    </div>
  </modal>
</template>

<script>
  import Modal from './Modal'

  export default {
    components: {
      Modal,
    },

    props: {
      show: {
        default: false
      },
      maxWidth: {
        default: '2xl'
      },
      closeable: {
        default: true
      },
    },

    methods: {
      close() {
        this.$emit('close')
      },
    }
  }
</script>
