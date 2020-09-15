<template>
  <div class="bg-white rounded-lg border border-base-color4 px-5">
    <jet-section-title class="mt-12">
      <template #title><slot name="title"></slot></template>
      <template #description><slot name="description"></slot></template>
    </jet-section-title>

    <div class="mt-5">
      <form @submit.prevent="$emit('submitted')">
        <div class="overflow-hidden">
          <div class="max-w-3xl mx-auto space-y-6">
            <slot name="form"></slot>
          </div>

          <div class="flex items-center justify-end px-8 py-4 text-right border-t border-base-color4 mt-12" v-if="hasActions">
            <slot name="actions"></slot>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import JetSectionTitle from './SectionTitle'

  export default {
    components: {
      JetSectionTitle,
    },

    computed: {
      hasActions() {
        return !! this.$slots.actions
      }
    }
  }
</script>
