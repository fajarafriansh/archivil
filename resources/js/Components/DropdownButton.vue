<template>
  <div class="relative">
    <div @click="open = ! open">
      <button class="flex items-center px-4 py-2 bg-base-color5 border border-base-color4 rounded-md font-semibold text-sm text-base-color2 leading-5 hover:opacity-85 active:opacity-85 focus:outline-none focus:border-base-color4 focus:shadow-outline-gray transition ease-in-out duration-150"">

        <slot name="trigger"></slot>

        <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 24 24" :class="{'rotate-180': open}" class="ml-1 transform fill-current w-5 h-5 transition-transform ease-linear duration-300">
          <path fill-rule="evenode" d="M15.3 10.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z" />
        </svg>
      </button>
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div v-show="open" class="fixed inset-0 z-40" @click="open = false">
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <div v-show="open"
          class="absolute z-50 mt-2 rounded-md shadow-lg"
          :class="[widthClass, alignmentClasses]"
          style="display: none;"
          @click="open = false">
        <div class="rounded-md shadow-xs" :class="contentClasses">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      align: {
        default: 'right'
      },
      width: {
        default: '48'
      },
      contentClasses: {
        default: () => ['py-1', 'bg-white']
      }
    },

    data() {
      return {
        open: false
      }
    },

    created() {
      const closeOnEscape = (e) => {
        if (this.open && e.keyCode === 27) {
          this.open = false
        }
      }

      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', closeOnEscape)
      })

      document.addEventListener('keydown', closeOnEscape)
    },

    computed: {
      widthClass() {
        return {
          '48': 'w-48',
        }[this.width.toString()]
      },

      alignmentClasses() {
        if (this.align == 'left') {
          return 'origin-top-left left-0'
        } else if (this.align == 'right') {
          return 'origin-top-right right-0'
        } else {
          return 'origin-top'
        }
      },
    }
  }
</script>
